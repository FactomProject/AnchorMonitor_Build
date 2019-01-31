var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const axios = require("axios");
var W3CWebSocket = require('websocket').w3cwebsocket;
require('dotenv').config();
const mongoose = require('mongoose');
const FactomBlocks = require('./models/BlocksFromHarmony');

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
let vep = app.listen(5001, () => console.log(`Express GraphQL Server Now Running On ${vep.address().port}`));
    
// Socket to listen to Factoms address on Blockchain.com
let client = new W3CWebSocket('wss://ws.blockchain.info/inv');    
client.onerror = function() {
  console.log('Connection Error');
};
    
client.onopen = function() {
  console.log('WebSocket Client Connected');

  function sendNumber() {
    if (client.readyState === client.OPEN) {
      client.send(`{"op":"addr_sub", "addr":"1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF"}`);
    }
  }
  sendNumber();
};
 
client.onclose = function() {
  console.log('echo-protocol Client Closed');
};
 
client.onmessage = function(e) {
  if (typeof e.data === 'string') {
    console.log("Received: '" + e.data + "'");
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
    //             title: `FROM THE FREAKING SOCKET`,
    //             short: true
    //           }
    //         ],
    //         color: "#FFB233",
    //         text: `Last Trans Info: ${
    //           e.data
    //         } `
    //       }
    //     ]
    //   }
    // })
    //   .then(res => {
    //     console.log("From socket to Slack")
    //   })
    //   .catch(err => {
    //     console.log("Or THIS??", err);
    //   });
  }
};

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
    let sorted = data.sort((a,b) => {
      return a.height-b.height
    })
    SingleBlock(sorted[0].height);
  })
}

setInterval(() => {
  FindSmallest()
}, 60000)

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
        started_at: block.started_at 
      })
      SaveBlock.save().then(() => {
        
      }).catch(() => null);
    });
  })
}
setInterval(() => {
  CallHarm()
}, 300000)

SingleBlock = (height) => {
  console.log("Height in SingleBlock ", height)
    axios({
      method: "GET",
      url: `https://connect-mainnet-2445582615332.production.gw.apicast.io/v1/dblocks/${height-1}`,
      headers: {
        "Content-Type": "application/json",
        "app_id": "c6bd4cff",
        "app_key": "0d3d184ba18b8d7762b97cfa9a6cf7cb"
      }
    }).then(res => {
      console.log(res.data)
      let SaveBlock = new FactomBlocks({
        height: res.data.data.height,
        keymr: res.data.data.keymr,
        started_at: res.data.data.started_at 
      })
      SaveBlock.save().then(() => {
        
      }).catch(() => null);
    }).catch(err => console.log(err))
}

// SingleBlock();