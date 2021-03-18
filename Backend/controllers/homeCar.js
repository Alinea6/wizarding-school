const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleCar = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userZone = queries.getUserData("user_location_data", id);
  userZone.then((zoneData) => {
    const userDataPromise = queries.getUserData("house_tasks", id);
    userDataPromise
      .then((data) => {
        for (let room in data[0]) {
          if (!data[0][room]) {
            return res.json({
              homeDone: false,
              text: `Niestety nie możesz jeszcze jechać do Londynu, 
              ponieważ nie skończyłeś przygotowywać się do wyjazdu. 
              Jeśli chcesz sprawdzić, co Ci zostało do zrobienia, 
              w Twoim pokoju znajdziesz listę zadań.`,
              zone_id: zoneData[0]["zone_id"],
            });
          }
        }
        res.json({
          homeDone: true,
          text:
            "Wygląda na to, że jesteś już gotowy do wyjazdu. Możesz jednak spędzić jeszcze chwilę na pożegnaniach, jeśli tego chcesz. Gdy uznasz, że nadszedł już moment na wyjazd, wsiądź do samochodu.",
          zone_id: zoneData[0]["zone_id"],
        });
      })
      .catch((err) => res.json("Error getting user"));
  });
};

const handleRide = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userDataPromise = queries.getUserData("house_tasks", id);
  userDataPromise
    .then((data) => {
      for (let room in data[0]) {
        if (!data[0][room]) {
          res.json({
            homeDone: false,
            text: `Niestety nie możesz jeszcze jechać do Londynu, 
            ponieważ nie skończyłeś przygotowywać się do wyjazdu. 
            Jeśli chcesz sprawdzić, co Ci zostało do zrobienia, 
            w Twoim pokoju znajdziesz listę zadań.`,
          });
        }
      }
      const updatePromise = queries.updateUserData(
        "user_location_data",
        id,
        "zone_id",
        2,
        "*"
      );
      updatePromise
        .then((data) => {
          res.json({ zoneId: data[0]["zone_id"] });
        })
        .catch((err) => res.json("Error updating data"));
    })
    .catch((err) => res.json("Error getting user data"));
};

module.exports = {
  handleCar: handleCar,
  handleRide: handleRide,
};
