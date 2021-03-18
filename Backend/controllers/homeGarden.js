const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const sendHomeGarden = (req, res) => {
  const introduction = `Wychodzisz na ogródek za domem w celu pożegnania 
    się z rodzinnym kotem. Wiesz, że nie możesz go zabrać ze sobą, bo Twoi 
    rodzice są z nim równie związani co Ty. Smutek, który czujesz z tego 
    powodu, zmotywował Cię do spędzenia z nim jeszcze chwili przed wyjazdem. 
    Czas beztroskiej zabawy zakłóca jednak szczekający w pobliżu pies, 
    przez którego Twój kot zrywa się i wystraszony ucieka na teren ogródka 
    sąsiada. Postanawiasz:`;
  const choice1 = `zawołać kota, licząc, że jak się uspokoi sam do Ciebie wróci.`;
  const choice2 = `przejść przez płot na ogródek sąsiada w celu odzyskania kota.`;
  const choice3 = `iść do domu sąsiada i poprosić go o odzyskanie kota.`;
  const choice4 = `zawołaj głośno, licząc, że sąsiad usłyszy i poproś go o podanie Ci kota.`;
  const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie wykonane. 
    Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, zajrzyj 
    na listę, która znajduje się w Twoim pokoju.`;
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userZone = queries.getUserData("user_location_data", id);
  userZone.then((zoneData) => {
    const userData = queries.getUserData("house_tasks", id);
    userData.then((data) =>
      res.json({
        introduction: introduction,
        choice1: choice1,
        choice2: choice2,
        choice3: choice3,
        choice4: choice4,
        taskDoneText: taskDoneText,
        homeTasks: data[0],
        zone_id: zoneData[0]["zone_id"],
      })
    );
  });
};

module.exports = {
  sendHomeGarden: sendHomeGarden,
};
