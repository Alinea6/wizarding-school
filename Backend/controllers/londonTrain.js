const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleTrain = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const getData = queries.getUserData("user_metadata", id)
  getData.then((userMetadata) => {
    const updatePromise = queries.updateUserData("user_location_data", id, "zone_id", 3, '*')
    updatePromise.then((locationData) => {
      if (userMetadata[0].user_status === 'nieprzydzielony') {
        return res.json({
          student: false,
          zone_id: locationData[0]["zone_id"]
        })
      } else {
        return res.json({
          student: true,
          zone_id: locationData[0]["zone_id"]
        })
      }
    }).catch(err => res.json("Error updating data"))
  }).catch(err => res.json("Error getting user data"))
}

module.exports = {
  handleTrain: handleTrain
};