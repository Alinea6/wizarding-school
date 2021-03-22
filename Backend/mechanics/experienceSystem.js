const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../resources/Levels.csv')

const experienceToLevel = (experience) => {
    const levelsArray=[]
    const lines = fs.readFileSync(filePath).toString().split('\n');
    for (const line of lines.slice(1)) {
        const newLevel = line.split(',')
        levelsArray.push(newLevel)
    }
    for (item of levelsArray){
        if (experience < item[1]){
            const level = item[0]-1
            return level
        }
    }
}

const experienceForNextLevel = (experience) => {
    const levelsArray=[]
    const lines = fs.readFileSync(filePath).toString().split('\n');
    for (const line of lines.slice(1)) {
        const newLevel = line.split(',')
        levelsArray.push(newLevel)
    }
    for (item of levelsArray){
        if (experience < item[1]){
            const experienceForNext = item[1]
            return experienceForNext
        }
    }
}

const generateRandomExperience = (level) => {
    const min = Math.ceil(1)
    const max = Math.floor(4)
    return (Math.floor(Math.random()*(max-min)+min))*level
}

module.exports = {
    experienceToLevel: experienceToLevel,
    experienceForNextLevel: experienceForNextLevel,
    generateRandomExperience: generateRandomExperience
  };