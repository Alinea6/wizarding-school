const sendHomeFrontDoor = (req, res) => {
    const  introduction = `Zakładasz kurtkę i wychodzisz z domu, 
    po czym swoje kroki kierujesz w stronę pobliskiej piekarni. Zanim 
    jednak udało Ci się tam dotrzeć, natykasz się na płaczącą dziewczynkę 
    i starszego od niej chłopca, który bezlitośnie się z niej wyśmiewał. 
    Widząc Cię, daje jej spokój i zaczyna się od niej oddalać. Wiesz, że 
    nie wolno używać Ci magii przy mugolach, więc tym razem musisz sobie 
    poradzić bez niej. Widząc tę sytuację, decydujesz się na:`
    const choice1 = `wyjaśnienie dziewczynce, jak następnym razem może 
    zareagować na podobną sytuację.`
    const choice2 = `zwrócenie chłopcu uwagi, że tak nie należy postępować.`
    const choice3 = `podłożenie chłopakowi nogi, kiedy Cię mija.`
    const choice4 = `pocieszenie dziewczynki.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeFrontDoor = (req, res, usersSorting, usersHomeTasks) => {
    const {login, choice} = req.body
    userSort = usersSorting.find(u => u.login === login);
    userHomeTasks = usersHomeTasks.find(u => u.login === login);
    if (!userHomeTasks.frontdoor) {
        if (choice === 'choice1') {
            userSort.Rav = userSort.Rav +10
        } else if (choice === 'choice2') {
            userSort.Gryff = userSort.Gryff +10
        } else if (choice === 'choice3') {
            userSort.Slyth = userSort.Slyth +10
        } else if (choice === 'choice4') {
            userSort.Huff = userSort.Huff +10
        }
        userHomeTasks.frontdoor = true
    }
    res.json({"homeTasks": userHomeTasks})
}

module.exports = {
    sendHomeFrontDoor: sendHomeFrontDoor,
    handleHomeFrontDoor: handleHomeFrontDoor
}