const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const sendHomeLivingRoom = (req, res) => {
  const introduction = `Zgodnie z wczorajszą prośbą rodziców 
    wchodzisz do salonu, żeby przypomnieć im o godzinie odjazdu pociągu. 
    Zastajesz ich nad katalogiem z najnowszymi miotłami, o których 
    żywo dyskutują, nie mogąc się zdecydować, którą kupić. Tymczasem 
    Tobie się trochę śpieszy, bo przecież masz jeszcze sporo do 
    zrobienia przed wyjazdem, a pociąg na Ciebie nie poczeka. 
    Zastanawiasz się, co zrobić w tej sytuacji, a po chwili 
    decydujesz się na:`;
  const choice1 = `odczekanie aż skończą wybierać miotłę i wtedy 
    poinformowanie ich o godzinie odjazdu.`;
  const choice2 = `wtrącenie się w rozmowę, szybkie poinformowanie 
    ich o godzinie odjazdu i pozwolenie im na powrót do wybierania 
    mioteł.`;
  const choice3 = `przyłączenie się do rozmowy i pomoc rodzicom w 
    wyborze miotły, a później poinformowanie ich o godzinie odjazdu.`;
  const choice4 = `wtrącenie się w rozmowę, zaproponowanie, że 
    o miotłach porozmawiacie w samochodzie w czasie drogi na dworzec 
    i poinformowanie ich o godzinie odjazdu.`;
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
  sendHomeLivingRoom: sendHomeLivingRoom,
};
