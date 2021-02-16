const handleLogin = (req, res, bcrypt, accessTokenSecret, jwt, 
    users, usersHomeTasks, database) => {
    const {login, password} = req.body
    database.select('username', 'password').from('login_data')
    .where('username', '=', login)
    .then(data => {
        bcrypt.compare(password, data[0].password).then(isMatch =>{
            if (isMatch) {
                return database.select('user_id', 'username').from('login_data')
                .where('username', '=', login)
                .then(data => {
                const token = jwt.sign({ user_id: data[0].user_id}, accessTokenSecret, { expiresIn: '1d' });
                res.cookie('token', token, { httpOnly: true })
                // Tu uzupełnić też przesłanie danych z zadaniami i statsami z db albo
                // przerzucić to do nagłówka, żeby od razu przy każdym odświeżeniu tak robiło
                // przy czym bardziej ta druga opcja
                res.json({"token": token})
                })
                .catch(err => res.json("Error getting user"))                
            } else {
                res.json("Incorrect login or password")
            }}). catch(err => res.json("Error logging in"))
    }).catch(err=> res.json('Uncorrect login or password'))
}
module.exports = {
    handleLogin: handleLogin
}