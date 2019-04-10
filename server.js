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

const Helpers = require("./lib/helpers")

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => { console.log(`Connected to database`), CallHarm() })
  .on('error', (err) => { console.log(`Connection error: ${err.message}`) });

let app = express();
let vep = app.listen(6001, () => console.log(`Express Server Now Running On ${vep.address().port}`));

// Socket to listen to Factoms address on Blockchain.com
setupWebSocket = () => {
  console.log("setupWebSocket Called")
  let client = new W3CWebSocket('wss://ws.blockchain.info/inv');

  client.onerror = function (error) {
    console.log('Connection Error Bitcoin', error);
  };

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

  client.onclose = function () {
    console.log('echo-protocol Client Bitcoin Closed');
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
        Helpers.UpdateFactomBlockWithBTCHash(SaveData)
      }
    }, 1000)
  };
}

setupWebSocket();

// Function to call Harmony to find latest Factom blocks.
CallHarm = () => {
  console.log("CALLHARM")
  axios({
    method: "GET",
    url: "https://api.factom.com/v1/dblocks",
    headers: {
      "Content-Type": "application/json",
      "app_id": "c6bd4cff",
      "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
    }
  }).then(res => {
    console.log(res.data.data)
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

DoINeedToCatchUp = async () => {
  let noHashList = await Promise.resolve(Helpers.GetBlocksWithoutBTCHash(1))
  if (noHashList.length > 30) {
    noHashList.splice(0, 30).forEach((block) => {
      axios({
        method: "GET",
        url: `https://api.factom.com/v1/dblocks/${block.keymr}`,
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
            Helpers.UpdateFactomBlockWithBTCHash(SaveData)
          }).catch(err => console.log("Blockchain.com Error: ", err.response))
        }
      })
    })
  } else {
    noHashList.forEach((block) => {
      axios({
        method: "GET",
        url: `https://api.factom.com/v1/dblocks/${block.keymr}`,
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
            Helpers.UpdateFactomBlockWithBTCHash(SaveData)
          }).catch(err => console.log("Blockchain.com Error: ", err.response))
        }
      })
    })
  }
}

// Function that checks if there are new Bitcoin transactions saved and matches them to Factom Blocks
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

setInterval(() => {
  Helpers.SlackBTCBalance()
  Helpers.SlackNotification()
}, 13000)

setInterval(() => {
  CallHarm()
}, 300000)

setInterval(() => {
  FindingConfirmations()
}, 300010);

setInterval(() => {
  DoINeedToCatchUp()
  CheckSavedBitcoinMessages()
}, 3600000)

// Function to find missing BTC transaction Hash if missing. 
// FindingBTCHASH = () => {
//   TrysToFindBTCHashes("FindingBTCHASH");
//   FactomBlocks.find({ btc_hash: { $exists: false } }, (err, data) => {
//     if (err) console.log("Err in find FindingBTCHASH", err)
//     if (data.length > 0) {
//       data.forEach((block) => {
//         axios({
//           method: "GET",
//           url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
//         }).then(res => {
//           res.data.txs.forEach(tx => {
//             let keymr = tx.out[1].script.substring(tx.out[1].script.length - 64, tx.out[1].script.length)
//             if (keymr === block.keymr) {
//               FactomBlocks.findOneAndUpdate({ keymr: block.keymr }, { btc_hash: tx.hash }, (err, data) => {
//                 if (err) console.log("Err in find", err)
//               })
//             }
//           })
//         }).catch(err => { console.log("FindingBTCHASH ERROR: ", err) })
//       })
//     }
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
//   })
// }




// JustGettingConfirmations = () => {
//   console.log("hi from JustGettingConfirmations")
//   FactomBlocks.find({ btc_conf: { $exists: false }, btc_hash: { $exists: true } }, null, { sort: { height: -1 } }, (err, blocks) => {
//     if (err) console.log("Error in JustGettingConfirmations: ", err);
//     console.log("blocks? => ", blocks)
//     if (blocks.length > 0) {
//       for (let i = 0; i < blocks.length; i++) {
//         axios({
//           method: "GET",
//           url: `https://blockexplorer.com/api/tx/${blocks[i].btc_hash}`
//         }).then(blockres => {
//           console.log("response => ", blockres.data)
//           if (blockres.data.confirmations > 0) {
//             FactomBlocks.findOneAndUpdate({ keymr: blocks[i].btc_hash }, { btc_conf: true }, (err, data) => {
//               if (err) console.log("Err in find", err)
//             })
//           }
//         }).catch(err => console.log("Error from blockchain.info => ", err))
//       }
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
//     }
//   })
// }

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

temp = (height) => {
  FactomBlocks.findOneAndUpdate({ height: height }, { btc_conf: true }, (err, data) => {
    if (err) console.log("Err in find", err)
  })
}

for (let i = 187510; i > 18650; i--) {
  temp(i)
}


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

/** 
 * 
 * Commented out on April 8, 2019
 * 
 */
// CheckSavedBitcoinMessages5minutes = () => {
//   BlockchainDOTcom.find({}, (err, data) => {
//     let sorted = data.sort((a, b) => {
//       return a.height - b.height
//     })
//     if (sorted.length < 10) {
//       for (let i = 0; i <= sorted.length - 1; i++) {
//         FactomBlocks.findOneAndUpdate({ keymr: sorted[i].keymr }, { btc_hash: sorted[i].btc_trans_hash }, (err, data) => {
//           if (err) console.log("Err in find", err)
//         })
//       }
//     } else {
//       for (let i = 0; i <= 10; i++) {
//         FactomBlocks.findOneAndUpdate({ keymr: sorted[i].keymr }, { btc_hash: sorted[i].btc_trans_hash }, (err, data) => {
//           if (err) console.log("Err in find", err)
//         })
//       }
//     }
//   })
// }

// Helpers.GettingBackUp(187541, needHighest) 

