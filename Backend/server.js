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
const homeBathroom = require('./controllers/homeBathroom');
const homeLivingRoom = require('./controllers/homeLivingRoom');
const homeGarden = require('./controllers/homeGarden');
const homeFrontDoor = require('./controllers/homeFrontDoor');
const homeTrunk = require('./controllers/homeTrunk');

const accessTokenSecret='429c55d5763d8ef60444a7faf993b285';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
app.use(jwtExp({
    secret: accessTokenSecret, getToken: req=>req.cookies.token,
    algorithms: ['HS256']
}).unless({path: ['/', '/login', '/register', '/home/trunk']}))

const users = [{login: 'abc', email: 'abc@gmail.com', 
hash: '$2a$10$KrM0J5iwotXW3aP/EhSaVemyQ6tUwOUzLF1cdya0RqPrWp4HQ3RR2', role: 'user', hp: 8}]
const usersSorting=[{login: 'abc', Gryff: 0, Rav: 0, Huff: 0, Slyth: 0, }]
const usersHomeTasks=[{login: 'abc', bathroom: false, livingroom: false, 
garden: false, frontdoor: false, trunk: false}]

app.post('/login', (req, res) => {login.handleLogin(req, res, bcrypt, accessTokenSecret, jwt, users, usersHomeTasks)})

app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, users)})

app.get('/logout', (req, res) => {logout.handleLogout(req, res)})

app.get('/home/bathroom', (req, res) => {homeBathroom.sendHomeBathroom(req, res)})

app.put('/home/bathroom', (req, res) =>{homeBathroom.handleHomeBathroom(req, res, usersSorting, usersHomeTasks)})

app.get('/home/livingroom', (req, res) => {homeLivingRoom.sendHomeLivingRoom(req, res)})

app.put('/home/livingroom', (req, res) =>{homeLivingRoom.handleLivingRoom(req, res, usersSorting, usersHomeTasks)})

app.get('/home/garden', (req, res) => {homeGarden.sendHomeGarden(req, res)})

app.put('/home/garden', (req, res) =>{homeGarden.handleHomeGarden(req, res, usersSorting, usersHomeTasks)})

app.get('/home/frontdoor', (req, res) => {homeFrontDoor.sendHomeFrontDoor(req, res)})

app.put('/home/frontdoor', (req, res) => {homeFrontDoor.handleHomeFrontDoor(req, res, usersSorting, usersHomeTasks)})

app.get('/home/trunk', (req, res) => {homeTrunk.sendHomeTrunk(req, res)})

app.put('/home/trunk', (req, res) => {homeTrunk.handleHomeTrunk(req, res, usersSorting, usersHomeTasks)})

app.listen(3003, () => {
    console.log("app is running on port 3003")
})