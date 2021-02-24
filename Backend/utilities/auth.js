const server = require('../server.js')
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.cookies.token
    if (token){
        jwt.verify(token, server.accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            next()
        })
    } else {
        res.sendStatus(401)
    }
}
module.exports = {
    authenticate: authenticate
}