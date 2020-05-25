const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findPlants,
    findPlantById,
    newPlant,
    update,
    remove
};

function findPlants() {
    return db('plants');
}

function findPlantById(id) {
    return db('plants')
        .where({ id: id })
        .first();
}

function newPlant(plant) {
    return db('plants')
        .insert(plant)
        .then(ids => ({ id: ids[0] }));
}

function update(id, plant) {
    return db('plants')
        .where({ id: id })
        .update(plant);
}

function remove(id) {
    return db('plants')
        .where({ id: id })
        .del();
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}
