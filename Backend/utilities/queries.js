async function getUserData (database, table, id) {
        const resp = await database.select('*').from(table)
        .where('user_id', '=', id)
        return resp
}

async function incrementUserData (database, table, id, dataToIncrement, 
    incrementValue, returningData) {
            const resp = await database(table)
            .where('user_id', '=', id)
            .increment(dataToIncrement, incrementValue)
            .returning(returningData)
            return resp
    }

async function updateUserData(database, table, id, dataToUpdate,
    updatedValue, returningData) {
            const resp = await database(table)
            .where('user_id', '=', id)
            .update(dataToUpdate, updatedValue)
            .returning(returningData)
            return resp
    }

module.exports = {
    getUserData: getUserData,
    incrementUserData: incrementUserData,
    updateUserData: updateUserData
}