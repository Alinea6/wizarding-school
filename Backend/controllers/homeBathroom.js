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

const handleHomeBathroom=(req, res, accessTokenSecret, jwt, getId, database)=>{
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    database.select('*').from('house_tasks')
    .where('user_id', '=', id)
    .then(data => {
        if (data[0].bathroom === false){
            if (choice === 'choice1') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('gryff', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('bathroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))
            } else if (choice === 'choice2') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('slyth', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('bathroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))
            } else if (choice === 'choice3') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('rav', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('bathroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))
            } else if (choice === 'choice4') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('huff', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('bathroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))}
        
    } else {
        res.json({"homeTasks": data[0]})
    }
        }
    )}

    //     console.log('incremented in sorting')
    //     database('house_tasks').where('user_id', '=', id)
    //     .update('bathroom', true)
    //     .returning ('bathroom')
    //     }
    //     console.log('updated tasks', bathroom)  
    // })
    // .catch(err => res.json("error getting user's tasks"))
    // database.select('*').from('house_tasks')
    // .where('user_id', '=', id)
    // .then(data=> {
    //     res.json({"homeTasks": data[0]})
    // })
    // .catch(err=> res.json('error getting data to send to user'))

module.exports = {
    sendHomeBathroom: sendHomeBathroom,
    handleHomeBathroom: handleHomeBathroom
}