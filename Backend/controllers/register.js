const handleRegister = (req, res, bcrypt, database) => {
  const { login, email, password } = req.body;
  if (login && email && password) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return next(err);
        database.transaction((trx) => {
          trx("login_data")
            .insert({
              username: login,
              password: hash,
            })
            .returning("user_id")
            .then((user_id) => {
              return trx("user_metadata")
                .insert({
                  user_id: user_id[0],
                  email: email,
                  joined: new Date(),
                })
                .returning("user_id");
            })
            .then((user_id) => {
              return trx("stats")
                .insert({
                  user_id: user_id[0],
                })
                .returning("user_id");
            })
            .then((user_id) => {
              return trx("house_tasks")
                .insert({
                  user_id: user_id[0],
                })
                .returning("user_id");
            })
            .then((user_id) => {
              return trx("sorting").insert({
                user_id: user_id[0],
              });
            })
            .then(trx.commit)
            .then(() => {
              res.json("User registered");
            })
            .catch((err) => {
              res.json("Unable to register");
            });
        });
      });
    });
  } else {
    res.json("Failed to register user");
  }
};

module.exports = {
  handleRegister: handleRegister,
};
