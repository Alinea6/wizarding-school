const handleRegister = (req, res, users) => {
    const { login, email, password} = req.body;
    users.push({
        login: login,
        email: email,
        password: password,
        role: 'user',
        hp: 10
    })
    res.json('Użytkownik został pomyślnie zarejestrowany');
}

module.exports = {
    handleRegister: handleRegister
}