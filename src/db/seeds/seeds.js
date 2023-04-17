/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries and reset their autoincrement to 1
  await knex.raw('TRUNCATE TABLE pets RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE people RESTART IDENTITY CASCADE')
  await knex('people').insert([
    {first_name: 'Reuben', last_name: 'Ogbonna'},
    {first_name: 'Maya', last_name: 'Bhattacharjee'},
  ]);
  await knex('pets').insert([
    {name: 'Khalo', species: 'dog', owner_id: 2},
    {name: 'Juan Pablo', species: 'dog', owner_id: 1},
    {name: 'Frida', species: 'dog', owner_id: 2},
  ]);
};
