exports.seed = function(knex) {
  // We must return a Promise from within our seed function
  // Without this initial `return` statement, the seed execution
  // will end before the asynchronous tasks have completed
  return knex('favorites').del() // delete all favorites first
    .then(() => knex('users').del()) // delete all users

    // Now that we have a clean slate, we can re-insert our paper data
    .then(() => {
      return Promise.all([

        // Insert a single paper, return the paper ID, insert 2 favorites
        knex('users').insert({
          api_key: '123'
        }, 'id')
        .then(users => {
          return knex('favorites').insert([
            { location: 'denver,co', user_id: users[0] },
            { location: 'chicago,il', user_id: users[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
