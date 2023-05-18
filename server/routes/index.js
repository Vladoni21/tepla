const express = require('express');

const authRouter = require('./auth');
const usersRouter = require('./users');

const router = express.Router();

router.use(authRouter);
router.use(usersRouter);

module.exports = router;
