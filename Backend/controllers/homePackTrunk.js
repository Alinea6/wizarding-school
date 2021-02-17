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

const handleHomePackTrunk = (req, res, accessTokenSecret, jwt, getId, database, queries) => {
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    const userData = queries.getUserData(database, 'house_tasks', id)
    userData.then(data => {
        if (data[0].packtrunk === false){
            if (choice === 'choice1'){
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'gryff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'packtrunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }). catch(err => res.json("error updating data"))
                }).catch(err=> res.json("error incrementing data"))
            } else if (choice === 'choice2') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'rav', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'packtrunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error updating user data")
            } else if (choice === 'choice3') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'huff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'packtrunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error incrementing data")
            } else if (choice === 'choice4') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'slyth', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'packtrunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(error => "error updating user data")
                }).catch("error incrementing user data")
            }
        } else {
            res.json({"homeTasks": data[0]})
        }
    }). catch(err => res.json("error getting user data"))
}

module.exports = {
    sendHomePackTrunk: sendHomePackTrunk,
    handleHomePackTrunk: handleHomePackTrunk
}