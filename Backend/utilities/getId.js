const getId = (token, jwt, accessTokenSecret) => {
    var payload    
	try {
        payload = jwt.verify(token, accessTokenSecret)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
            return res.json('Unauthorized')
        }
        return res.json('Bad request')
    }
    const id = payload.user_id
    return id
}
module.exports = {
    getId: getId
}