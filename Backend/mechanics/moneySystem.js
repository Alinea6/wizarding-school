const convertToGSK = (money) => {
    const galleons = Math.floor(money / 493)
    const remainder = money % 493
    const sickles = Math.floor( remainder /29 )
    const knuts = remainder % 29
    return {g: galleons, s: sickles, k: knuts}
}

const convertToKnuts = (money) => {
    const knuts = money.g*493+money.s*29+money.k
    return knuts
} 

module.exports = {
    convertToGSK: convertToGSK,
    convertToKnuts: convertToKnuts
}