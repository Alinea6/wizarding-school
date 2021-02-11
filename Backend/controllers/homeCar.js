const handleCar = (req, res, usersHomeTasks, usersSorting, accessTokenSecret, jwt, getLogin) => {
    const token = req.cookies.token
    const login = getLogin.getLogin(token, jwt, accessTokenSecret)
    const userSorting=usersSorting.find(u => {return u.login === login})
    res.json({"Gryff": userSorting.Gryff, "Rav": userSorting.Rav, 
    "Huff": userSorting.Huff, "Slyth": userSorting.Slyth})
}

module.exports = {
        handleCar: handleCar
    }