const axios = require("axios");
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('../models/FactomBlocksSchema');
const PendingNotifications = require('../models/PendingNotifications');
const NotificationsOff = require('../models/NotificationsOff');
const SentToSlack = require('../models/SentToSlack');
const BalanceToSlack = require('../models/BalanceToSlack');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => { console.log(`Connected to database in Helper.js`) })
    .on('error', (err) => { console.log(`Connection error: ${err.message}`) });

class Helpers {
    static RandomNum() {
        return Math.floor(Math.random() * (5 - 1)) + 1;
    }

    static GetPendingList(order) {
        return FactomBlocks.find({ btc_conf: { $exists: false } }, null, { sort: { height: order === 1 ? 1 : -1 } })
    }

    static GetBlocksWithoutBTCHashORWithoutConfirmation(order) {
        return FactomBlocks.find({ $or:[{ btc_hash: { $exists: false } }, { btc_conf: { $exists: false } }] }, null, { sort: { height: order === 1 ? 1 : -1 } })
    }

    static UpdateFactomBlockWithBTCHash(SaveData, from) {
        SaveData.save().then(() => {
            FactomBlocks.findOneAndUpdate({ keymr: SaveData.keymr }, { btc_hash: SaveData.btc_trans_hash }, (err, data) => {
                console.log("UpdateFactomBlockWithBTCHash 33: ", from, "\n", SaveData, "\n")
                if (err) console.log("Err in SaveWebSocketData: ", err)
            })
        }).catch(err => {
            if (err.code === 11000) {
                console.log("UpdateFactomBlockWithBTCHash 37: ", from, "\n", SaveData, "\n")
                FactomBlocks.findOneAndUpdate({ keymr: SaveData.keymr }, { btc_hash: SaveData.btc_trans_hash, btc_conf: true }, (err, data) => {
                    if (err) console.log("Err in SaveWebSocketData: ", err)
                })
            } else {
                console.log("BlockchainDOTcom Save Error: ", err)
            }
        });
    }

    static GetLastSlackNotification() {
        return SentToSlack.find({}, null, { sort: { notification_time: -1 } })
    }
    static GetLastBalanceNotification() {
        return BalanceToSlack.find({}, null, { sort: { notification_time: -1 } })
    }

    static GettingBackUp(needLowest, needHighest) {
        for (let i = needLowest; i <= needHighest; i++) {
            axios({
                method: "GET",
                url: `https://api.factom.com/v1/dblocks/${i}`,
                headers: {
                    "Content-Type": "application/json",
                    "app_id": process.env.APPID,
                    "app_key": process.env.APPKEY
                }
            }).then((res) => {
                let height = res.data.data.height;
                let keymr = res.data.data.keymr;
                let started_at = res.data.data.started_at;
                let btc_hash = res.data.data.btc_transaction;
                if (btc_hash === null) {
                    let SaveBlock = new FactomBlocks({
                        height: height,
                        keymr: keymr,
                        started_at: started_at,
                    })
                    SaveBlock.save().then(() => { console.log("done")
                    }).catch(err => console.log("FactomBlocks Save Error: ", err));
                } else {
                    let SaveBlock = new FactomBlocks({
                        height: height,
                        keymr: keymr,
                        started_at: started_at,
                        btc_hash: btc_hash
                    })
                    SaveBlock.save().then(() => {
                        console.log("done")
                    }).catch(err => console.log("FactomBlocks Save Error: ", err));
                }
            })
        }
    }

    static SlackNotification(URL) {
        NotificationsOff.find({}, null, { sort: { time: -1 } }, (err, off) => {
            if (err) console.log("Err in find", err);
            else {
                PendingNotifications.find({}, null, { sort: { time: -1 } }, async (err, pend) => {
                    if (off[0] === undefined || off[0].notificationtime === "30 Minutes") {
                        let slackNotification = await Promise.resolve(Helpers.GetLastSlackNotification());
                        let slackNotificationLastTime;
                        if (slackNotification.length) {
                            slackNotificationLastTime = slackNotification[0].notification_time;
                        }

                        let offUntil = new Date(new Date(off[0] !== undefined ? off[0].time : 0).getTime() + (30 * 60000));
                        let pendingList = await Promise.resolve(Helpers.GetPendingList());
                        let pendingCount = 0;
                        let highest_height = "null";
                        if (pendingList.length) {
                            pendingCount = pendingList.length;
                            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
                        }
                        if (offUntil < new Date()) {
                            if (!pend.length || pendingCount >= pend[0].notificationtime && pendingCount > 0) {
                                if (Object.prototype.toString.call(slackNotificationLastTime) === "[object Date]" ) {
                                    if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                                        sendIt(pendingCount, highest_height, "From line 118")
                                    } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                        sendIt(pendingCount, highest_height, "From line 120")
                                    }
                                }
                            }
                        }
                    } else {
                        let slackNotification = await Promise.resolve(Helpers.GetLastSlackNotification());
                        let slackNotificationLastTime = [];
                        if (slackNotification.length > 0) {
                            slackNotificationLastTime = slackNotification[0].notification_time;
                        }
                        let offUntil = new Date(new Date(off[0].time).getTime() + (parseInt(off[0].notificationtime) * 3600000));
                        let pendingList = await Promise.resolve(Helpers.GetPendingList());
                        let pendingCount = 0;
                        let highest_height = "null";
                        if (pendingList.length) {
                            pendingCount = pendingList.length;
                            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
                        }

                        if (offUntil < new Date()) {
                            if (!pend.length || pendingCount >= pend[0].notificationtime && pendingCount > 0) {
                                if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                                    sendIt(pendingCount, highest_height, "From line 147")
                                } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                    sendIt(pendingCount, highest_height, "From line 149")
                                }
                            }
                        }
                    }
                })
            }
        })
        function sendIt(pendingCount, highest_height, FROM) {
            if (pendingCount > 0) {
                console.log("sendIt(): ", FROM)
                axios({
                    method: "post",
                    url:
                        "https://hooks.slack.com/services/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",
                    headers: { "Content-type": "application/json" },
                    data: {
                        text: "",
                        attachments: [
                            {
                                color: "#FFB233",
                                text: `<${URL}> for more information.`,
                                fields: [
                                    {
                                        title: `${pendingCount} Pending Bitcoin Anchors`,
                                        short: true
                                    }
                                ],
                            }
                        ]
                    }
                })
                    .then(res => {
                        let SaveData = new SentToSlack({
                            notification_time: new Date(),
                            highest_height: highest_height,
                        })
                        SaveData.save().catch(err => console.log("SentToSlack Save Error: ", err));
                    })
                    .catch(err => {
                        console.log("Or THIS??", err);
                    });
            }
        }
    }


    static SlackBTCBalance(URL) {
        // NotiCheck()
        function NotiCheck(Balance, next_teir) {
            NotificationsOff.find({}, null, { sort: { time: -1 } }, async (err, off) => {
                if (err) console.log("Err in find", err);
                else {
                    if (off[0].notificationtime === "30 minutes") {
                        let slackNotification = await Promise.resolve(Helpers.GetLastSlackNotification());
                        let slackNotificationLastTime = [];
                        if (slackNotification.length > 0) {
                            slackNotificationLastTime = slackNotification[0].notification_time;
                        }
                        let offUntil = new Date(new Date(off[0].time).getTime() + (30 * 60000));

                        if (offUntil < new Date()) {
                            if (slackNotificationLastTime.length) {
                                if (new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                    sendIt(Balance, next_teir)
                                }
                            } else {
                                sendIt(Balance, next_teir)
                            }
                        }
                    } else {
                        let slackNotification = await Promise.resolve(Helpers.GetLastSlackNotification());
                        let slackNotificationLastTime = [];
                        if (slackNotification.length > 0) {
                            slackNotificationLastTime = slackNotification[0].notification_time;
                        }
                        let offUntil = new Date(new Date(off[0].time).getTime() + (parseInt(off[0].notificationtime) * 3600000));

                        if (offUntil < new Date()) {
                            if (new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                sendIt(Balance, next_teir)
                            }
                        }
                    }
                }
            })
        }

        function sendIt(balance, next_teir) {
            axios({
                method: "post",
                url:
                    "https://hooks.slack.com/services/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",
                headers: { "Content-type": "application/json" },
                data: {
                    text: "",
                    attachments: [
                        {
                            color: "#FFB233",
                            text: `<${URL}> for more information.`,
                            fields: [
                                {
                                    title: `BTC Balance is ${balance}. `,
                                    short: true
                                }
                            ],
                        }
                    ]
                }
            })
                .then(res => {
                    let SaveData = new BalanceToSlack({
                        notification_time: new Date(),
                        balance: balance,
                        next_teir: next_teir,
                    })
                    SaveData.save().catch(err => console.log("BalanceToSlack Save Error: ", err));
                })
                .catch(err => {
                    console.log("Or THIS??", err);
                });
        }

        axios({ method: "get", url: `https://blockchain.info/q/addressbalance/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF` })
            .then(res => {
                let returnedBalance = res.data * 0.00000001;
                BalanceToSlack.findOne({}, null, { sort: { notification_time: -1 } }, async (err, last) => {
                    if (last === null) {
                        sendIt(returnedBalance, getClosestTeir(returnedBalance))
                    } else if (returnedBalance < last.next_teir) {
                        let balanceNotification = await Promise.resolve(Helpers.GetLastBalanceNotification());
                        let balanceNotificationLastTime = [];
                        if (balanceNotification.length > 0) {
                            balanceNotificationLastTime.push(balanceNotification[0].notification_time);
                        }
                        if (last.next_teir === 0.002 && new Date(new Date(balanceNotificationLastTime[0]).getTime() + (360 * 60000)) < new Date()) {
                            sendIt(returnedBalance, getClosestTeir(returnedBalance))
                        } else if (last.next_teir !== 0.002) {
                            sendIt(returnedBalance, getClosestTeir(returnedBalance))
                        }
                    } else if (returnedBalance > last.balance) {
                        let SaveData = new BalanceToSlack({
                            notification_time: new Date(),
                            balance: returnedBalance,
                            next_teir: getClosestTeir(returnedBalance),
                        })
                        SaveData.save().catch(err => console.log("BalanceToSlack Save Error: ", err));
                    }
                })

                function getClosestTeir(balance) {
                    let tiers = [0.002, 0.005, 0.007, 0.009, 0.01, 0.03, 0.05, 0.07, 0.1];
                    var i = 0;

                    while (tiers[++i] < balance);

                    return tiers[--i];
                }
            })
            .catch(err => console.log("Address Balance Error ", err))
    }
}

module.exports = Helpers;

temp = (height) => {
  FactomBlocks.findOneAndUpdate({ height: height }, { btc_conf: true }, (err, data) => {
    if (err) console.log("Err in find", err)
  })
}

for (let i = 196596; i > 196398; i--) {
  temp(i)
}

/** IMPORTANT FOR DELETING DUPS IN BLOCKCHAINDOTCOM */
// for (let j = 189726; j > 188726; j--) {
//   BlockchainDOTcom.find({ height: j }, (err, data) => {
//     let keeper = data[0];
//     // console.log("keeper", keeper)
//     if (data.length > 1) {
//       for (let i = 1; i < data.length; i++) {
//         BlockchainDOTcom.findByIdAndRemove({ _id: data[i]["_id"] }, (err, data) => {
//           if (err) {
//             console.log("Nah, that aint it.")
//           } else {
//             console.log("YEaH: ")
//           }
//         })
//       }
//     }
//   })
// }