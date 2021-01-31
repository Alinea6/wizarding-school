const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwtExp = require('express-jwt');
const cors = require('cors')

const login = require('./controllers/login');
const register = require('./controllers/register');
const logout = require('./controllers/logout');

const accessTokenSecret='429c55d5763d8ef60444a7faf993b285';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
app.use(jwtExp({
    secret: accessTokenSecret, getToken: req=>req.cookies.token,
    algorithms: ['HS256']
}).unless({path: ['/', '/login', '/register']}))

const users = [{login: 'abc', email: 'abc@gmail.com', hash: '$2a$10$KrM0J5iwotXW3aP/EhSaVemyQ6tUwOUzLF1cdya0RqPrWp4HQ3RR2', role: 'user', hp: 8}]

app.get('/', (req, res) => {
    console.log('route is working')
})

app.post('/login', (req, res) => {login.handleLogin(req, res, bcrypt, accessTokenSecret, jwt, users)})

app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, users)})

app.get('/logout', (req, res) => {logout.handleLogout(req, res)})

app.listen(3003, () => {
    console.log("app is running on port 3003")
})