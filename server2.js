const next = require('next')
const express = require('express')
const axios = require("axios");
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => { console.log(`Connected to database`)/*, CallHarm()*/ })
  .on('error', (err) => { console.log(`Connection error: ${err.message}`) });

app.prepare().then(() => {

  const server = express()

  server.get('/', (req, res) => {
    FactomBlocks.find({}, (err, data) => {
    }).then((response) => {
      let sorted = response.sort((a, b) => {
        return b.height - a.height
      });
      let no_btc_hash = [];
      let lastAnchored = 0;
      for (let i = 0; i <= sorted.length - 1; i++) {
        if (sorted[i].btc_conf === undefined) {
          no_btc_hash.push(sorted[i])
        } else {

        }
      }

      let stuff = axios({ method: "get", url: `https://blockchain.info/q/addressbalance/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF` })
        .then(res => {
          return res.data
        })
        .catch(err => console.log("Address Balance Error ", err))

      let balance = Promise.resolve(stuff);
      balance.then((val) => {
        return app.render(req, res, '/', { name: "BTC", data: no_btc_hash, balance: val })
      })

    });
  })

  server.get('/BTC', (req, res) => {
    FactomBlocks.find({}, (err, data) => {
    }).then((response) => {
      let sorted = response.sort((a, b) => {
        return b.height - a.height
      });
      let no_btc_hash = [];
      let lastAnchored = 0;
      for (let i = 0; i <= sorted.length - 1; i++) {
        if (sorted[i].btc_conf === undefined) {
          no_btc_hash.push(sorted[i])
        } else {

        }
      }

      let stuff = axios({ method: "get", url: `https://blockchain.info/q/addressbalance/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF` })
        .then(res => {
          return res.data
        })
        .catch(err => console.log("Address Balance Error ", err))

      let balance = Promise.resolve(stuff);
      balance.then((val) => {
        return app.render(req, res, '/', { name: "BTC", data: no_btc_hash, balance: val })
      })

    });

  })

  server.get('/ETH', (req, res) => {
    return app.render(req, res, '/', { name: "ETH", data: "Coming Soon..." })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

