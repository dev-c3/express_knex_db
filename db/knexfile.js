// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config()
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
     database: 'postgres',
     user: 'postgres',
     password: null
    },
    migrations:{
      tableName: 'knex_migrations'
    }
  },



};
