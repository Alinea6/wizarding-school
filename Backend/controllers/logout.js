const handleLogout = (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  });
  res.json("Użytkownik został wylogowany");
};

module.exports = {
  handleLogout: handleLogout,
};
