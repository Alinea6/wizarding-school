const handleCar = (req, res, getId, database, queries) => {
    const token = req.cookies.token
    const id = getId.getId(token)
    const userDataPromise = queries.getUserData(database, 'sorting', id)
    userDataPromise.then(data=>{
        res.json({"Gryff": data[0].gryff, "Rav": data[0].rav, 
        "Huff": data[0].huff, "Slyth": data[0].slyth})
    }).catch(err => res.json("Error getting user"))
}

module.exports = {
        handleCar: handleCar
    }