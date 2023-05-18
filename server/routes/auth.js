const express = require('express');

// const controller = require('../controllers/auth.controller');

const router = new express.Router();

router.post('/registration', controller().registration);

module.exports = router;
