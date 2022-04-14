const { options } = require('../../options/sqliteDB.js');
const knex = require("knex")(options);

async function createTableMsg () {
    try {
        await knex.schema.createTable('messages', table => {
            id = table.increments();
            email = table.string('email');
            text = table.string('text');
            date = table.string('date');
        });
        console.log('Table created');
    } catch (err) {
        // console.log(err);
        console.log('Table already exists');
    }
}

module.exports = createTableMsg;