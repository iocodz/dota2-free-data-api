const heroes = require('../data/heroes.json')

module.exports = async function getHeroes() {
    return heroes
}