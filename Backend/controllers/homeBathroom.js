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

const handleHomeBathroom=(req, res, usersSorting, usersHomeTasks)=>{
    const {login, choice} = req.body
    const userSort = usersSorting.find(u => {return u.login === login});
    const userHomeTasks=usersHomeTasks.find(u => {return u.login === login})
    if (!userHomeTasks.bathroom) {
        if (choice === 'choice1') {
            userSort.Gryff = userSort.Gryff +10
        } else if (choice === 'choice2') {
            userSort.Slyth = userSort.Slyth +10
        } else if (choice === 'choice3') {
        userSort.Rav = userSort.Rav+10
        } else if (choice === 'choice4') {
            userSort.Huff = userSort.Huff +10
        }
        userHomeTasks.bathroom = true
    }
    res.json({"homeTasks": userHomeTasks})
}

module.exports = {
    sendHomeBathroom: sendHomeBathroom,
    handleHomeBathroom: handleHomeBathroom
}