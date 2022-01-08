exports.up = function (knex) {
  return knex.schema.createTable("food_donated", (table) => {
    table.increments();
    table.integer("farm_id").references("id").inTable("farm").notNull();
    table.datetime("date");
    table.string("food_donated");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("food_donated");
};
