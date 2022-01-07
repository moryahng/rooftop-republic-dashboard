exports.up = function (knex) {
  return knex.schema.createTable("social_media", (table) => {
    table.increments();
    table.integer("farm_id").references("id").inTable("farm").notNull();
    table.datetime("date");
    table.integer("visit");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("social_media");
};
