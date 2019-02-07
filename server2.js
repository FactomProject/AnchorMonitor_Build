const next = require('next')
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express()

  server.get('/', (req, res) => {
      console.log(req.query)
    return app.render(req, res, '/', {name: "BTC"})
  })

  server.get('/BTC', (req, res) => {
    return app.render(req, res, '/', {name: "BTC"})
  })

  server.get('/ETH', (req, res) => {
    return app.render(req, res, '/', { name: "ETH"})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})