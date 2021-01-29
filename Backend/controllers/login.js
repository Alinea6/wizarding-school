const handleLogin = (req, res, bcrypt, accessTokenSecret, jwt, users) => {
    // Read username and password from request body
    const { login, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.login === login });

    if (user) {
        bcrypt.compare(password, user.hash).then(isMatch =>{
            if (isMatch) {
                const token = jwt.sign({ login: user.login,  role: user.role }, accessTokenSecret, { expiresIn: '99999m' });
        
                res.cookie('token', token, { httpOnly: true })

                res.json({
                    token
                });
            }
            else {
                res.json({"error": "Username or password incorrect"})}
        
        
        
        // Generate an access token
        
    }
    ).catch(err => res.json({err: "Error logging in"}))
}
}


module.exports = {
    handleLogin: handleLogin
}