const sendHomeLivingRoom = (req, res) => {
    const introduction = `Zgodnie z wczorajszą prośbą rodziców 
    wchodzisz do salonu, żeby przypomnieć im o godzinie odjazdu pociągu. 
    Zastajesz ich nad katalogiem z najnowszymi miotłami, o których 
    żywo dyskutują, nie mogąc się zdecydować, którą kupić. Tymczasem 
    Tobie się trochę śpieszy, bo przecież masz jeszcze sporo do 
    zrobienia przed wyjazdem, a pociąg na Ciebie nie poczeka. 
    Zastanawiasz się, co zrobić w tej sytuacji, a po chwili 
    decydujesz się na:`
    const choice1 = `odczekanie aż skończą wybierać miotłę i wtedy 
    poinformowanie ich o godzinie odjazdu.`
    const choice2 = `wtrącenie się w rozmowę, szybkie poinformowanie 
    ich o godzinie odjazdu i pozwolenie im na powrót do wybierania 
    mioteł.`
    const choice3 = `przyłączenie się do rozmowy i pomoc rodzicom w 
    wyborze miotły, a później poinformowanie ich o godzinie odjazdu.`
    const choice4 = `wtrącenie się w rozmowę, zaproponowanie, że 
    o miotłach porozmawiacie w samochodzie w czasie drogi na dworzec 
    i poinformowanie ich o godzinie odjazdu.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeLivingRoom = (req, res, usersSorting, usersHomeTasks) => {
    const {login, choice} = req.body
    userSort = usersSorting.find(u => u.login === login);
    userHomeTasks = usersHomeTasks.find(u => u.login === login);
    if (!userHomeTasks.livingroom) {
        if (choice === 'choice1') {
            userSort.Huff = userSort.Huff +10
        } else if (choice === 'choice2') {
            userSort.Gryff = userSort.Gryff +10
        } else if (choice === 'choice3') {
            userSort.Rav = userSort.Rav +10
        } else if (choice === 'choice4') {
            userSort.Slyth = userSort.Slyth +10
        }
        userHomeTasks.livingroom = true
    }
    res.json({"homeTasks": userHomeTasks})
}

module.exports = {
    sendHomeLivingRoom: sendHomeLivingRoom,
    handleHomeLivingRoom: handleHomeLivingRoom
}