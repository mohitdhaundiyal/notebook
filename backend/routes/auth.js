const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const {
    body,
    validationResult
} = require('express-validator');

const fetchUser = require('../middleware/fetchUser')

const jwt = require('jsonwebtoken');
const JWT_SECRET = "bitchhhhh"


// Register
router.post('/register', [
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
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    res.send({
        "authtoken": authtoken
    })
})


// Authenticate - login
router.post('/login', [
    // validations
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password')
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

    // check if email exists or not
    const {
        email,
        password
    } = req.body;

    try {
        let user = await User.findOne({
            email
        });

        if (!user) {
            res.send({
                "error": "Invalid login, Please use correct credentials."
            })
        } else {

            const passCompare = await bcrypt.compare(password, user.password)
            if (!passCompare) {
                res.send({
                    "error": 'Invalid login, Please use correct credentials.'
                })
            } else {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authName = user.name
                const authtoken = jwt.sign(data, JWT_SECRET)
                res.send({
                    "authtoken": authtoken,
                    "authName": authName
                })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("some error occured")
    }
})


// Route : getUser
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {

    }
})

module.exports = router