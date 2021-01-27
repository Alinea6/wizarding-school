const handleLogin = (req, res, accessTokenSecret, jwt, users) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.login === login && u.password === password });

    if (user) {
        // Generate an access token
        const token = jwt.sign({ login: user.login,  role: user.role }, accessTokenSecret, { expiresIn: '99999m' });
        
        res.cookie('token', token, { httpOnly: true })

        res.json({
            token
        });
    } else {
        res.json({"error": "Username or password incorrect"});
    }
}

module.exports = {
    handleLogin: handleLogin
}