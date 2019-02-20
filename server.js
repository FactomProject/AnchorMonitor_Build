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

CallHarm = () => {
  console.log("Called CallHarm")
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
        console.log("saved FactomBlocks")
      }).catch(err => err.code === 11000 ? null : console.log("FactomBlocks Save Error: ", err));
    });
  }).catch(err => console.log("CallHarm ERROR", err.response))
}
setInterval(() => {
  CallHarm()
}, 300000)

SingleBlock = () => {
  FactomBlocks.find({ btc_hash: { $exists: false } }, (err, data) => {
    err ? console.log("Err in find", err) : console.log("without btc_hash: ", data)
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
            console.log("saved BlockchainDOTcom")
            FactomBlocks.findOneAndUpdate({ keymr: keyMR }, { btc_hash: transHash }, (err, data) => {
            })
          }).catch(err => console.log("BlockchainDOTcom Save Error: ", err));
        }).catch(err => console.log("Blockchain.com Error: ", err.response))
      }).catch(err => console.log("SingleBlock Error: ", err))
    })
  })
}

CheckSavedBitcoinMessages = () => {
  console.log("Called CheckSavedBitcoinMessages")
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
    url: `https://api.blockcypher.com/v1/btc/main/addrs/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF?limit=500`
  }).then(res => {
    for (let keys in res.data) {
      console.log("key: ", keys)
    }
    console.log(res.data.txrefs.length)
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
  FindingConfirmations()
  CheckSavedBitcoinMessages5minutes()
}, 300010)

