const sendHomeGarden = (req, res) => {
    const introduction = `Wychodzisz na ogródek za domem w celu pożegnania 
    się z rodzinnym kotem. Wiesz, że nie możesz go zabrać ze sobą, bo Twoi 
    rodzice są z nim równie związani co Ty. Smutek, który czujesz z tego 
    powodu, zmotywował Cię do spędzenia z nim jeszcze chwili przed wyjazdem. 
    Czas beztroskiej zabawy zakłóca jednak szczekający w pobliżu pies, 
    przez którego Twój kot zrywa się i wystraszony ucieka na teren ogródka 
    sąsiada. Postanawiasz:`
    const choice1 = `zawołać kota, licząc, że jak się uspokoi sam do Ciebie wróci.`
    const choice2 = `przejść przez płot na ogródek sąsiada w celu odzyskania kota.`
    const choice3 = `iść do domu sąsiada i poprosić go o odzyskanie kota.`
    const choice4 = `zawołaj głośno, licząc, że sąsiad usłyszy i poproś go o podanie Ci kota.`
    const taskDoneText=`Zadanie w tej lokalizacji już zostało przez Ciebie wykonane. 
    Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, zajrzyj 
    na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
} 

const handleHomeGarden = (req, res, usersSorting, usersHomeTasks) => {
    const {login, choice} = req.body
    userSort = usersSorting.find(u => u.login === login);
    userHomeTasks = usersHomeTasks.find(u => u.login === login);
    if (!userHomeTasks.garden) {
        if (choice === 'choice1') {
            userSort.Slyth = userSort.Slyth +10
        }  else if (choice === 'choice2') {
            userSort.Gryff = userSort.Gryff +10
        }  else if (choice === 'choice3') {
            userSort.Huff = userSort.Huff +10
        }  else if (choice === 'choice4') {
            userSort.Rav = userSort.Rav +10
        }
        userHomeTasks.garden = true
    }
    res.json({"homeTasks": userHomeTasks})
}

module.exports = {
    sendHomeGarden: sendHomeGarden,
    handleHomeGarden: handleHomeGarden
}