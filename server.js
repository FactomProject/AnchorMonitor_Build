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

let app = express();
let vep = app.listen(6001, () => console.log(`Express Server Now Running On ${vep.address().port}`));

global.APICOUNT = 840;

// Socket to listen to Factoms address on Blockchain.com
setupWebSocket = () => {
  let client = new W3CWebSocket('wss://ws.blockchain.info/inv');
  // let ethClient = new W3CWebSocket('wss://ws.blockchain.info/inv');

  client.onerror = function (error) {
    console.log('Connection Error Bitcoin', error);
  };
  // ethClient.onerror = function (erroe) {
  //   console.log('Connection Error Ethereum', error);
  // };

  client.onopen = function () {
    console.log('WebSocket Client Bitcoin Connected');

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
  // ethClient.onopen = function () {
  //   console.log('WebSocket Client Ethereum Connected');

  //   function sendNumber() {
  //     if (ethClient.readyState === ethClient.OPEN) {
  //       ethClient.send(`{"op":"addr_sub", "addr":"0x334A31B3d9DE02e9B88FB3308a4406dF14D4Ae17"}`);
  //     }
  //   }
  //   setInterval(() => {
  //     sendNumber();
  //   }, 300000)

  //   sendNumber();
  // };

  client.onclose = function () {
    console.log('echo-protocol Client Bitcoin Closed');
    setTimeout(setupWebSocket, 1000)
  };
  // ethClient.onclose = function () {
  //   console.log('echo-protocol Client Ethereum Closed');
  //   setTimeout(setupWebSocket, 1000)
  // };

  client.onmessage = function (e) {
    CallHarm();
    FindingBTCHASH("From client.onmessage");
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
  // ethClient.onmessage = function (e) {
  //   setTimeout(() => {
  //     if (typeof e.data === 'string') {
  //       axios({
  //         method: "post",
  //         url:
  //           "https://hooks.slack.com/services/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",
  //         headers: { "Content-type": "application/json" },
  //         data: {
  //           text: "",
  //           attachments: [
  //             {
  //               color: "#FFB233",
  //               text: `${e.data}`,
  //               fields: [
  //                 {
  //                   title: `${pendingCount} Pending Bitcoin Anchors`,
  //                   short: true
  //                 }
  //               ],
  //             }
  //           ]
  //         }
  //       })
  //         .then(res => {
  //           console.log("done", new Date(), highest_height);
  //         })
  //         .catch(err => {
  //           console.log("Or THIS??", err);
  //         });
  //     }
  //   }, 1000)
  // };
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
            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
              if (slackNotificationLastTime.length !== 0) {
                if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                  sendIt("line 141", pendingCount, highest_height)
                } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                  sendIt("line 144", pendingCount, highest_height)
                }
              } else {
                sendIt("line 156", pendingCount, highest_height)
              }
            }
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
            if (pendingCount >= pend[0].notificationtime && pendingCount > 0) {
              if (pendingCount >= 10 && new Date(new Date(slackNotificationLastTime).getTime() + (30 * 60000)) < new Date()) {
                sendIt("line 168", pendingCount, highest_height)
              } else if (pendingCount < 10 && new Date(new Date(slackNotificationLastTime).getTime() + (60 * 60000)) < new Date()) {
                sendIt("line 171", pendingCount, highest_height)
              }
            }
          }
        }
      })
    }
  })
  function sendIt(whereFrom, pendingCount, highest_height) {
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

setInterval(() => {
  slackNotifications()
}, 13000)

// Function to call Harmony to find latest Factom blocks.
CallHarm = () => {
  axios({
    method: "GET",
    url: "https://api.factom.com/v1/dblocks",
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

SingleBlock = (whereFrom) => {
  console.log("Where From: ", whereFrom)
  let top = 5;
  if (whereFrom === "FindingBTCHASH") {
    top = 50;
  }
  // FindingBTCHASH()
  FactomBlocks.find({ btc_hash: { $exists: false } }, null, { sort: { height: 1 } }, (err, data) => {
    err ? console.log("Err in find", err) : console.log("without btc_hash: ", data.splice(0, top))
    console.log("top: ", top)
    var BreakException = {};
    if (data.length > 0) {
      data.splice(0, top).forEach((block) => {
        axios({
          method: "GET",
          url: `https://api.factom.com/v1/dblocks/${block.keymr}`,
          headers: {
            "Content-Type": "application/json",
            "app_id": "c6bd4cff",
            "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
          }
        }).then(res => {
          APICOUNT++;
          console.log("APICOUNT++ SingleBlock then")
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
          } else {
            console.log("BREAK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            Break()
          }
        }).catch(err => {
          if (err !== BreakException) throw e;
          console.log("SingleBlock Error: ", err)
          APICOUNT++;
          console.log("APICOUNT++ SingleBlock catch")
        })
        function Break() {
          throw BreakException;
        }
      })
    }
  })
}

let needHighest = 186499;
let needLowest = 186372;
GettingBackUp = () => {
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
  SingleBlock("FindingBTCHASH");
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
    // else {
    //   data.slice(data.length - 40, data.length - 1).forEach((block) => {
    //     axios({
    //       method: "GET",
    //       url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
    //     }).then(res => {
    //       res.data.txs.forEach(tx => {
    //         let keymr = tx.out[1].script.substring(tx.out[1].script.length - 64, tx.out[1].script.length)

    //         if (keymr === block.keymr) {
    //           FactomBlocks.findOneAndUpdate({ keymr: block.keymr }, { btc_hash: tx.hash }, (err, data) => {
    //             if (err) console.log("Err in find", err)
    //           })
    //         }
    //       })
    //     }).catch(err => { console.log("FindingBTCHASH ERROR: ", err) })
    //   }).then(() => {
    //     data.forEach((block) => {
    //       axios({
    //         method: "GET",
    //         url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
    //       }).then(res => {
    //         console.log("FindingBTCHASH res => ", res.data.txs.length)

    //         res.data.txs.forEach(tx => {
    //           console.log("FindingBTCHASH res out => ", tx.out)
    //           let keymr = tx.out[1].script.substring(tx.out[1].script.length - 64, tx.out[1].script.length)
    //           console.log("keymr => ", keymr)

    //           if (keymr === block.keymr) {
    //             console.log("keymr: ", keymr, " block.keymr: ", block.keymr)

    //             FactomBlocks.findOneAndUpdate({ keymr: block.keymr }, { btc_hash: tx.hash }, (err, data) => {
    //               if (err) console.log("Err in find", err)
    //             })
    //           }
    //         })
    //       }).catch(err => { console.log("FindingBTCHASH ERROR: ", err) })
    //     })
    //   })
    // }
  })
}


setInterval(() => {
  // FindingBTCHASH()
  FindingConfirmations()
}, 300010);
// SingleBlock("SetInterval");

JustGettingConfirmations = () => {
  console.log("hi from JustGettingConfirmations")
  FactomBlocks.find({ btc_conf: { $exists: false }, btc_hash: { $exists: true } }, null, { sort: { height: -1 } }, (err, blocks) => {
    if (err) console.log("Error in JustGettingConfirmations: ", err);
    console.log("blocks? => ", blocks)
    if (blocks.length > 0) {
      for (let i = 0; i < blocks.length; i++) {
        axios({
          method: "GET",
          url: `https://blockexplorer.com/api/tx/${blocks[i].btc_hash}`
        }).then(blockres => {
          console.log("response => ", blockres.data)
          if (blockres.data.confirmations > 0) {
            FactomBlocks.findOneAndUpdate({ keymr: blocks[i].btc_hash }, { btc_conf: true }, (err, data) => {
              if (err) console.log("Err in find", err)
            })
          }
        }).catch(err => console.log("Error from blockchain.info => ", err))
      }
      // axios({
      //   method: "GET",
      //   url: `https://blockchain.info/rawtx/${res.data.data.btc_transaction}`
      // }).then(blockres => {
      //   let outScript = blockres.data.out[1].script;
      //   let keyMR = outScript.substring(outScript.length - 64, outScript.length);
      //   let height = parseInt(outScript.substring(12, 20), 16);
      //   let transHash = blockres.data.hash;
      //   let time = blockres.data.time;

      //   let SaveData = new BlockchainDOTcom({
      //     script: outScript,
      //     keymr: keyMR,
      //     height: height,
      //     btc_trans_hash: transHash,
      //     time: time,
      //   })
      // SaveData.save().then(() => {
      //   FactomBlocks.findOneAndUpdate({ keymr: keyMR }, { btc_hash: transHash }, (err, data) => {
      //   })
      // }).catch(err => console.log("BlockchainDOTcom Save Error: ", err));
      // }).catch(err => console.log("Blockchain.com Error: ", err.response))
    }
  })
}

// JustGettingConfirmations();

GettingETHTxs = () => {
  axios({
    method: "GET",
    url: `http://api.etherscan.io/api?module=account&action=txlist&address=0x334A31B3d9DE02e9B88FB3308a4406dF14D4Ae17&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken`
  }).then(res => {
    console.log(res.data.result.length);
    for (let i = 0; i < res.data.result.length; i++) {
      let tx = res.data.result[i]
      let SaveData = new EthereumTx({
        eth_block: parseInt(tx.blockNumber),
        time: new Date(parseInt(tx.timeStamp) * 1000),
        eth_trx_hash: tx.hash,
        confirmations: parseInt(tx.confirmations),
        input: tx.input,
        windowmr: tx.input.substring(tx.input.length - 64),
        dbheight_max: parseInt(tx.input.substring(70, 74), 16),
        dbheight_min: parseInt(tx.input.substring(70, 74), 16) - 999,
      })
      SaveData.save()
    }
  })
}

setTimeout(() => {
  // GettingETHTxs()
}, 200)

setInterval(() => {
  console.log("APICOUNT => ", APICOUNT)
}, 4000)

temp = (height) => {
  FactomBlocks.findOneAndUpdate({ height: height }, { btc_conf: true }, (err, data) => {
    if (err) console.log("Err in find", err)
  })
}
// for (let i = 186499; i > 186372; i--) {

//   temp(i)
// }


// for (let j = 200000; j > 185506; j--) {
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
