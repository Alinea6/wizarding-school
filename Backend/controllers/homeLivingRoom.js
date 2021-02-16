const sendHomeLivingRoom = (req, res) => {
    const introduction = `Zgodnie z wczorajszą prośbą rodziców 
    wchodzisz do salonu, żeby przypomnieć im o godzinie odjazdu pociągu. 
    Zastajesz ich nad katalogiem z najnowszymi miotłami, o których 
    żywo dyskutują, nie mogąc się zdecydować, którą kupić. Tymczasem 
    Tobie się trochę śpieszy, bo przecież masz jeszcze sporo do 
    zrobienia przed wyjazdem, a pociąg na Ciebie nie poczeka. 
    Zastanawiasz się, co zrobić w tej sytuacji, a po chwili 
    decydujesz się na:`
    const choice1 = `odczekanie aż skończą wybierać miotłę i wtedy 
    poinformowanie ich o godzinie odjazdu.`
    const choice2 = `wtrącenie się w rozmowę, szybkie poinformowanie 
    ich o godzinie odjazdu i pozwolenie im na powrót do wybierania 
    mioteł.`
    const choice3 = `przyłączenie się do rozmowy i pomoc rodzicom w 
    wyborze miotły, a później poinformowanie ich o godzinie odjazdu.`
    const choice4 = `wtrącenie się w rozmowę, zaproponowanie, że 
    o miotłach porozmawiacie w samochodzie w czasie drogi na dworzec 
    i poinformowanie ich o godzinie odjazdu.`
    const taskDoneText = `Zadanie w tej lokalizacji już zostało przez Ciebie 
    wykonane. Jeśli chcesz sprawdzić, jakie zadania pozostały do zrobienia, 
    zajrzyj na listę, która znajduje się w Twoim pokoju.`
    res.json({"introduction": introduction, "choice1": choice1, 
    "choice2": choice2, "choice3": choice3, "choice4": choice4,
    "taskDoneText": taskDoneText})
}

const handleHomeLivingRoom = (req, res, accessTokenSecret, jwt, getId, database) => {
    const choice = req.body.choice
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    database.select('*').from('house_tasks')
    .where('user_id', '=', id)
    .then(data => {
        if (data[0].livingroom === false){
            if (choice === 'choice1') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('huff', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('livingroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))
            } else if (choice === 'choice2') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('gryff', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('livingroom', true)
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
                    .update('livingroom', true)
                    .returning('*')
                    .then(tasks => {
                        res.json({"homeTasks": tasks[0]})
                    })
                    .catch(err => 'error updating tasks')
                }).catch(err => res.json('error incrementing sorting points'))
            } else if (choice === 'choice4') {
                return database('sorting')
                .where('user_id', '=', id)
                .increment('slyth', 10)
                .returning('user_id')
                .then(sorting_id => {
                    return database('house_tasks').where('user_id', '=', sorting_id[0])
                    .update('livingroom', true)
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
    )
}

module.exports = {
    sendHomeLivingRoom: sendHomeLivingRoom,
    handleHomeLivingRoom: handleHomeLivingRoom
}