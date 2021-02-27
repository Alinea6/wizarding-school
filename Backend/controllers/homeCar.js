const handleCar = (req, res, getId, queries) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const userDataPromise = queries.getUserData("house_tasks", id);
  userDataPromise
    .then((data) => {
      for (let room in data[0]) {
        if (!data[0][room]) {
          res.json({
            homeDone: false,
            text: `Niestety nie możesz jeszcze jechać do Londynu, 
            ponieważ nie skończyłeś przygotowywać się do wyjazdu. 
            Jeśli chcesz sprawdzić, co Ci zostało do zrobienia, 
            w Twoim pokoju znajdziesz listę zadań.`,
          });
        }
      }
      res.json({
        homeDone: true,
        text:
          "Wygląda na to, że jesteś już gotowy do wyjazdu. Możesz jednak spędzić jeszcze chwilę na pożegnaniach, jeśli tego chcesz. Gdy uznasz, że nadszedł już moment na wyjazd, wsiądź do samochodu.",
      });
    })
    .catch((err) => res.json("Error getting user"));
};

module.exports = {
  handleCar: handleCar,
};
