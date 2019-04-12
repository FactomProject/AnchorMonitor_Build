const axios = require("axios");
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('../models/FactomBlocksSchema');
const BlockchainDOTcom = require('../models/BlockchainDOTcomSchema');
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
    static GetPendingList(order) {
        return FactomBlocks.find({ btc_conf: { $exists: false } }, null, { sort: { height: order === 1 ? 1 : -1 } })
    }

    static GetBlocksWithoutBTCHash(order) {
        return FactomBlocks.find({ btc_hash: { $exists: false } }, null, { sort: { height: order === 1 ? 1 : -1 } })
    }

    static UpdateFactomBlockWithBTCHash(SaveData) {
        SaveData.save().then(() => {
            FactomBlocks.findOneAndUpdate({ keymr: SaveData.keymr }, { btc_hash: SaveData.btc_trans_hash }, (err, data) => {
                if (err) console.log("Err in SaveWebSocketData: ", err)
            })
        }).catch(err => err.code === 11000 ? null : console.log("BlockchainDOTcom Save Error: ", err));
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
                    "app_id": "c6bd4cff",
                    "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
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
                    console.log("SaveBlock: ", SaveBlock)
                    SaveBlock.save().then(() => {
                    }).catch(err => console.log("FactomBlocks Save Error: ", err));
                } else {
                    let SaveBlock = new FactomBlocks({
                        height: height,
                        keymr: keymr,
                        started_at: started_at,
                        btc_hash: btc_hash
                    })
                    console.log("SaveBlock: ", SaveBlock)
                    SaveBlock.save().then(() => {
                    }).catch(err => console.log("FactomBlocks Save Error: ", err));
                }
            })
        }
    }














    static SlackNotification() {
        NotificationsOff.find({}, null, { sort: { time: -1 } }, (err, off) => {
            if (err) console.log("Err in find", err);
            else {
                PendingNotifications.find({}, null, { sort: { time: -1 } }, async (err, pend) => {
                    if (off[0].notificationtime === "30 minutes") {
                        let slackNotification = await Promise.resolve(Helpers.GetLastSlackNotification());
                        let slackNotificationLastTime = [];
                        if (slackNotification.length > 0) {
                            slackNotificationLastTime = slackNotification[0].notification_time;
                        }

                        let offUntil = new Date(new Date(off[0].time).getTime() + (30 * 60000));
                        let pendingList = await Promise.resolve(Helpers.GetPendingList());
                        let pendingCount = 0;
                        let highest_height = "null";
                        if (pendingList.length !== 0) {
                            pendingCount = pendingList.length;
                            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
                        }

                        if (offUntil < new Date()) {
                            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
                                if (slackNotificationLastTime.length !== 0) {
                                    if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                                        sendIt(pendingCount, highest_height)
                                    } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                        sendIt(pendingCount, highest_height)
                                    }
                                } else {
                                    sendIt(pendingCount, highest_height)
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
                        if (pendingList.length !== 0) {
                            pendingCount = pendingList.length;
                            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
                        }

                        if (offUntil < new Date()) {
                            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
                                if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                                    sendIt(pendingCount, highest_height)
                                } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                                    sendIt(pendingCount, highest_height)
                                }
                            }
                        }
                    }
                })
            }
        })
        function sendIt(pendingCount, highest_height) {
            if (pendingCount > 0) {
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
                                text: `<http://3.16.108.148:3000/BTC> for more information.`,
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
                        console.log("done", new Date(), highest_height);
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


    static SlackBTCBalance() {
        console.log("called SLACKBTCBALANCE")

        function NotiCheck(Balance, next_teir) {
            console.log("Called NotiCheck")
            console.log("next_tier: ", next_teir)
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
                            if (slackNotificationLastTime.length !== 0) {
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
                            text: `<http://3.16.108.148:3000/BTC> for more information.`,
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
                    console.log("Save BalanceToSlack")
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
                // NotificationsOff.find({}, null, { sort: { time: -1 } }, (err, off) => {
                //     if (err) console.log("Err in find", err);
                //     else {
                //         let slackNotification = await Promise.resolve(Helpers.GetLastBalanceNotification());
                //         let slackNotificationLastTime = [];
                //         if (slackNotification.length > 0) {
                //             slackNotificationLastTime = slackNotification[0].notification_time;
                //         }

                //         let offUntil = new Date(new Date(off[0].time).getTime() + (30 * 60000));

                //         // Get Last Balance from GetLastBalanceNotification
                //         /**                 * 
                //          * Check if New balance passed the next "tier" for sending a Notification
                //          * 
                //          * tiers: [0.002, 0.005, 0.007, 0.009, 0.01, 0.03, 0.05, 0.07, 0.1]
                //          *  
                //          * if (newBal > oldBal) { *Will be true most of the time*
                //          *    Check if newBal is > the closest ceil oldBal tier  
                //          * if (newBal)
                //          * }
                //          * For finding closest smallest
                //          * 
                //          * function getClosestValue(myArray, myValue){
                //             //optional
                //             var i = 0;

                //             while(myArray[++i] < myValue);

                //             return myArray[--i];
                //         }

                //          *  
                //          */



                //         if (offUntil < new Date()) {
                //             if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
                //                 if (slackNotificationLastTime.length !== 0) {
                //                     if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                //                         sendIt(pendingCount, highest_height)
                //                     } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                //                         sendIt(pendingCount, highest_height)
                //                     }
                //                 } else {
                //                     sendIt(pendingCount, highest_height)
                //                 }
                //             }
                //         }
                //     }
                // })
                BalanceToSlack.findOne({}, null, { sort: { notification_time: -1 } }, (err, last) => {
                    console.log("last Saved: ", last)
                    if (last === null) {
                        console.log("last === null")
                        // NotiCheck(returnedBalance, getClosestTeir(returnedBalance))
                        sendIt(returnedBalance, getClosestTeir(returnedBalance))
                    } else if (returnedBalance < last.next_teir) {
                        console.log("res.data: ", res.data, " last.next_teir: ", last.next_teir)
                        // NotiCheck(returnedBalance, getClosestTeir(returnedBalance))
                        sendIt(returnedBalance, getClosestTeir(returnedBalance))

                    } else if (returnedBalance > last.balance) {
                        console.log("res.data: ", res.data, " last.balance: ", last.balance)
                        // NotiCheck(returnedBalance, getClosestTeir(returnedBalance))
                        sendIt(returnedBalance, getClosestTeir(returnedBalance))

                    }
                })

                function getClosestTeir(balance) {
                    let tiers = [0.002, 0.005, 0.007, 0.009, 0.01, 0.03, 0.05, 0.07, 0.1];
                    var i = 0;

                    while (tiers[++i] < balance);

                    return tiers[--i];
                }

                // if (res.data * 0.00000001 < 0.1) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.07) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.05) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.03) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.01) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.009) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.007) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.005) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // } else if (res.data * 0.00000001 < 0.002) {
                //     NotiCheck(res.data * 0.00000001, getClosestTeir(res.data * 0.00000001))
                // }
            })
            .catch(err => console.log("Address Balance Error ", err))
    }
}

module.exports = Helpers;

// temp = (height) => {
//   FactomBlocks.findOneAndUpdate({ height: height }, { btc_conf: true }, (err, data) => {
//     if (err) console.log("Err in find", err)
//   })
// }

// for (let i = 187648; i > 18650; i--) {
//   temp(i)
// }

/** IMPORTANT FOR DELETING DUPS IN BLOCKCHAINDOTCOM */
// for (let j = 1819706855; j > 1819706853; j--) {
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