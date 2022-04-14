const {options} = require('../../options/sqliteDB.js');
const knex = require('knex')(options);
//const createTableMsg = require('./createTableMsg');

async function insertMsg(message) {
    
    try {
        //const message = await createTableMsg();
        await knex('messages').insert(message);
    } catch (err) {
        console.log(err);
    }
}

module.exports = insertMsg;