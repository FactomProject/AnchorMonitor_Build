const next = require('next')
const express = require('express')
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
    console.log(req.query)
    return app.render(req, res, '/', { name: "BTC" })
  })

  server.get('/BTC', (req, res) => {
    FactomBlocks.find({}, (err, data) => {
    }).then((response) => {
      let sorted = response.sort((a, b) => {
        return b.height - a.height
      });
      console.log("res", res)
      let no_btc_hash = [];
      for (let i = 0; i <= sorted.length - 1; i++) {
        if (sorted[i].btc_hash === undefined) {
          no_btc_hash.push(sorted[i])
        }
      }
      // res.send(no_btc_hash)

      return app.render(req, res, '/', { name: "BTC", data: no_btc_hash })
    });

  })

  server.get('/ETH', (req, res) => {
    return app.render(req, res, '/', { name: "ETH" })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

