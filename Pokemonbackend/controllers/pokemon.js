const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemons = async () => {
    return knex 
    .column('*')
    .select()
    .from('pokemon')
}

const getPokemonById = (id) => {
    return knex('pokemon')
    .where('id', id)
    .select('*')
} 

const createPokemon = (body) => {
    return knex('pokemon')
    .insert(body)
}

const updatePokemon = (id, body) => {
    return knex('pokemon')
    .where(id, 'id')
    .update(body)
}

const deletePokemon = (id) =>{
    return knex('pokemon')
    .where('id' ,id)
    .del()
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon
}