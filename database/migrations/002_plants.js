exports.up = function(knex) {
    return knex.schema.createTable('plants', plants => {
      plants.increments();
  
      plants
        .string('nickname', 128)
        .notNullable()
        .unique();
      plants
      .string('species', 128)
      .notNullable();
      plants
      .integer('water')
      .notNullable();
      plants
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('plants');
  };