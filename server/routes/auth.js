const express = require('express');
const bcrypt = require('bcrypt');

const db = require('../db');

// const controller = require('../controllers/auth.controller');

const router = new express.Router();

router.post('/register', (req, res) => {
    db.models.User.create(
        req.body,
        {
            fields: ['username', 'email', 'password']
        }
    )
        .then(
            user => {
                res.status(201);
            }
        )
        .catch(
            error => {
                res.status(500);
            }
        );
});

router.post('/login', async (req, res) => {

});

module.exports = router;
