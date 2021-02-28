const getId = require("../utilities/getId");
const queries = require("../utilities/queries");

const handleNewUser = (req, res) => {
    const text = `Budzisz się i stopniowo dociera do Ciebie, co się dzieje. Zerkasz na kalendarz wiszący w Twoim pokoju i uświadamiasz sobie, że dziś jest pierwszy września. Nadszedł dzień, kiedy wyruszysz do Szkoły Magii i Czarodziejstwa w Hogwarcie. Moment, na który wyczekiwałeś/aś niecierpliwie przez kilka tygodni, od kiedy do Twojego okna zastukała sowa z listem o przyjęciu. Natychmiast wyskakujesz z łóżka i zabierasz się za przygotowania do wyjazdu. Na szczęście wczoraj przygotowałeś/aś sobie listę rzeczy do zrobienia i zostawiłeś/aś ją na szafce nocnej w swoim pokoju.`
    const token = req.cookies.token;
    const id = getId.getId(token);
    const updatePromise = queries.updateUserData("user_metadata", id, "new_user", false, "user_id")
    updatePromise.then((data) => res.json({
        text: text
    }))
}

module.exports = {
    handleNewUser: handleNewUser
}