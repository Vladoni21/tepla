import express from 'express';
import controller from '../controller/auth';

const router = new express()

router.post('/registration', controller.authController.registration);

export default router;

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