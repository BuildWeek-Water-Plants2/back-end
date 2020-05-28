exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('plants')
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('plants').insert([
          {
            user_id: 1,
            nickname: "Simba",
            species: "Dandelion",
            water: 2,
          },
          {
            user_id: 1,
            nickname: "Ketchup",
            species: "Tomato",
            water: 3,
          },
          {
            user_id: 1,
            nickname: "Irish Gold",
            species: "Potato",
            water: 3,
          },
          {
            user_id: 1,
            nickname: "Steve",
            species: "Tulip",
            water: 3,
          }
        ]);
      });
  };