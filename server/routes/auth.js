const Router = require('express');
const controller = require('server/controller/auth.js');

const router = new Router()

router.post('/registration', controller.authController.registration);

module.exports = router

/*
var express = require('express');
var router = express.Router();
const controller = require('server/controller/auth.js');

router.post('/', function(req, res, next) {
    res.render('registration', { title: 'Express' });
    controller.authController.registration
});

module.exports = router;
 */