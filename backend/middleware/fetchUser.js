const jwt = require('jsonwebtoken')
const JWT_SECRET = "bitchhhhh"

const fetchUser = (req, res, next) => {
    // get user from jwt token and add id to request object
    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({
                error: "Please authenticate using a valid token"
            })
        }
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(400).send({
            error: "Some error occured"
        })
    }
}
module.exports = fetchUser;