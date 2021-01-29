const handleRegister = (req, res, bcrypt, users) => {
    const { login, email, password} = req.body;
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) return next(err);
            users.push({
                login: login,
                email: email,
                hash: hash,
                role: 'user',
                hp: 10
            })
            res.json('Użytkownik został pomyślnie zarejestrowany');
        })
    })
    
}

module.exports = {
    handleRegister: handleRegister
}