exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users')
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('users').insert([
          {
            username: "pmiddleton",
            phoneNumber: 1234567890,
            password: "password",
          },
        ]);
      });
  };