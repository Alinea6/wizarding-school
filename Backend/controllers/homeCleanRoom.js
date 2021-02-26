const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const sendHomeCleanRoom = (req, res) => {
  const introduction = `Twoi rodzice poprosili Cię, żebyś posprzątał/a pokój 
    przed swoim wyjazdem, ale niestety nie zostało Ci za dużo czasu na to. 
    Zerkasz z niepokojem na zegarek i rozglądasz się po pokoju. Nie jest on 
    w idealnym stanie po tym, ile bałaganu narobiłeś/aś przy pakowaniu. 
    Zastanawiasz się, od czego zacząć i w końcu postanawiasz:`;
  const choice1 = `poukładać książki i przetrzeć półki regału.`;
  const choice2 = `pościelić łóżko.`;
  const choice3 = `poukładać rzeczy na półce nocnej.`;
  const choice4 = `pozamiatać podłogi.`;
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
  sendHomeCleanRoom: sendHomeCleanRoom,
};
