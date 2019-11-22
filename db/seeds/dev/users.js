exports.seed = function(knex) {
  return knex('favorites').del() // delete all favorites first
    .then(() => knex('users').del()) // delete all users
    .then(() => {
      return Promise.all([
        knex('users').insert([
          { id: 1 , api_key: '123'},
          { id: 2 , api_key: '456'},
          { id: 3 , api_key: '789'}])
        .then(users => {
          return knex('favorites').insert([
            { location: 'denver,co', user_id: 1 },
            { location: 'chicago,il', user_id: 1 },
            { location: 'seattle,wa', user_id: 2 },
            { location: 'bloomington,il', user_id: 2 },
            { location: 'denver,co', user_id: 2 },
            { location: 'paris,france', user_id: 3 }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
