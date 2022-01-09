exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("event")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("event").insert([
        {
          farm_id: 1,
          name: "Special Summer Herb Drink",
          type: "Workshop",
          start: "2021-6-19T14:00:00",
          end: "2021-6-19T17:00:00",
          publish: true,
        },
        {
          farm_id: 1,
          name: "A Day of Farmer",
          type: "Event",
          start: "2021-5-1T10:00:00",
          end: "2021-5-5T13:00:00",
          publish: true,
        },
        {
          farm_id: 1,
          name: "Farmers Market",
          type: "Event",
          start: "2021-4-18T14:00:00",
          end: "2021-4-24T17:00:00",
          publish: true,
        },
        {
          farm_id: 1,
          name: "Summer Garden Market",
          type: "Event",
          start: "2022-1-19T11:00:00",
          end: "2022-1-20T19:00:00",
          publish: false,
        },
        {
          farm_id: 1,
          name: "Make Your Own Kimchi",
          type: "Workshop",
          start: "2022-2-2T13:00:00",
          end: "2022-2-8T15:00:00",
          publish: false,
        },
      ]);
    });
};
