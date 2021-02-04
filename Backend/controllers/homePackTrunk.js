const sendHomePackTrunk = (req, res) => {
    const introduction = `Nie pozostało Ci nic innego, jak tylko spakować 
    kufer do bagażnika samochodu i przygotować się do wyjazdu. Zerkasz nerwowo 
    na zegarek, żeby się upewnić, że zdążysz na pociąg. Na szczęście wygląda na 
    to, że masz jeszcze chwilę do momentu, kiedy umówiłeś/aś się z rodzicami na 
    wyjazd do Londynu. Postanawiasz przeznaczyć ten czas, żeby upewnić się, że 
    masz ze sobą najważniejszą dla Ciebie rzecz, czyli:`
    const choice1 = `miotłę.`
    const choice2 = `podręczniki.`
    const choice3 = `prowiant na drogę.`
    const choice4 = `różdżkę.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomePackTrunk = (req, res, usersSorting, usersHomeTasks) => {
    const {login, choice} = req.body
    userSort = usersSorting.find(u => u.login === login);
    userHomeTasks = usersHomeTasks.find(u => u.login === login);
    if (!userHomeTasks.packtrunk) {
        if (choice === 'choice1') {
            userSort.Gryff = userSort.Gryff +10 
        } else if (choice === 'choice2') {
            userSort.Rav = userSort.Rav +10
        } else if (choice === 'choice3') {
            userSort.Huff = userSort.Huff +10
        } else if (choice === 'choice4') {
            userSort.Slyth = userSort.Slyth +10
        }
        userHomeTasks.packtrunk = true
    }
    res.json({"homeTasks": userHomeTasks})
}

module.exports = {
    sendHomePackTrunk: sendHomePackTrunk,
    handleHomePackTrunk: handleHomePackTrunk
}