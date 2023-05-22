const express = require('express');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const db = require('../db');

// const controller = require('../controllers/auth.controller');

const router = new express.Router();

router.post('/register', async (req, res) => {
    const user = await db.models.User.create(req.body, {
        fields: ['username', 'email', 'password'],
    });
    res.status(201);
    res.send({ id: user.id, username: user.username, email: user.email });
});

router.post('/change', (req, res) => {
    db.models.User.update(req.body, {
        fields: ['username', 'email', 'password'],
    });
});

router.post('/login', async (req, res) => {
    // const users = await db.models.User.findAll();
    const user = await db.models.User.findOne({
        where: {
            username: req.body.username,
        },
    });

    if (user) {
        user.authenticate(req.body.password).then(valid => {
            if (valid) {
                req.session.valid = valid;
                req.session.user = user;
                res.status(200);
            } else {
                res.status(401);
            }
        });
    } else {
        res.status(404);
    }
    res.send();
});

router.post('/check', (req, res) => {
    res.send(req.session.valid);
});

module.exports = router;
