const { options } = require('../../options/sqliteDB.js');
const knex = require("knex")(options);


async function createTableMsg () {
    try {
        await knex.schema.createTable('messages', table => {

            email = table.varchar('email', 255).notNullable()
            text = table.varchar('text', 255).notNullable(),
            date = table.varchar('date', 255).notNullable()
        });
        console.log('Table created');

    } catch (err) {
        // console.log(err);
        // console.log('Table already exists');
    } finally {
        knex.destroy();
    }
}

module.exports = createTableMsg;