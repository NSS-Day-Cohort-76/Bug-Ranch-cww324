const { database } = require("./database.js")
//const { cattleToDrive } = require("./main.js")
 
const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10 //cattle to drive not defined. changed this from numberNeeded = cattleToDrive / 10 to this.

    for (let counter = 0; counter < numberNeeded; counter++) { 
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
       
    }

    return drovers;
}

module.exports = { hireDrovers }