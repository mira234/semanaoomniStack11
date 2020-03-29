const knex = require('knex'); //Calculating...
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;