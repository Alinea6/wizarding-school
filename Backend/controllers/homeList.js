const handleList = (req, res, usersHomeTasks, accessTokenSecret, jwt) => {
    const token = req.cookies.token
    var payload
	try {
        payload = jwt.verify(token, accessTokenSecret)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
            return res.json('Unauthorized')
        }
        return res.json('Bad request')
    }
    const login = payload.login
    const userHomeTasks=usersHomeTasks.find(u => {return u.login === login})
    const tasks={}
        if (userHomeTasks.bathroom) {
            tasks.bathroom = `Poranna toaleta - wykonane`
        } else if (!userHomeTasks.bathroom) {
            tasks.bathroom = `Poranna toaleta (łazienka)`
        }
        if (userHomeTasks.livingroom) {
            tasks.livingroom = `Przypomnij rodzicom o godzinie odjazdu pociągu - wykonane`
        } else if (!userHomeTasks.livingroom) {
            tasks.livingroom = `Przypomnij rodzicom o godzinie odjazdu pociągu (salon)`
        }
        if (userHomeTasks.garden) {
            tasks.garden = `Pożegnaj się z kotem - wykonane`
        } else if (!userHomeTasks.garden) {
            tasks.garden = `Pożegnaj się z kotem (ogród)`
        }
        if (userHomeTasks.frontdoor) {
            tasks.frontdoor = `Idź do sklepu po pieczywo - wykonane`
        } else if (!userHomeTasks.frontdoor) {
            tasks.frontdoor = `Idź do sklepu po pieczywo (drzwi frontowe)`
        }
        if (userHomeTasks.trunk) {
            tasks.trunk = `Spakuj kufer - wykonane`
        } else if (!userHomeTasks.trunk) {
            tasks.trunk = `Spakuj kufer (Twój pokój)`
        }
        if (userHomeTasks.cleanroom) {
            tasks.cleanroom = `Posprzątaj pokój - wykonane`
        } else if (!userHomeTasks.cleanroom) {
            tasks.cleanroom = `Posprzątaj pokój (Twój pokój)`
        }
        if (userHomeTasks.packtrunk) {
            tasks.packtrunk = `Zapakuj kufer do samochodu - wykonane`
        } else if (!userHomeTasks.packtrunk) {
            tasks.packtrunk = `Zapakuj kufer do samochodu (garaż)`
        }
    res.json({"list": tasks})
}

module.exports = {
    handleList: handleList
}