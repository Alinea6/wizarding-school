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

module.exports = {
    sendHomePackTrunk: sendHomePackTrunk
}