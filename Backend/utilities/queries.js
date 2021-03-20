const server = require("../server.js");

async function insertData(table, newData) {
  const resp = await server.database(table)
  .insert(newData)
  return resp
}

async function getUserData(table, id) {
  const resp = await server.database
    .select("*")
    .from(table)
    .where("user_id", "=", id);
  return resp;
}

async function incrementUserData(
  table,
  id,
  dataToIncrement,
  incrementValue,
  returningData
) {
  const resp = await server
    .database(table)
    .where("user_id", "=", id)
    .increment(dataToIncrement, incrementValue)
    .returning(returningData);
  return resp;
}

async function updateUserData(
  table,
  id,
  dataToUpdate,
  updatedValue,
  returningData
) {
  const resp = await server
    .database(table)
    .where("user_id", "=", id)
    .update(dataToUpdate, updatedValue)
    .returning(returningData);
  return resp;
}

async function joinAndGetData(
  table1,
  table2,
  valueToJoin1,
  valueToJoin2,
  id,
  returningData
) {
  const resp = await server
    .database(table1)
    .join(table2, valueToJoin1, valueToJoin2)
    .select(returningData)
    .where(valueToJoin2, "=", id);
  return resp;
}

async function checkLogin(login) {
  const resp = await server.database
    .select("username", "password")
    .from("login_data")
    .where("username", "=", login);
  return resp;
}

async function getIdAndLogin(login) {
  const resp = await server.database
    .select("user_id", "username")
    .from("login_data")
    .where("username", "=", login);
  return resp;
}

module.exports = {
  insertData: insertData,
  getUserData: getUserData,
  incrementUserData: incrementUserData,
  updateUserData: updateUserData,
  joinAndGetData: joinAndGetData,
  checkLogin: checkLogin,
  getIdAndLogin: getIdAndLogin,
};
