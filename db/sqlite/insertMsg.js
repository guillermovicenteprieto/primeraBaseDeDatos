const {options} = require('../../options/sqliteDB.js');
const knex = require('knex')(options);

async function insertMsg(message) {
    try {
        await knex('messages').insert(message);
        
        console.log('Message inserted');
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = insertMsg;