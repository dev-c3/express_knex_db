/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//exports.up applies the migration
exports.up = function(knex) {
    //this is the function to create a schema, make sure to 
  return knex.schema.createTable('users', (table)=>{

    table.increments('id');
    table.string('username').notNullable().unique();
    table.string('wallet').notNullable().unique();
    table.timestamps(true, true);
    console.log("users table has been created")

  })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//exports down undoes the migration.
exports.down = function(knex) {
    return knex.schema.dropTable('users')
  
};
