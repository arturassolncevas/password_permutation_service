
exports.up = function(knex) {
    return knex.schema
        .createTable('password_mutations', function(table) {
            table.increments().primary();
            table.string('password_hash', 60).notNullable();
            table.integer('user_id').references('id').inTable('users').notNullable();
            table.timestamps(false, true);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('password_mutations');
};
