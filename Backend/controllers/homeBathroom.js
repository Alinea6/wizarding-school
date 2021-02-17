const sendHomeBathroom =(req, res) => {
    const introduction =`Podchodzisz do umywalki w celu umycia zębów. 
    Twój wzrok pada na wiszące nad nią lustro, w którym widzisz swoje 
    odbicie. Patrząc na własną twarz, uświadamiasz sobie, że odczuwasz 
    lekki stres w związku z wyjazdem do szkoły, ale również ekscytację. 
    Zaczynasz się zastanawiać, czego najbardziej nie możesz się doczekać 
    po przyjeździe do Hogwartu. Po chwili dochodzisz do wniosku, że 
    najbardziej zależy Ci na:`
    const choice1 = `przygodach, które tam przeżyjesz.`
    const choice2 = `zostaniu najlepszym uczniem.`
    const choice3 = `zdobywaniu wiedzy.`
    const choice4 = `zawarciu nowych przyjaźni.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeBathroom=(req, res, accessTokenSecret, jwt, getId, database, queries)=>{
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    const userData = queries.getUserData(database, 'house_tasks', id)
    userData.then(data => {
        if (data[0].bathroom === false){
            if (choice === 'choice1'){
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'gryff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'bathroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }). catch(err => res.json("error updating data"))
                }).catch(err=> res.json("error incrementing data"))
            } else if (choice === 'choice2') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'slyth', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'bathroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error updating user data")
            } else if (choice === 'choice3') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'rav', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'bathroom', true, '*')
                    updatePromise.then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    }).catch(err => "error updating user data")
                }).catch(err => "error incrementing data")
            } else if (choice === 'choice4') {
                const incrementPromise = queries.incrementUserData(database, 'sorting', id, 
                'huff', 10, 'user_id')
                incrementPromise.then(sorting_id => {
                    const updatePromise = queries.updateUserData(database, 'house_tasks',
                    sorting_id[0], 'bathroom', true, '*')
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
    sendHomeBathroom: sendHomeBathroom,
    handleHomeBathroom: handleHomeBathroom
}