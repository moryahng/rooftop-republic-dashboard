exports.up = function (knex) {
  return knex.schema.createTable("farm", (table) => {
    table.increments();
    table.string("company_name");
    table.string("farm_name").unique();
    table.string("address");
    table.integer("size");
    table.datetime("open_date");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("farm");
};
