const fs = require('fs');

const experienceToLevel = (experience) => {
    const levelsArray=[]
    const lines = fs.readFileSync('./resources/Levels.csv').toString().split('\n');
    for (const line of lines.slice(1)) {
        const newLevel = line.split(',')
        levelsArray.push(newLevel)
    }
    if (experience < levelsArray[0][1]){
        const level = 0
        return level
    }
    for (item of levelsArray){
        if (experience < item[1]){
            const level = item[0]-1
            return level
        }
    }
}


module.exports = {
    experienceToLevel: experienceToLevel,
  };