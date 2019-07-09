const next = require('next')
const express = require('express')
const axios = require("axios");
const mongoose = require('mongoose');
const FactomBlocks = require('./models/FactomBlocksSchema');
const NotificationsOff = require('./models/NotificationsOff');
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

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  FindFactomBlocks = () => {
    return FactomBlocks.find({ btc_conf: { $exists: false } }, null, { sort: { height: -1 } })
  }

  FindLastNotificationSetOff = () => {
    return NotificationsOff.find({}, null, { sort: { time: -1 } })
  }

  FindLastPendingNoti = () => {
    return PendingNotifications.find({}, null, { sort: { time: -1 } })
  }

  FindFactomsBitcoinBalance = () => {
    return axios({ method: "get", url: `https://blockchain.info/q/addressbalance/1K2SXgApmo9uZoyahvsbSanpVWbzZWVVMF` })
      .then(res => { return res.data })
      .catch(err => console.log("Address Balance Error ", err))
  }

  FindBlocks = () => {
    return FactomBlocks.find({}, null, { sort: { height: -1 } })
  }

  server.get('/', async (req, res) => {
    let blockList = await Promise.resolve(FindFactomBlocks());
    let last = 0;
    if (!blockList.length) {
      let allBlocks = await Promise.resolve(FindBlocks());
      if (allBlocks.length) {
        last = allBlocks[0].height
      }
    } else {
      last = blockList[0].height
      for (let i = 1; i < blockList.length; i++) {
        if (last - 1 !== blockList[i].height) { break; }
        last = blockList[i].height;
      }
    }

    let BTC_Balance = await Promise.resolve(FindFactomsBitcoinBalance());
    let lastOff = await Promise.resolve(FindLastNotificationSetOff());
    let pendingNoti = await Promise.resolve(FindLastPendingNoti());

    return app.render(req, res, '/', { 
      name: "BTC",
      data: blockList,
      lastConf: last - 1,
      balance: BTC_Balance,
      lastOff: lastOff.length ? lastOff[0].notificationtime : "30 Minutes",
      pendingNoti: pendingNoti.length ? pendingNoti[0].notificationtime : "1 Block"
    })
  })

  server.get('/BTC', async (req, res) => {
    let blockList = await Promise.resolve(FindFactomBlocks());
    let last = 0;
    if (!blockList.length) {
      let allBlocks = await Promise.resolve(FindBlocks());
      last = allBlocks[0].height
    } else {
      last = blockList[0].height
      for (let i = 1; i < blockList.length; i++) {
        if (last - 1 !== blockList[i].height) { break; }
        last = blockList[i].height;
      }
    }
    let BTC_Balance = await Promise.resolve(FindFactomsBitcoinBalance());
    let lastOff = await Promise.resolve(FindLastNotificationSetOff());
    let pendingNoti = await Promise.resolve(FindLastPendingNoti());

    return app.render(req, res, '/', { 
      name: "BTC",
      data: blockList,
      lastConf: last - 1,
      balance: BTC_Balance,
      lastOff: lastOff.length ? lastOff[0].notificationtime : "30 Minutes",
      pendingNoti: pendingNoti.length ? pendingNoti[0].notificationtime : "1 Block"
    })
  })

  server.get('/ETH', (req, res) => {
    return app.render(req, res, '/', { name: "ETH", data: "Coming Soon..." })
  })


  server.post('/offnotificationchange', (req, res) => {
    let SaveData = new NotificationsOff({
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

