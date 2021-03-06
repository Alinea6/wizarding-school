const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleList = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userZone = queries.getUserData("user_location_data", id);
  userZone.then((zoneData) => {
    const userDataPromise = queries.getUserData("house_tasks", id);
    userDataPromise.then((data) => {
      const tasks = {};
      if (data[0].bathroom) {
        tasks.bathroom = `Poranna toaleta - wykonane`;
      } else if (!data[0].bathroom) {
        tasks.bathroom = `Poranna toaleta (łazienka)`;
      }
      if (data[0].livingroom) {
        tasks.livingroom = `Przypomnij rodzicom o godzinie odjazdu pociągu - wykonane`;
      } else if (!data[0].livingroom) {
        tasks.livingroom = `Przypomnij rodzicom o godzinie odjazdu pociągu (salon)`;
      }
      if (data[0].garden) {
        tasks.garden = `Pożegnaj się z kotem - wykonane`;
      } else if (!data[0].garden) {
        tasks.garden = `Pożegnaj się z kotem (ogród)`;
      }
      if (data[0].frontdoor) {
        tasks.frontdoor = `Idź do sklepu po pieczywo - wykonane`;
      } else if (!data[0].frontdoor) {
        tasks.frontdoor = `Idź do sklepu po pieczywo (drzwi frontowe)`;
      }
      if (data[0].trunk) {
        tasks.trunk = `Spakuj kufer - wykonane`;
      } else if (!data[0].trunk) {
        tasks.trunk = `Spakuj kufer (Twój pokój)`;
      }
      if (data[0].cleanroom) {
        tasks.cleanroom = `Posprzątaj pokój - wykonane`;
      } else if (!data[0].cleanroom) {
        tasks.cleanroom = `Posprzątaj pokój (Twój pokój)`;
      }
      if (data[0].packtrunk) {
        tasks.packtrunk = `Zapakuj kufer do samochodu - wykonane`;
      } else if (!data[0].packtrunk) {
        tasks.packtrunk = `Zapakuj kufer do samochodu (garaż)`;
      }
      res.json({ list: tasks, zone_id: zoneData[0]["zone_id"] });
    });
  });
};

module.exports = {
  handleList: handleList,
};
