exports.up = function (knex) {
  return knex.schema.createTable("event", (table) => {
    table.increments();
    table.integer("farm_id").references("id").inTable("farm").notNull();
    table.string("name");
    table.string("type");
    table.datetime("start");
    table.datetime("end");
    table.boolean("publish");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("event");
};
