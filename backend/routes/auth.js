const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {
    body,
    validationResult
} = require('express-validator');

router.post('/', [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password length must be atleast 6 characters').isLength({
        min: 6
    }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user)).catch(error => {
        console.log(error)
        res.send({
            error: "This mail is already registered."
        })
    });
    console.log(req.body)
})

module.exports = router