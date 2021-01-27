const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwtExp = require('express-jwt');

const login = require('./controllers/login');
const register = require('./controllers/register');

const accessTokenSecret='429c55d5763d8ef60444a7faf993b285';

const app = express();
app.use(bodyParser.json())
app.use(cookieParser())
app.use(jwtExp({
    secret: accessTokenSecret, getToken: req=>req.cookies.token,
    algorithms: ['HS256']
}).unless({path: ['/login', '/register']}))

const users = [{login: 'abc', email: 'abc@gmail.com', password: 'def', role: 'user', hp: 10}]

app.post('/login', (req, res) => { login.handleLogin(req, res, accessTokenSecret, jwt, users) });

app.post('/register', (req, res) => {register.handleRegister(req, res, users)})

app.get('/profile', (req, res) => {
    res.json(users.find(u => {return u.username === req.user.username}))    
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})