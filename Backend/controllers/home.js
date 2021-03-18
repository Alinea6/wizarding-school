const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleHome = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userZone = queries.getUserData("user_location_data", id);
  userZone.then((zoneData) => {
    return res.json({
      zone_id: zoneData[0]["zone_id"],
    })
  })
}

module.exports = {
  handleHome: handleHome,
};