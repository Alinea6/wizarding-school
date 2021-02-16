async function getUserData (database, table, id) {
    const resp = await database.select('*').from(table)
    .where('user_id', '=', id)
    const userData = await resp.json()
    return userData[0]
}
module.exports = {
    getUserData: getUserData
}