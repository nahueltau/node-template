const express = require('express');
const router = express.Router()
const exampleRouter = require('./exampleRouter');


router.get('/', (req, res) => {
    const ip = req.socket.remoteAddress;
    res.send(`Hello World from ${ip}`);
})
router.use('/example', exampleRouter)

module.exports = router;