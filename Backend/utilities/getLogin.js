const getLogin = (token, jwt, accessTokenSecret) => {
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
    return login
}
module.exports = {
    getLogin: getLogin
}