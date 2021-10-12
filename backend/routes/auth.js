const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const {
    body,
    validationResult
} = require('express-validator');

router.post('/', [
    // validations
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password length must be atleast 6 characters')
    .isLength({
        min: 6
    })
], async (req, res) => {

    // check for validation errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // check if email already exists
    let user = await User.findOne({
        email: req.body.email
    });

    if (user) {
        return (res.status(400).json({
            error: "Sorry user with this mail already exists"
        }))
    }

    // create user
    const salt = await bcrypt.genSaltSync(10);
    const cryptPass = await bcrypt.hashSync(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: cryptPass,
    }).then(user => res.json(user))

})

module.exports = router