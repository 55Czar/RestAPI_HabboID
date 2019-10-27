const dbConfig = require('../config/database');
let knex = require('knex')(dbConfig);

module.exports = knex;