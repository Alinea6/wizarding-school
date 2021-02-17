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

const handleHomeGarden = (req, res, accessTokenSecret, jwt, getId, database, queries) => {
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    const userData = queries.getUserData(database, 'house_tasks', id)
    userData.then(data => {
        if (data[0].garden === false){
            if (choice === 'choice1'){
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'slyth', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'garden', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }). catch(err => res.json("error updating data"))
                }).catch(err=> res.json("error incrementing data"))
            } else if (choice === 'choice2') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'gryff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'garden', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error updating user data")
            } else if (choice === 'choice3') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'huff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'garden', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error incrementing data")
            } else if (choice === 'choice4') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'rav', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'garden', true, '*')
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
    sendHomeGarden: sendHomeGarden,
    handleHomeGarden: handleHomeGarden
}