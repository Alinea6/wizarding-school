const queries = require("../utilities/queries");

const handleLogin = (req, res, bcrypt, accessTokenSecret, jwt, database) => {
  const { login, password } = req.body;
  const checkLoginPromise = queries.checkLogin(login);
  checkLoginPromise
    .then((data) => {
      bcrypt
        .compare(password, data[0].password)
        .then((isMatch) => {
          if (isMatch) {
            const getIdAndLoginPromise = queries.getIdAndLogin(login);
            getIdAndLoginPromise
              .then((data) => {
                const token = jwt.sign(
                  { user_id: data[0].user_id },
                  accessTokenSecret,
                  { expiresIn: "1d" }
                );
                res.cookie("token", token, { httpOnly: true });
                res.json({ token: token });
              })
              .catch((err) => res.json("Error getting user"));
          } else {
            res.json("Incorrect login or password");
          }
        })
        .catch((err) => res.json("Error logging in"));
    })
    .catch((err) => res.json("Uncorrect login or password"));
};
module.exports = {
  handleLogin: handleLogin,
};
