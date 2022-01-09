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
          start: "2021-6-7T14:00:00",
          end: "2021-6-7T17:00:00",
          publish: true,
        },
        {
          farm_id: 1,
          name: "Special Summer Herb Drink",
          type: "Workshop",
          start: "2021-6-7T14:00:00",
          end: "2021-6-7T17:00:00",
          publish: true,
        },
        {
          farm_id: 1,
          name: "Summer Garden Market",
          type: "Event",
          start: "2021-1-19T11:00:00",
          end: "2021-1-20T19:00:00",
          publish: false,
        },
        {
          farm_id: 1,
          name: "Summer Garden Market",
          type: "Event",
          start: "2021-2-2T13:00:00",
          end: "2021-2-8T15:00:00",
          publish: false,
        },
        {
          farm_id: 1,
          name: "Summer Garden Market",
          type: "Event",
          start: "2021-2-9T13:00:00",
          end: "2021-2-9T15:00:00",
          publish: false,
        },
      ]);
    });
};
