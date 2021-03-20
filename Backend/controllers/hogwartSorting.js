const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleBeforeSorting = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const introduction = `Jeszcze nie zdążyłeś/aś się przyzwyczaić do myśli, że znajdujesz się w murach Hogwartu, a już przed Tobą otwierają się drzwi do Wielkiej Sali i wraz z innymi nowymi uczniami wchodzisz do środka. Rozglądasz się dookoła i zastanawiasz się, do którego z czterech domów za chwilę trafisz. Na szczęście nie będziesz musiał/a długo czekać na rozwiązanie tej kwestii, bo przed Tobą pojawia się stołek, na którym leży Tiara Przydziału i wkrótce Twoje nazwisko zostaje wyczytane.`;
  const userZone = queries.getUserData("user_location_data", id);
  userZone.then((zoneData) => {
    return res.json({
      introduction: introduction,
      zone_id: zoneData[0]["zone_id"],
    });
  });
};

const handleSorting = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const sortingDataPromise = queries.getUserData("sorting", id);
  sortingDataPromise.then((sortingData) => {
    const max = Math.max(
      sortingData[0]["gryff"],
      sortingData[0]["rav"],
      sortingData[0]["huff"],
      sortingData[0]["slyth"]
    );
    houses = ["gryff", "rav", "huff", "slyth"];
    const maxHouses = houses.filter(function (item) {
      return sortingData[0][item] === max;
    });
    options = [];
    for (const index in maxHouses) {
      if (maxHouses[index] === "gryff") {
        options.push("Gryffindor");
      }
      if (maxHouses[index] === "rav") {
        options.push("Ravenclaw");
      }
      if (maxHouses[index] === "huff") {
        options.push("Hufflepuff");
      }
      if (maxHouses[index] === "slyth") {
        options.push("Slytherin");
      }
    }
    if (options.length === 1) {
      const result = options[0];
      const resultText = `Po dłuższym zastanowieniu ciężka tiara spoczywająca na Twojej głowie w końcu podjęła decyzję i wykrzyknęła ją tak, żeby wszyscy w pomieszczeniu usłyszeli: “${result}!!!!”. W Wielkiej Sali rozległy się głośne oklaski i wiwaty. Twój wzrok padł na stół Twojego domu i wszystkich siedzących przy nim uczniów. `;
      const insertPromise = queries.insertData("character_bio", {
        user_id: id,
        house: result,
      });
      insertPromise.then((insertData) => {
        const updateDataPromise = queries.updateUserData(
          "user_metadata",
          id,
          "user_status",
          "student",
          "*"
        );
        updateDataPromise.then((updatedData) => {
          return res.json({
            result: result,
            resultText: resultText,
          });
        });
      });
    } else {
      const hatstallText = `Dłuższy czas siedziałeś/aś na stołku i czekałeś/aś na werdykt. Tiara jednak wciąż się zastanawiała. Wygląda na to, że cechy Twojej osobowości pasują do więcej niż jednego domu. Może Twoje preferencje w takim razie wpłyną na jej decyzje? W którym z poniższych pasujących do Ciebie domów chciałbyś/abyś się znaleźć? `;
      return res.json({
        hatstall: true,
        hatstallText: hatstallText,
        options: options,
      });
    }
  });
};

const handleHatstall = (req, res) => {
  const result = req.body.option;
  const token = req.cookies.token;
  const id = getId.getId(token);
  const resultText = `Po dłuższym zastanowieniu ciężka tiara spoczywająca na Twojej głowie w końcu podjęła decyzję i wykrzyknęła ją tak, żeby wszyscy w pomieszczeniu usłyszeli: “${result}!!!!”. W Wielkiej Sali rozległy się głośne oklaski i wiwaty. Twój wzrok padł na stół Twojego domu i wszystkich siedzących przy nim uczniów. `;
  const insertPromise = queries.insertData("character_bio", {
    user_id: id,
    house: result,
  });
  insertPromise.then((insertData) => {
    const updateDataPromise = queries.updateUserData(
      "user_metadata",
      id,
      "user_status",
      "student",
      "*"
    );
    updateDataPromise.then((updatedData) => {
      return res.json({
        result: result,
        resultText: resultText,
      });
    });
  })
};

module.exports = {
  handleBeforeSorting: handleBeforeSorting,
  handleSorting: handleSorting,
  handleHatstall: handleHatstall
};
