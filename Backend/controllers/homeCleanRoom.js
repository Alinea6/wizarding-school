const sendHomeCleanRoom = (req, res) => {
    const introduction = `Twoi rodzice poprosili Cię, żebyś posprzątał/a pokój 
    przed swoim wyjazdem, ale niestety nie zostało Ci za dużo czasu na to. 
    Zerkasz z niepokojem na zegarek i rozglądasz się po pokoju. Nie jest on 
    w idealnym stanie po tym, ile bałaganu narobiłeś/aś przy pakowaniu. 
    Zastanawiasz się, od czego zacząć i w końcu postanawiasz:`
    const choice1 = `poukładać książki i przetrzeć półki regału.`
    const choice2 = `pościelić łóżko.`
    const choice3 = `poukładać rzeczy na półce nocnej.`
    const choice4 = `pozamiatać podłogi.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeCleanRoom = (req, res, accessTokenSecret, jwt, getId, database, queries) => {
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    const userData = queries.getUserData(database, 'house_tasks', id)
    userData.then(data => {
        if (data[0].cleanroom === false){
            if (choice === 'choice1'){
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'rav', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'cleanroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }). catch(err => res.json("error updating data"))
                }).catch(err=> res.json("error incrementing data"))
            } else if (choice === 'choice2') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'slyth', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'cleanroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error updating user data")
            } else if (choice === 'choice3') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'huff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'cleanroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error incrementing data")
            } else if (choice === 'choice4') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'gryff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'cleanroom', true, '*')
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
    sendHomeCleanRoom: sendHomeCleanRoom,
    handleHomeCleanRoom: handleHomeCleanRoom
}