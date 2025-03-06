const { randomize } = require("./utils.js")

const createRivers = () => {  // creatures random number of rivers between 1 and 3
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {  // let rivernumber=0 so we go through the whole array. while riverNumber is less than the amount of rivers created witht he createRivers() function inside the areas area. then add a 1 to riverNumbers so it only runs this code once through each river created. then we add the rivers to the journey array
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountain; mountainNumber++) {
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}

module.exports = {
    createRivers, createForests,
    createMountains, createPlains, journeyMaker
}