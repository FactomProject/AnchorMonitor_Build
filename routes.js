const next = require('next')
const express = require('express')
const axios = require("axios");
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');
const NotifactionsOff = require('./models/NotificationsOff');
const PendingNotifications = require('./models/PendingNotifications');

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

  FindFactomBlocks = () => {
    return FactomBlocks.find({ btc_conf: { $exists: false } }, null, { sort: { height: -1 } })
  }

  FindFactomsBitcoinBalance = () => {
    return axios({ method: "get", url: `https://blockchain.info/q/addressbalance/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF` })
      .then(res => { return res.data })
      .catch(err => console.log("Address Balance Error ", err))
  }

  server.get('/', async (req, res) => {
    let blockList = await Promise.resolve(FindFactomBlocks());
    let BTC_Balance = await Promise.resolve(FindFactomsBitcoinBalance());

    return app.render(req, res, '/', { name: "BTC", data: blockList, lastConf: blockList[blockList.length - 1].height - 1, balance: BTC_Balance })
  })

  server.get('/BTC', async (req, res) => {
    let blockList = await Promise.resolve(FindFactomBlocks());
    let BTC_Balance = await Promise.resolve(FindFactomsBitcoinBalance());
    console.log(blockList[blockList.length - 1])

    return app.render(req, res, '/', { name: "BTC", data: blockList, lastConf: 0, balance: BTC_Balance })
  })

  server.get('/ETH', (req, res) => {
    return app.render(req, res, '/', { name: "ETH", data: "Coming Soon..." })
  })


  server.post('/offnotificationchange', (req, res) => {
    let SaveData = new NotifactionsOff({
      notificationtime: req.query.time,
      time: new Date(),
    })
    SaveData.save().catch(err => err.code === 11000 ? null : console.log("offnotificationchange Save Error: ", err));
    res.status(200).send("all good")
  })

  server.post('/pendingtimenotification', (req, res) => {
    let SaveData = new PendingNotifications({
      notificationtime: req.query.time,
      time: new Date(),
    })
    SaveData.save().catch(err => err.code === 11000 ? null : console.log("offnotificationchange Save Error: ", err));
    res.status(200).send("all good")
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

