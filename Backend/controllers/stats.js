const getId = require("../utilities/getId");
const queries = require("../utilities/queries");
const experienceSystem = require("../mechanics/experienceSystem");
const moneySystem = require("../mechanics/moneySystem");

const handleStats = (req, res) => {
  const token = req.cookies.token;
  const id = getId.getId(token);
  const statusPromise = queries.getOne('user_metadata', id, 'user_status')
  statusPromise.then((status) => {
    if (status[0].user_status !== "nieprzydzielony"){
      housePromise = queries.getOne('character_bio', id, 'house')
      housePromise.then((house) => {
        const joinPromise = queries.joinAndGetData(
          "login_data",
          "stats",
          "login_data.user_id",
          "stats.user_id",
          id,
          "*"
        );
        joinPromise
          .then((data) => {
            const level = experienceSystem.experienceToLevel(data[0].experience_points)
            const nextLevel = experienceSystem.experienceForNextLevel(data[0].experience_points)
            const pocket = moneySystem.convertToGSK(data[0].pocket)
            const vault = moneySystem.convertToGSK(data[0].vault) 
            res.json({
              login: data[0].username,
              health_points: data[0].health_points,
              max_health_points: data[0].max_health_points,
              action_points: data[0].action_points,
              max_action_points: data[0].max_action_points,
              experience_points: data[0].experience_points,
              pocket: pocket,
              vault: vault,
              house: house[0].house,
              level: level,
              nextLevel: nextLevel
            });
          })
          .catch((err) => {
            res.json("error getting user stats")});
      })
    } else {
      const joinPromise = queries.joinAndGetData(
        "login_data",
        "stats",
        "login_data.user_id",
        "stats.user_id",
        id,
        "*"
      );
      joinPromise
        .then((data) => {
          const level = experienceSystem.experienceToLevel(data[0].experience_points)
            const nextLevel = experienceSystem.experienceForNextLevel(data[0].experience_points)
            const pocket = moneySystem.convertToGSK(data[0].pocket)
            const vault = moneySystem.convertToGSK(data[0].vault) 
          res.json({
            login: data[0].username,
            health_points: data[0].health_points,
            max_health_points: data[0].max_health_points,
            action_points: data[0].action_points,
            max_action_points: data[0].max_action_points,
            experience_points: data[0].experience_points,
            pocket: pocket,
            vault: vault,
            house: status[0].user_status,
            level: level,
            nextLevel: nextLevel
          });
        })
        .catch((err) => res.json("error getting user stats"));
    }
  })
  
};

module.exports = {
  handleStats: handleStats,
};
