const handleRegister = (req, res, bcrypt, users) => {
    const { login, email, password } = req.body;
    if (login && email && password) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) return next(err);
                user = {
                    login: login,
                    email: email,
                    hash: hash,
                    role: 'user',
                    hp: 10
                }
                users.push(user)
                res.json(user);
            })
        })
    } else {
        res.json("Failed to register user")
    }       
}

module.exports = {
    handleRegister: handleRegister
}