const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const sendHomeTrunk = (req, res) => {
  const introduction = `Nie pozostaje Ci nic innego, jak tylko spakować swoje 
    rzeczy na wyjazd do Hogwartu. Wiesz, że następnym razem wrócisz tu dopiero 
    w następne wakacje, więc lepiej by było, żebyś niczego nie zapomniał/a. 
    Wprawdzie rodzice mogą Ci dosłać brakujące rzeczy poprzez sowę, ale zanim 
    by do Ciebie dotarły, minęłoby trochę czasu. W końcu kiedy masz wszystko, 
    co Ci potrzebne dookoła siebie przystępujesz do pakowania i układasz je:`;
  const choice1 = `w takiej kolejności, żeby rzeczy, które Ci będą najbardziej 
    potrzebne znalazły się na samej górze.`;
  const choice2 = `w takiej kolejności, żeby najbardziej lubiane przez Ciebie 
    rzeczy znalazły się na samej górze.`;
  const choice3 = `w takiej kolejności, żeby zabrały jak najmniej miejsca w kufrze.`;
  const choice4 = `w zależności od tego, co w danym momencie znajduje się najbliżej Ciebie.`;
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
  sendHomeTrunk: sendHomeTrunk,
};
