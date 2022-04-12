const {options} = require('../../options/sqliteDB.js');
const knex = require('knex')(options);

async function insertMsg(msg) {
    try {
        await knex('messages').insert(msg);
        console.log('Message inserted');
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = insertMsg;