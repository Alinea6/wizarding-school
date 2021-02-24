const server = require("../server.js");
const jwt = require("jsonwebtoken");

const getId = (token) => {
  var payload;
  try {
    payload = jwt.verify(token, server.accessTokenSecret);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.json("Unauthorized");
    }
    return res.json("Bad request");
  }
  const id = payload.user_id;
  return id;
};
module.exports = {
  getId: getId,
};
