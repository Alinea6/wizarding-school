const handleCar = (req, res, usersHomeTasks, accessTokenSecret, jwt, getId, database) => {
    const token = req.cookies.token
    const id = getId.getId(token, jwt, accessTokenSecret)
    database.select('*').from('sorting')
    .where('user_id', '=', id)
    .then(data => {
        res.json({"Gryff": data[0].gryff, "Rav": data[0].rav, 
        "Huff": data[0].huff, "Slyth": data[0].slyth})
    })
    .catch(err => res.json("Error getting user"))
}

module.exports = {
        handleCar: handleCar
    }