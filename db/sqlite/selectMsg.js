const { options} = require('../../options/sqliteDB.js');
const knex = require('knex')(options);
const createTableMsg = require('./createTableMsg');



async function selectMsg() {
    try {
        const messages = await createTableMsg();
        const msg = await knex('messages').select('*');
        //console.log(msg);
        return msg;
    } catch (err) {
        console.log(err);
    }
}

module.exports = selectMsg;