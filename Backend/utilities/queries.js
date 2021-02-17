async function getUserData (database, table, id) {
    try{
        const resp = await database.select('*').from(table)
        .where('user_id', '=', id)
        return resp
    }
    catch {
        return res.json("error getting user data")
    } 
}

async function incrementUserData (database, table, id, dataToIncrement, 
    incrementValue, returningData) {
        try {
            const resp = await database(table)
            .where('user_id', '=', id)
            .increment(dataToIncrement, incrementValue)
            .returning(returningData)
            return resp
        }
        catch {
            return res.json("error incrementing data")
        }
    }

async function updateUserData(database, table, id, dataToUpdate,
    updatedValue, returningData) {
        try {
            const resp = await database(table)
            .where('user_id', '=', id)
            .update(dataToUpdate, updatedValue)
            .returning(returningData)
            return resp
        }
        catch{
            return res.json("error updating value")
        }
    }

module.exports = {
    getUserData: getUserData,
    incrementUserData: incrementUserData,
    updateUserData: updateUserData
}