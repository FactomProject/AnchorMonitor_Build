var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const axios = require("axios");
var W3CWebSocket = require('websocket').w3cwebsocket;
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

var wsUri = "wss://ws.blockchain.info/inv";

var client = new W3CWebSocket('wss://ws.blockchain.info/inv');
 
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
        axios({
            method: "post",
            url:
              "https://hooks.slack.com/services/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",
            headers: { "Content-type": "application/json" },
            data: {
              text: "",
              attachments: [
                {
                  fields: [
                    {
                      title: `FROM THE FREAKING SOCKET`,
                      short: true
                    }
                  ],
                  color: "#FFB233",
                  text: `Last Trans Info: ${
                    e.data
                  } `
                }
              ]
            }
          })
            .then(res => {
             console.log("From socket to Slack")
            })
            .catch(err => {
              console.log("Or THIS??", err);
            });
    }
};

factomBitcoinTX = () => {
    axios({
        method: "get",
        url: `https://blockchain.info/rawaddr/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF`
    })
        .then(response => {
          console.log(response.data.n_tx)
          axios({
            method: "post",
            url:
              "https://hooks.slack.com/services/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",
            headers: { "Content-type": "application/json" },
            data: {
              text: "",
              attachments: [
                {
                  fields: [
                    {
                      title: `Trans Count ${response.data.n_tx}%!!!`,
                      short: true
                    }
                  ],
                  color: "#FFB233",
                  text: `Last Trans Info: ${
                    response.data.txs[0]
                  } `
                }
              ]
            }
          })
            .then(res => {
             console.log("done")
            })
            .catch(err => {
              console.log("Or THIS??", err);
            });
        })
        .catch(err => console.log(err));
}

setTimeout(() => {
    factomBitcoinTX()
}, 600000)

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

