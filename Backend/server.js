const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const jwtExp = require("express-jwt");
const cors = require("cors");
const knex = require("knex");

const getId = require("./utilities/getId");
const queries = require("./utilities/queries");
const auth = require("./utilities/auth");
const login = require("./controllers/login");
const register = require("./controllers/register");
const logout = require("./controllers/logout");
const newUser = require("./controllers/newUser")
const stats = require("./controllers/stats");
const sorting = require("./controllers/sorting");
const homeBathroom = require("./controllers/homeBathroom");
const homeLivingRoom = require("./controllers/homeLivingRoom");
const homeGarden = require("./controllers/homeGarden");
const homeFrontDoor = require("./controllers/homeFrontDoor");
const homeTrunk = require("./controllers/homeTrunk");
const homeCleanRoom = require("./controllers/homeCleanRoom");
const homePackTrunk = require("./controllers/homePackTrunk");
const homeList = require("./controllers/homeList");
const homeCar = require("./controllers/homeCar");
const home = require("./controllers/home");
const londonTrain = require("./controllers/londonTrain");
const hogwartSorting = require("./controllers/hogwartSorting");

const accessTokenSecret = "429c55d5763d8ef60444a7faf993b285";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  jwtExp({
    secret: accessTokenSecret,
    getToken: (req) => req.cookies.token,
    algorithms: ["HS256"],
  }).unless({ path: ["/", "/login", "/register"] })
);

const database = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "admin_ali",
    password: "1234qwer",
    database: "admin_ali",
  },
});

app.post("/login", (req, res) => {
  login.handleLogin(req, res, bcrypt, accessTokenSecret, jwt, database);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, bcrypt, database);
});

app.get("/logout", (req, res) => {
  logout.handleLogout(req, res);
});

app.get("/new", auth.authenticate, (req, res) => {
  newUser.handleNewUser(req, res);
});

app.get("/home/bathroom", auth.authenticate, (req, res) => {
  homeBathroom.sendHomeBathroom(req, res);
});

app.put("/home/bathroom", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "bathroom",
    "gryff",
    "slyth",
    "rav",
    "huff"
  );
});

app.get("/home/livingroom", auth.authenticate, (req, res) => {
  homeLivingRoom.sendHomeLivingRoom(req, res);
});

app.put("/home/livingroom", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "livingroom",
    "huff",
    "gryff",
    "rav",
    "slyth"
  );
});

app.get("/home/garden", auth.authenticate, (req, res) => {
  homeGarden.sendHomeGarden(req, res);
});

app.put("/home/garden", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "garden",
    "slyth",
    "gryff",
    "huff",
    "rav"
  );
});

app.get("/home/frontdoor", auth.authenticate, (req, res) => {
  homeFrontDoor.sendHomeFrontDoor(req, res);
});

app.put("/home/frontdoor", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "frontdoor",
    "rav",
    "gryff",
    "slyth",
    "huff"
  );
});

app.get("/home/trunk", auth.authenticate, (req, res) => {
  homeTrunk.sendHomeTrunk(req, res);
});

app.put("/home/trunk", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "trunk",
    "slyth",
    "huff",
    "rav",
    "gryff"
  );
});

app.get("/home/cleanroom", auth.authenticate, (req, res) => {
  homeCleanRoom.sendHomeCleanRoom(req, res);
});

app.put("/home/cleanroom", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "cleanroom",
    "rav",
    "slyth",
    "huff",
    "gryff"
  );
});

app.get("/home/packtrunk", auth.authenticate, (req, res) => {
  homePackTrunk.sendHomePackTrunk(req, res);
});

app.put("/home/packtrunk", auth.authenticate, (req, res) => {
  sorting.handleSorting(
    req,
    res,
    "packtrunk",
    "gryff",
    "rav",
    "huff",
    "slyth"
  );
});

app.get("/home/list", auth.authenticate, (req, res) => {
  homeList.handleList(req, res, getId, queries);
});

app.get("/stats", auth.authenticate, (req, res) => {
  stats.handleStats(req, res);
});

app.get("/home/car", auth.authenticate, (req, res) => {
  homeCar.handleCar(req, res);
});

app.get("/home/ride", auth.authenticate, (req, res) => {
  homeCar.handleRide(req, res);
})

app.get("/home", auth.authenticate, (req, res) => {
  home.handleHome(req, res);
})

app.get("/london/train", auth.authenticate, (req, res) => {
  londonTrain.handleTrain(req, res)
})

app.get("/hogwart/beforesorting", auth.authenticate, (req, res) => {
  hogwartSorting.handleBeforeSorting(req, res)
})

app.get("/hogwart/sorting", auth.authenticate, (req, res) => {
  hogwartSorting.handleSorting(req, res)
})

app.put("/hogwart/sorting", auth.authenticate, (req, res) => {
  hogwartSorting.handleHatstall(req, res)
})

app.listen(3003, () => {
  console.log("app is running on port 3003");
});

exports.accessTokenSecret = accessTokenSecret;
exports.database = database;
