var express = require('express');
const axios = require("axios");
var W3CWebSocket = require('websocket').w3cwebsocket;
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');
const BlockchainDOTcom = require('./models/BlockchainDOTcomSchema');

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
        Helpers.UpdateFactomBlockWithBTCHash(SaveData, "On Socket message")
      }
    }, 1000)
  };
}

setupWebSocket();

// Function to call Harmony to find latest Factom blocks.
CallHarm = () => {
  axios({
    method: "GET",
    url: "https://api.factom.com/v1/dblocks",
    headers: {
      "Content-Type": "application/json",
      "app_id": process.env.APPID,
      "app_key": process.env.APPKEY
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

DoINeedToCatchUp = async () => {
  let noHashList = await Promise.resolve(Helpers.GetBlocksWithoutBTCHashORWithoutConfirmation(1))
  let randomNum = Helpers.RandomNum();
  if (noHashList.length > randomNum) {
    noHashList.splice(0, randomNum).forEach((block) => {
      axios({
        method: "GET",
        url: `https://api.factom.com/v1/dblocks/${block.keymr}`,
        headers: {
          "Content-Type": "application/json",
          "app_id": process.env.APPID,
          "app_key": process.env.APPKEY
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
            Helpers.UpdateFactomBlockWithBTCHash(SaveData, "do I need to catch up, larger than 1 - 5")
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
          "app_id": process.env.APPID,
          "app_key": process.env.APPKEY
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
            Helpers.UpdateFactomBlockWithBTCHash(SaveData, "do I need to catch up, less than 1 - 5")
          }).catch(err => console.log("Blockchain.com Error: ", err.response))
        } else {
          if (noHashList.length > 0) {
            noHashList.splice(0, 10).forEach((block2) => {
              axios({
                method: "GET",
                url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
              }).then(res => {
                res.data.txs.forEach(tx => {
                  let keymr = tx.out[1].script.substring(tx.out[1].script.length - 64, tx.out[1].script.length)
                  if (keymr === block2.keymr) {
                    FactomBlocks.findOneAndUpdate({ keymr: block2.keymr }, { btc_hash: tx.hash }, (err, data) => {
                      if (err) console.log("Err in find", err)
                    })
                  }
                })
              }).catch(err => { console.log("FindingBTCHASH ERROR: ", err) })
            })
          }
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
        if (err) console.log("Err in find in CheckSavedBitcoinMessages: ", err)
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
          if (err) console.log("Err in find in FindingConfirmations: ", err)
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
  CheckSavedBitcoinMessages()
  DoINeedToCatchUp()
}, 300000)

setInterval(() => {
  FindingConfirmations()
}, 300010);

GettingETHTxs = () => {
  axios({
    method: "GET",
    url: `http://api.etherscan.io/api?module=account&action=txlist&address=0x334A31B3d9DE02e9B88FB3308a4406dF14D4Ae17&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken`
  }).then(res => {
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

// Helpers.GettingBackUp(196397, 196647) 

