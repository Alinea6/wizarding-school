const handleLogin = (req, res, bcrypt, accessTokenSecret, jwt, 
    users, usersHomeTasks) => {
    const {login, password} = req.body
    const user = users.find(u => {return u.login === login});
    if (user) {
        bcrypt.compare(password, user.hash).then(isMatch =>{
            if (isMatch) {
                const token = jwt.sign({ login: user.login,  role: user.role }, accessTokenSecret, { expiresIn: '1d' });
                res.cookie('token', token, { httpOnly: true })
                const userHomeTasks=usersHomeTasks.find(u=> {return u.login === login})
                res.json({"token": token, "user": user, "homeTasks": userHomeTasks})
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