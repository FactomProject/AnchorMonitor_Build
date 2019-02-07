const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/') {
//         app.render(req, res, '/', {title: "BTC"})
//     } else if (pathname === '/BTC') {
//         app.render(req, res, '/', {title: "BTC"})
//     } else if (pathname === '/ETH') {
//         app.render(req, res, '/', {title: "ETH"})
//     } else {
//         handle(req, res, parsedUrl)
//     }
//   }).listen(3000, err => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })

    const server = express();

    server.get('/', (req, res) => {
        console.log("/req.params", req.params)
        console.log("/req.query", req.query)

        return app.render(req, res, '/', {title: "BTC"})
    })
    server.get('/BTC', (req, res) => {
        console.log("/BTC req.params", req.params)
        console.log("/BTC req.query", req.query)

        return app.render(req, res, '/', {title: "BTC"})
    })
    server.get('/ETH', (req, res) => {
        console.log("/ETH req.params", req.params)
        console.log("/ETH req.query", req.query)

        return app.render(req, res, '/', {title: "ETH"})
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log(`${'\u2705'}  Ready on http://localhost:3000`);
    });
})