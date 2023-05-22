const express = require('express');

const authRouter = require('./auth');
// const usersRouter = require('./users');

const router = express.Router();

router.post('/ping', (req, res) => {
    res.send('Pong!');
});

router.use('/auth', authRouter);
// router.use(usersRouter);

module.exports = router;
