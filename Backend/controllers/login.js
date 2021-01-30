const handleLogin = (req, res, bcrypt, accessTokenSecret, jwt, users) => {
    const {login, password} = req.body
    const user = users.find(u => {return u.login === login});
    if (user) {
        bcrypt.compare(password, user.hash).then(isMatch =>{
            if (isMatch) {
                const token = jwt.sign({ login: user.login,  role: user.role }, accessTokenSecret, { expiresIn: '99999m' });
                res.cookie('token', token, { httpOnly: true })
                res.json({token})
            } else {
                res.json("Incorrect login or password")
            }}). catch(err => "Error logging in")
    } else {
        res.json("Invalid login or password")
    }
}
module.exports = {
    handleLogin: handleLogin
}