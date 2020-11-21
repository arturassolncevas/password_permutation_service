
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments().primary()
            table.string('username', 255).unique().notNullable()
            table.timestamps(false, true)
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
