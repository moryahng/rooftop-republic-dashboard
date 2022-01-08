exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("farm")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("farm").insert([
        {
          id: 1,
          company_name: "Metroplaza",
          farm_name: "Metroplaza Rooftop Farm",
          address:
            "Level 5 Sky Garden, Metroplaza, 223 Hing Fong Road, Kwai Chung",
          size: 13000,
          open_date: "2018-5-19",
        },
        {
          id: 2,
          company_name: "New Town Plaza",
          farm_name: "New Town Plaza Rooftop Farm",
          address: "18-19 Sha Tin Centre St, Sha Tin",
          size: 8000,
          open_date: "2020-7-25",
        },
      ]);
    });
};
