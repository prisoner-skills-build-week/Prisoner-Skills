
exports.up = function(knex) {
    return knex.schema.createTable('inmates', inmates => {
      inmates.increments();

      inmates
        .string('facility name', 128).notNullable()
        .unique();

    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('inmates');
  };
