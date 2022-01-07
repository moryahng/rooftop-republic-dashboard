
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('planter').del()
    .then(function () {
      // Inserts seed entries
      return knex('planter').insert([
        {farm_id: 1, 
         zone: 'A', 
         crop: 'Chrysanthemum',
         type: 'Flower',
         yield: 8,
         status: 'Ready to harvest',
         sowing_month: 2021-11-1,
         harvest_estimate: 2022-1-1,
         harvest_actual: 2022-1-7,
         contribution_type: 'Donation',
         contribution_details: 'Donated to Food Angel'
        },
        
      ]);
    });
};
