
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pSkills', function(tbl) {
      // primary key called id, integer, auto-increment
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true);
    });
  };

  // how can I undo the changes
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pSkills');

  }
