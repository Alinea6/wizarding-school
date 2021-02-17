const sendHomeTrunk = (req, res) => {
    const introduction = `Nie pozostaje Ci nic innego, jak tylko spakować swoje 
    rzeczy na wyjazd do Hogwartu. Wiesz, że następnym razem wrócisz tu dopiero 
    w następne wakacje, więc lepiej by było, żebyś niczego nie zapomniał/a. 
    Wprawdzie rodzice mogą Ci dosłać brakujące rzeczy poprzez sowę, ale zanim 
    by do Ciebie dotarły, minęłoby trochę czasu. W końcu kiedy masz wszystko, 
    co Ci potrzebne dookoła siebie przystępujesz do pakowania i układasz je:`
    const choice1=`w takiej kolejności, żeby rzeczy, które Ci będą najbardziej 
    potrzebne znalazły się na samej górze.`
    const choice2=`w takiej kolejności, żeby najbardziej lubiane przez Ciebie 
    rzeczy znalazły się na samej górze.`
    const choice3=`w takiej kolejności, żeby zabrały jak najmniej miejsca w kufrze.`
    const choice4=`w zależności od tego, co w danym momencie znajduje się najbliżej Ciebie.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeTrunk = (req, res, accessTokenSecret, jwt, getId, database, queries) => {
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    const userData = queries.getUserData(database, 'house_tasks', id)
    userData.then(data => {
        if (data[0].trunk === false){
            if (choice === 'choice1'){
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'slyth', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'trunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }). catch(err => res.json("error updating data"))
                }).catch(err=> res.json("error incrementing data"))
            } else if (choice === 'choice2') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'huff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'trunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error updating user data")
            } else if (choice === 'choice3') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'rav', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'trunk', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error incrementing data")
            } else if (choice === 'choice4') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'gryff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'trunk', true, '*')
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
    sendHomeTrunk: sendHomeTrunk,
    handleHomeTrunk: handleHomeTrunk
}