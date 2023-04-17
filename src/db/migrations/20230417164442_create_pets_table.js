/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pets', (table) => {
        table.increments("id").primary();
        table.string('name')
        table.string('species')
        table.integer('owner_id')
        table.foreign('owner_id').references('id').inTable('people');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pets');
};
