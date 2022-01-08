exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("planter")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("planter").insert([
        {
          farm_id: 1,
          zone: 'E',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 8,
          status: 'Ready to harvest',
          sowing_month: '2021-11-1',
          harvest_estimate: '2022-1-1',
          harvest_actual: '2022-1-7',
          contribution_type: 'Donation',
          contribution_details: 'Donated to Food Angel',
        },
        {
          farm_id: 1,
          zone: "A",
          crop: "Chilli",
          type: "Fruit",
          yield: 13,
          status: "Active growing",
          sowing_month: "2021-11-1",
          harvest_estimate: "2022-2-1",
        },
        {
          farm_id: 1,
          zone: "C",
          crop: "Rosemary",
          type: "Herb",
          yield: 6,
          status: "Ready to harvest",
          sowing_month: "2021-10-1",
          harvest_estimate: "2022-1-1",
        },
        {
          farm_id: 1,
          zone: "B",
          crop: "Carrot",
          type: "Root / Stem",
          yield: 8,
          status: "Ready to harvest",
          sowing_month: "2021-10-1",
          harvest_estimate: "2022-1-1",
        },
        {
          farm_id: 1,
          zone: "C",
          crop: "Spinach",
          type: "Leafy Green",
          yield: 16,
          status: "Ready to harvest",
          sowing_month: "2021-12-1",
          harvest_estimate: "2022-1-1",
        },
        {
          farm_id: 1,
          zone: "A",
          crop: "Cherry Tomato",
          type: "Fruit",
          yield: 14,
          status: "Active growing",
          sowing_month: "2021-12-1",
          harvest_estimate: "2022-3-1",
        },
        {
          farm_id: 1,
          zone: "B",
          crop: "Potato",
          type: "Root / Stem",
          yield: 18,
          status: "Active growing",
          sowing_month: "2021-11-1",
          harvest_estimate: "2022-3-1",
        },
        {
          farm_id: 1,
          zone: "D",
          crop: "Fig",
          type: "Fruit",
          yield: 18,
          status: "Active growing",
          sowing_month: "2019-8-1",
          harvest_estimate: "2022-6-1",
        },
        {
          farm_id: 1,
          zone: 'A',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2022-1-7',
          harvest_actual: '2022-1-7',
          contribution_type: 'Donation'},{
          farm_id: 1,
          zone: 'C',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2022-1-4',
          harvest_actual: '2022-1-4',
          contribution_type: 'Donation'},{
          farm_id: 1,
          zone: 'E',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 14,
          status: 'Harvest Finished',
          harvest_estimate: '2021-12-24',
          harvest_actual: '2021-12-24',
          contribution_type: 'Event'},        {
          farm_id: 1,
          zone: 'B',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 14,
          status: 'Harvest Finished',
          harvest_estimate: '2021-12-22',
          harvest_actual: '2021-12-22',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2021-12-17',
          harvest_actual: '2021-12-17',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 12,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-30',
          harvest_actual: '2021-11-30',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-26',
          harvest_actual: '2021-11-26',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-14',
          harvest_actual: '2021-11-14',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 6,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-9',
          harvest_actual: '2021-11-9',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-5',
          harvest_actual: '2021-11-5',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2021-11-3',
          harvest_actual: '2021-11-3',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-30',
          harvest_actual: '2021-10-30',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-23',
          harvest_actual: '2021-10-23',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-23',
          harvest_actual: '2021-10-23',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-19',
          harvest_actual: '2021-10-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-18',
          harvest_actual: '2021-10-18',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-14',
          harvest_actual: '2021-10-14',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-12',
          harvest_actual: '2021-10-12',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2021-10-9',
          harvest_actual: '2021-10-9',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-23',
          harvest_actual: '2021-9-23',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-23',
          harvest_actual: '2021-9-23',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 6,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-21',
          harvest_actual: '2021-9-21',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-5',
          harvest_actual: '2021-9-5',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-4',
          harvest_actual: '2021-9-4',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Chili',
          type: 'Fruit',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2021-9-3',
          harvest_actual: '2021-9-3',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2021-8-30',
          harvest_actual: '2021-8-30',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-7-25',
          harvest_actual: '2021-7-25',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 12,
          status: 'Harvest Finished',
          harvest_estimate: '2021-7-15',
          harvest_actual: '2021-7-15',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Chili',
          type: 'Fruit',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-7-7',
          harvest_actual: '2021-7-7',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2021-6-22',
          harvest_actual: '2021-6-22',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 5,
          status: 'Harvest Finished',
          harvest_estimate: '2021-6-19',
          harvest_actual: '2021-6-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 14,
          status: 'Harvest Finished',
          harvest_estimate: '2021-6-4',
          harvest_actual: '2021-6-4',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-5-19',
          harvest_actual: '2021-5-19',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-5-18',
          harvest_actual: '2021-5-18',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2021-5-1',
          harvest_actual: '2021-5-1',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2021-4-21',
          harvest_actual: '2021-4-21',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2021-4-19',
          harvest_actual: '2021-4-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2021-4-5',
          harvest_actual: '2021-4-5',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2021-3-4',
          harvest_actual: '2021-3-4',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-28',
          harvest_actual: '2021-2-28',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-19',
          harvest_actual: '2021-2-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-14',
          harvest_actual: '2021-2-14',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Chili',
          type: 'Fruit',
          yield: 19,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-7',
          harvest_actual: '2021-2-7',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-4',
          harvest_actual: '2021-2-4',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Chili',
          type: 'Fruit',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2021-2-2',
          harvest_actual: '2021-2-2',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2021-1-20',
          harvest_actual: '2021-1-20',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2021-1-19',
          harvest_actual: '2021-1-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-27',
          harvest_actual: '2020-12-27',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 6,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-26',
          harvest_actual: '2020-12-26',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-25',
          harvest_actual: '2020-12-25',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 17,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-23',
          harvest_actual: '2020-12-23',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-16',
          harvest_actual: '2020-12-16',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-16',
          harvest_actual: '2020-12-16',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2020-12-12',
          harvest_actual: '2020-12-12',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-27',
          harvest_actual: '2020-11-27',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Chili',
          type: 'Fruit',
          yield: 19,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-25',
          harvest_actual: '2020-11-25',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 8,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-20',
          harvest_actual: '2020-11-20',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-13',
          harvest_actual: '2020-11-13',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-10',
          harvest_actual: '2020-11-10',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2020-11-8',
          harvest_actual: '2020-11-8',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-22',
          harvest_actual: '2020-10-22',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-21',
          harvest_actual: '2020-10-21',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 13,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-21',
          harvest_actual: '2020-10-21',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 6,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-16',
          harvest_actual: '2020-10-16',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-13',
          harvest_actual: '2020-10-13',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-8',
          harvest_actual: '2020-10-8',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-8',
          harvest_actual: '2020-10-8',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 12,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-4',
          harvest_actual: '2020-10-4',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2020-10-1',
          harvest_actual: '2020-10-1',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2020-9-22',
          harvest_actual: '2020-9-22',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2020-9-18',
          harvest_actual: '2020-9-18',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 14,
          status: 'Harvest Finished',
          harvest_estimate: '2020-9-11',
          harvest_actual: '2020-9-11',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 17,
          status: 'Harvest Finished',
          harvest_estimate: '2020-9-7',
          harvest_actual: '2020-9-7',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-29',
          harvest_actual: '2020-8-29',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 5,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-24',
          harvest_actual: '2020-8-24',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chili',
          type: 'Fruit',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-22',
          harvest_actual: '2020-8-22',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 12,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-22',
          harvest_actual: '2020-8-22',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-19',
          harvest_actual: '2020-8-19',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 6,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-18',
          harvest_actual: '2020-8-18',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2020-8-14',
          harvest_actual: '2020-8-14',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2020-7-3',
          harvest_actual: '2020-7-3',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 12,
          status: 'Harvest Finished',
          harvest_estimate: '2020-6-26',
          harvest_actual: '2020-6-26',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2020-6-1',
          harvest_actual: '2020-6-1',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2020-6-1',
          harvest_actual: '2020-6-1',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 10,
          status: 'Harvest Finished',
          harvest_estimate: '2020-5-31',
          harvest_actual: '2020-5-31',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Potato',
          type: 'Root / Stem',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2020-5-17',
          harvest_actual: '2020-5-17',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2020-5-11',
          harvest_actual: '2020-5-11',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2020-5-4',
          harvest_actual: '2020-5-4',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Chili',
          type: 'Fruit',
          yield: 9,
          status: 'Harvest Finished',
          harvest_estimate: '2020-4-29',
          harvest_actual: '2020-4-29',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2020-4-5',
          harvest_actual: '2020-4-5',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2020-3-23',
          harvest_actual: '2020-3-23',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Chili',
          type: 'Fruit',
          yield: 20,
          status: 'Harvest Finished',
          harvest_estimate: '2020-2-26',
          harvest_actual: '2020-2-26',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2020-2-23',
          harvest_actual: '2020-2-23',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Rosemary',
          type: 'Herb',
          yield: 4,
          status: 'Harvest Finished',
          harvest_estimate: '2020-2-22',
          harvest_actual: '2020-2-22',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 11,
          status: 'Harvest Finished',
          harvest_estimate: '2020-2-13',
          harvest_actual: '2020-2-13',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'D',
          crop: 'Chrysanthemum',
          type: 'Flower',
          yield: 16,
          status: 'Harvest Finished',
          harvest_estimate: '2020-2-5',
          harvest_actual: '2020-2-5',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'A',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 15,
          status: 'Harvest Finished',
          harvest_estimate: '2020-1-29',
          harvest_actual: '2020-1-29',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'C',
          crop: 'Spinach',
          type: 'Leafy Green',
          yield: 18,
          status: 'Harvest Finished',
          harvest_estimate: '2020-1-11',
          harvest_actual: '2020-1-11',
          contribution_type: 'Donation',
        },        {
          farm_id: 1,
          zone: 'E',
          crop: 'Carrot',
          type: 'Root / Stem',
          yield: 7,
          status: 'Harvest Finished',
          harvest_estimate: '2020-1-10',
          harvest_actual: '2020-1-10',
          contribution_type: 'Event',
        },        {
          farm_id: 1,
          zone: 'B',
          crop: 'Cherry Tomato',
          type: 'Fruit',
          yield: 14,
          status: 'Harvest Finished',
          harvest_estimate: '2020-1-2',
          harvest_actual: '2020-1-2',
          contribution_type: 'Event',
        },
      ]);
    });
};