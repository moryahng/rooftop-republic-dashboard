exports.up = function (knex) {
  return knex.schema.createTable("planter", (table) => {
    table.increments();
    table.integer("farm_id").references("id").inTable("farm").notNull();
    table.string("zone");
    table.string("crop");
    table.string("type");
    table.integer("yield");
    table.string("status");
    table.datetime("sowing_month").nullable();
    table.datetime("harvest_estimate").nullable();
    table.datetime("harvest_actual").nullable();
    table.string("contribution_type").nullable();
    table.string("contribution_details").nullable();
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planter");
};
