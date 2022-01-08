exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("food_donated")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("food_donated").insert([
        { farm_id: 1, date: "2022-01-01", food_donated: "14.7" },
        { farm_id: 1, date: "2022-01-02", food_donated: "11" },
        { farm_id: 1, date: "2022-01-03", food_donated: "12.4" },
        { farm_id: 1, date: "2022-01-04", food_donated: "19.2" },
        { farm_id: 1, date: "2022-01-05", food_donated: "21" },
        { farm_id: 1, date: "2022-01-06", food_donated: "15.3" },
        { farm_id: 1, date: "2022-01-07", food_donated: "18" },
      ]);
    });
};
