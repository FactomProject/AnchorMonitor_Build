var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const axios = require("axios");
var W3CWebSocket = require('websocket').w3cwebsocket;
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');
const BlockchainDOTcom = require('./models/BlockchainDOTcomSchema');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => { console.log(`Connected to database`)/*, CallHarm()*/ })
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
let vep = app.listen(5001, () => console.log(`Express GraphQL Server Now Running On ${vep.address().port}`));

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
        let keyMR = outScript.substring(outScript.length-64, outScript.length);
        let height = parseInt(outScript.substring(12, 20), 16);
        let transHash = obj.x.hash;
        let time = obj.x.time;
  
        console.log("Output script: ", outScript);
        console.log("KeyMR: ", keyMR);
        console.log("Height: ",  height);
        console.log("BTC TRANS HASH: ", transHash);
        console.log("Time: ", time);
  
        let SaveData = new BlockchainDOTcom({
          script: outScript,
          keymr: keyMR,
          height: height,
          btc_trans_hash: transHash,
          time: time,
        })
        SaveData.save().then(() => {
          console.log("saved BlockchainDOTcom")
          FactomBlocks.findOneAndUpdate({keymr: keyMR}, {btc_hash: transHash},(err, data) => {
            err ? console.log("Err in find", err) :
            console.log("FOUND IT: ", data)
            // data.btc_hash = transHash;
            // data.save();
          })
        }).catch(err => console.log("BlockchainDOTcom Save Error: ", err));
      }
    }, 1000)
  };
}

setupWebSocket();

let Last_Trans_Info =
  {
    "op": "utx",
    "x": {
      "lock_time": 0,
      "ver": 2,
      "size": 242,
      "inputs": [{
        "sequence": 4294967295,
        "prev_out": {
          "spent": true,
          "tx_index": 411017513,
          "type": 0,
          "addr": "1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF",
          "value": 65252,
          "n": 0,
          "script": "76a914c5b7fd920dce5f61934e792c7e6fcc829aff533d88ac"
        },
        "script": "47304402204afa3a019ea2c63f18db6da819b842463e0b36075f86ea51c01169e0870e932502206c60e31e6839655270dd5daffbd0e8a3610ef66818d05b296de4e89b828a7ad80121027e706cd1c919431b693a0247e4a239e632659a8723a621a91ec610c64f4173ac"
      }],
      "time": 1548873213,
      "tx_index": 411020389,
      "vin_sz": 1,
      "hash": "0faf1806b60221e7a3b2361be04720156d8d85dbedd853bb0d2abfbd2f9b48db",
      "vout_sz": 2,
      "relayed_by": "0.0.0.0",
      "out": [{
        "spent": false,
        "tx_index": 411020389,
        "type": 0,
        "addr": "1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF",
        "value": 62822,
        "n": 0,
        "script": "76a914c5b7fd920dce5f61934e792c7e6fcc829aff533d88ac"
      }, {
        "spent": false,
        "tx_index": 411020389,
        "type": 0,
        "addr": null,
        "value": 0,
        "n": 1,
        "script": "6a28466100000002b5f0445aa21d85aeb1ea98fbcf135d6e703681d248ca77313b9871f99ae8e9acf9b2"
      }]
    }
  }

factomBitcoinTX = () => {
  axios({
    method: "get",
    url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
  })
    .then(response => {
      console.log(response.data.n_tx)
      // axios({
      //   method: "post",
      //   url:
      //     "https://hooks.slack.com/services/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",
      //   headers: { "Content-type": "application/json" },
      //   data: {
      //     text: "",
      //     attachments: [
      //       {
      //         fields: [
      //           {
      //             title: `Trans Count ${response.data.n_tx}%!!!`,
      //             short: true
      //           }
      //         ],
      //         color: "#FFB233",
      //         text: `Last Trans Info: ${
      //           response.data.txs[0]
      //         } `
      //       }
      //     ]
      //   }
      // })
      //   .then(res => {
      //     console.log("done")
      //   })
      //   .catch(err => {
      //     console.log("Or THIS??", err);
      //   });
    })
    .catch(err => console.log(err));
}

// setInterval(() => {
// factomBitcoinTX()
// }, 600000)

FindSmallest = () => {
  FactomBlocks.find({}, (err, data) => {
    let sorted = data.sort((a, b) => {
      return a.height - b.height
    })
    // SingleBlock(sorted[0].height);
  })
}

setInterval(() => {
  FindSmallest()
}, 300000)

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
    // console.log(res.data.data)
    res.data.data.forEach(block => {
      let SaveBlock = new FactomBlocks({
        height: block.height,
        keymr: block.keymr,
        started_at: block.started_at,
      })
      SaveBlock.save().then(() => {
        console.log("saved FactomBlocks")
      }).catch(err => err.code === 11000 ? null : console.log("FactomBlocks Save Error: ", err));
    });
  }).catch(err => console.log("CallHarm ERROR", err.response))
}
setInterval(() => {
  CallHarm()
}, 300000)

SingleBlock = (height) => {
  console.log("Height in SingleBlock ", height)
  axios({
    method: "GET",
    url: `https://connect-mainnet-2445582615332.production.gw.apicast.io/v1/dblocks/${height - 1}`,
    headers: {
      "Content-Type": "application/json",
      "app_id": "c6bd4cff",
      "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
    }
  }).then(res => {
    // console.log(res.data)
    let SaveBlock = new FactomBlocks({
      height: res.data.data.height,
      keymr: res.data.data.keymr,
      started_at: res.data.data.started_at
    })
    SaveBlock.save().then(() => {

    }).catch(() => null);
  }).catch(err => console.log("SingleBlock ERROR", err.data))
}

// SingleBlock();

CheckingBlockchainforKEYMR = () => {
  
}