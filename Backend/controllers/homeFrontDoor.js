const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const sendHomeFrontDoor = (req, res) => {
  const introduction = `Zakładasz kurtkę i wychodzisz z domu, 
    po czym swoje kroki kierujesz w stronę pobliskiej piekarni. Zanim 
    jednak udało Ci się tam dotrzeć, natykasz się na płaczącą dziewczynkę 
    i starszego od niej chłopca, który bezlitośnie się z niej wyśmiewał. 
    Widząc Cię, daje jej spokój i zaczyna się od niej oddalać. Wiesz, że 
    nie wolno używać Ci magii przy mugolach, więc tym razem musisz sobie 
    poradzić bez niej. Widząc tę sytuację, decydujesz się na:`;
  const choice1 = `wyjaśnienie dziewczynce, jak następnym razem może 
    zareagować na podobną sytuację.`;
  const choice2 = `zwrócenie chłopcu uwagi, że tak nie należy postępować.`;
  const choice3 = `podłożenie chłopcu nogi, kiedy Cię mija.`;
  const choice4 = `pocieszenie dziewczynki.`;
  const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`;
  const token = req.cookies.token;
  const id = getId.getId(token);
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
    })
  );
};

module.exports = {
  sendHomeFrontDoor: sendHomeFrontDoor,
};
