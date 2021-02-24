const handleStats = (req, res, getId, database, queries) => {
    const token = req.cookies.token
    const id = getId.getId(token)
    database('login_data').join('stats', 'login_data.user_id', 'stats.user_id')
    .select('*').where('login_data.user_id', '=', id).then(data => {
        res.json({"login": data[0].username, "health_points": data[0].health_points,
        "max_health_points": data[0].max_health_points, "action_points": data[0].action_points,
        "max_action_points": data[0].max_action_points, "experience_points": data[0].experience_points,
        "pocket": data[0].pocket, "vault": data[0].vault})
    }).catch(err => res.json("error getting user stats"))
}

module.exports = {
    handleStats: handleStats
}