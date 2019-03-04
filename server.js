var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const axios = require("axios");
var W3CWebSocket = require('websocket').w3cwebsocket;
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');
const BlockchainDOTcom = require('./models/BlockchainDOTcomSchema');
const PendingNotifications = require('./models/PendingNotifications');
const NotificationsOff = require('./models/NotificationsOff');
const SentToSlack = require('./models/SentToSlack');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => { console.log(`Connected to database`), CallHarm() })
  .on('error', (err) => { console.log(`Connection error: ${err.message}`) });

// GraphQL schema
var schema = buildSchema(`
type Query {
  message: String
}
`);
// Root resolver
var root = {
  message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
let vep = app.listen(6001, () => console.log(`Express GraphQL Server Now Running On ${vep.address().port}`));

// Socket to listen to Factoms address on Blockchain.com
setupWebSocket = () => {
  let client = new W3CWebSocket('wss://ws.blockchain.info/inv');
  client.onerror = function () {
    console.log('Connection Error');
  };

  client.onopen = function () {
    console.log('WebSocket Client Connected');

    function sendNumber() {
      if (client.readyState === client.OPEN) {
        client.send(`{"op":"addr_sub", "addr":"1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF"}`);
      }
    }
    setInterval(() => {
      sendNumber();
    }, 300000)

    sendNumber();
  };

  client.onclose = function () {
    console.log('echo-protocol Client Closed WHYYYYYYY');
    setTimeout(setupWebSocket, 1000)
  };

  client.onmessage = function (e) {
    CallHarm();
    setTimeout(() => {
      if (typeof e.data === 'string') {
        let obj = JSON.parse(e.data);
        let outScript = obj.x.out[1].script;
        let keyMR = outScript.substring(outScript.length - 64, outScript.length);
        let height = parseInt(outScript.substring(12, 20), 16);
        let transHash = obj.x.hash;
        let time = obj.x.time;

        let SaveData = new BlockchainDOTcom({
          script: outScript,
          keymr: keyMR,
          height: height,
          btc_trans_hash: transHash,
          time: time,
        })
        SaveData.save().then(() => {
          FactomBlocks.findOneAndUpdate({ keymr: keyMR }, { btc_hash: transHash }, (err, data) => {
            if (err) console.log("Err in find", err)
          })
        }).catch(err => err.code === 11000 ? null : console.log("BlockchainDOTcom Save Error: ", err));
      }
    }, 1000)
  };
}

setupWebSocket();

GetLastSlackNotification = () => {
  return SentToSlack.find({}, null, { sort: { notification_time: -1 } })
}

GetPendingList = () => {
  return FactomBlocks.find({ btc_conf: { $exists: false } }, null, { sort: { height: -1 } }, (err, data) => {
  })
}

slackNotifications = () => {
  NotificationsOff.find({}, null, { sort: { time: -1 } }, (err, off) => {
    if (err) console.log("Err in find", err);
    else {
      PendingNotifications.find({}, null, { sort: { time: -1 } }, async (err, pend) => {
        console.log("CURRENT TIME: ", new Date());
        if (off[0].notificationtime === "30 minutes") {
          let slackNotification = await Promise.resolve(GetLastSlackNotification());
          let slackNotificationLastTime = [];
          if (slackNotification.length > 0) {
            slackNotificationLastTime = slackNotification[0].notification_time;
          }

          let offUntil = new Date(new Date(off[0].time).getTime() + (30 * 60000));
          let pendingList = await Promise.resolve(GetPendingList());
          let pendingCount = 0;
          let highest_height = "null";
          if (pendingList.length !== 0) {
            pendingCount = pendingList.length;
            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
          }

          if (offUntil < new Date()) {
            console.log("Passed Off Timeout")
            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
              console.log("Count more than User set Count")
              if (slackNotificationLastTime.length !== 0) {
                if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                  console.log("Pending Count >= 10 AND its been over 30 minutes since Slack notification");
                  sendIt("line 141", pendingCount, highest_height)
                } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                  console.log("Pending Count < 10 AND its been over an hour since Slack notification");
                  sendIt("line 144", pendingCount, highest_height)
                } else {
                  console.log(`NO!!!! last Slack: ${new Date(slackNotificationLastTime)} and pendingCount: ${pendingCount}`)
                }
              } else {
                sendIt("line 156", pendingCount, highest_height)
              }
            } else {
              console.log(`Count: ${pendingCount} < User set count: ${pend[0].notificationtime}`)
            }
          } else {
            console.log("User set Notification Off until: ", offUntil)
          }
        } else {
          let slackNotification = await Promise.resolve(GetLastSlackNotification());
          let slackNotificationLastTime = [];
          if (slackNotification.length > 0) {
            slackNotificationLastTime = slackNotification[0].notification_time;
          }
          let offUntil = new Date(new Date(off[0].time).getTime() + (parseInt(off[0].notificationtime) * 3600000));
          let pendingList = await Promise.resolve(GetPendingList());
          let pendingCount = 0;
          let highest_height = "null";
          if (pendingList.length !== 0) {
            pendingCount = pendingList.length;
            highest_height = pendingList[0].height !== undefined ? pendingList[0].height : ("error finding height...", console.log("pendingList[0]", pendingList[0]));
          }

          if (offUntil < new Date()) {
            console.log("Passed Off Timeout")
            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
              console.log("Count more than User set Count")
              if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                console.log("Pending Count >= 10 AND its been over 30 minutes since Slack notification");
                sendIt("line 168", pendingCount, highest_height)
              } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                console.log("Pending Count < 10 AND its been over an hour since Slack notification");
                sendIt("line 171", pendingCount, highest_height)
              } else {
                console.log(`NO!!!! last Slack: ${new Date(slackNotificationLastTime)} and pendingCount: ${pendingCount}`)
              }
            } else {
              console.log(`Count: ${pendingCount} < User set count: ${pend[0].notificationtime}`)
            }
          } else {
            console.log("User set Notification Off until: ", offUntil)
          }
        }
      })
    }
  })
  function sendIt(whereFrom, pendingCount, highest_height) {
    console.log("Send it called!", whereFrom);
    console.log("pending: ", pendingCount)
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
              text: `<http://localhost:3000/BTC> for more information.`,
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

setInterval(() => {
  slackNotifications()
}, 13000)

// Function to call Harmony to find latest Factom blocks.
CallHarm = () => {
  axios({
    method: "GET",
    url: "https://connect-mainnet-2445582615332.production.gw.apicast.io/v1/dblocks",
    headers: {
      "Content-Type": "application/json",
      "app_id": "c6bd4cff",
      "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
    }
  }).then(res => {
    res.data.data.forEach(block => {
      let SaveBlock = new FactomBlocks({
        height: block.height,
        keymr: block.keymr,
        started_at: block.started_at,
      })
      SaveBlock.save().then(() => {
      }).catch(err => err.code === 11000 ? null : console.log("FactomBlocks Save Error: ", err));
    });
  }).catch(err => console.log("CallHarm ERROR", err.response))
}
setInterval(() => {
  CallHarm()
}, 300000)

SingleBlock = () => {
  FindingBTCHASH()
  FactomBlocks.find({ btc_hash: { $exists: false } }, (err, data) => {
    err ? console.log("Err in find", err) : console.log("without btc_hash: ", data)
    if (data.length > 0) {
      data.forEach((block) => {
        axios({
          method: "GET",
          url: `https://connect-mainnet-2445582615332.production.gw.apicast.io/v1/dblocks/${block.keymr}`,
          headers: {
            "Content-Type": "application/json",
            "app_id": "c6bd4cff",
            "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
          }
        }).then(res => {
          if (res.data.data.btc_transaction !== null) {
            axios({
              method: "GET",
              url: `https://blockchain.info/rawtx/${res.data.data.btc_transaction}`
            }).then(blockres => {
              let outScript = blockres.data.out[1].script;
              let keyMR = outScript.substring(outScript.length - 64, outScript.length);
              let height = parseInt(outScript.substring(12, 20), 16);
              let transHash = blockres.data.hash;
              let time = blockres.data.time;

              let SaveData = new BlockchainDOTcom({
                script: outScript,
                keymr: keyMR,
                height: height,
                btc_trans_hash: transHash,
                time: time,
              })
              SaveData.save().then(() => {
                FactomBlocks.findOneAndUpdate({ keymr: keyMR }, { btc_hash: transHash }, (err, data) => {
                })
              }).catch(err => console.log("BlockchainDOTcom Save Error: ", err));
            }).catch(err => console.log("Blockchain.com Error: ", err.response))
          }
        }).catch(err => console.log("SingleBlock Error: ", err))
      })
    }
  })
}

let needHighest = 182300;
let needLowest = 182258;
GettingBackUp = () => {
  for (let i = needLowest; i <= needHighest; i++) {
    axios({
      method: "GET",
      url: `https://connect-mainnet-2445582615332.production.gw.apicast.io/v1/dblocks/${i}`,
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

// GettingBackUp();

CheckSavedBitcoinMessages = () => {
  BlockchainDOTcom.find({}, (err, data) => {
    let sorted = data.sort((a, b) => {
      return a.height - b.height
    })
    for (let i = 0; i <= sorted.length - 1; i++) {
      FactomBlocks.findOneAndUpdate({ keymr: sorted[i].keymr }, { btc_hash: sorted[i].btc_trans_hash }, (err, data) => {
        if (err) console.log("Err in find", err)
      })
    }
  })
}

setInterval(() => {
  CheckSavedBitcoinMessages()
}, 3600000)

CheckSavedBitcoinMessages5minutes = () => {
  BlockchainDOTcom.find({}, (err, data) => {
    let sorted = data.sort((a, b) => {
      return a.height - b.height
    })
    if (sorted.length < 10) {
      for (let i = 0; i <= sorted.length - 1; i++) {
        FactomBlocks.findOneAndUpdate({ keymr: sorted[i].keymr }, { btc_hash: sorted[i].btc_trans_hash }, (err, data) => {
          if (err) console.log("Err in find", err)
        })
      }
    } else {
      for (let i = 0; i <= 10; i++) {
        FactomBlocks.findOneAndUpdate({ keymr: sorted[i].keymr }, { btc_hash: sorted[i].btc_trans_hash }, (err, data) => {
          if (err) console.log("Err in find", err)
        })
      }
    }
  })
}

FindingConfirmations = () => {
  SingleBlock();
  axios({
    method: "GET",
    url: `https://api.blockcypher.com/v1/btc/main/addrs/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF?includeScript=true`
  }).then(res => {
    res.data.txrefs.forEach((trans) => {
      if (trans.confirmations > 0) {
        FactomBlocks.findOneAndUpdate({ btc_hash: trans.tx_hash }, { btc_conf: true }, (err, data) => {
          if (err) console.log("Err in find", err)
        })
      }
    })
  }).catch(err => console.log("err", err))
}

// Function to find missing BTC transaction Hash if missing. 
FindingBTCHASH = () => {
  FactomBlocks.find({ btc_hash: { $exists: false } }, (err, data) => {
    if (err) console.log("Err in find FindingBTCHASH", err)
    if (data.length > 0) {
      data.forEach((block) => {
        axios({
          method: "GET",
          url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
        }).then(res => {
          res.data.txs.forEach(tx => {
            let keymr = tx.out[1].script.substring(tx.out[1].script.length - 64, tx.out[1].script.length)
            if (keymr === block.keymr) {
              FactomBlocks.findOneAndUpdate({ keymr: block.keymr }, { btc_hash: tx.hash }, (err, data) => {
                if (err) console.log("Err in find", err)
              })
            }
          })
        }).catch(err => { console.log("FindingBTCHASH ERROR: ", err) })
      })
    }
  })
}


setInterval(() => {
  CheckSavedBitcoinMessages5minutes()
  FindingBTCHASH()
  FindingConfirmations()
  SingleBlock();
}, 300010)
