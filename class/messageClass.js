const fs = require('fs').promises
const moment = require('moment');
moment.locale('es');
const createTableMsg = require('../db/sqlite/createTableMsg');
const selectMsg = require('../db/sqlite/selectMsg');
const insertMsg = require('../db/sqlite/insertMsg');

class MessageClass {
    async saveMessage(data) {
        try {
            const newMessage = {
                email: data.email,
                text: data.text,
                date: moment().format('LLLL')
            }
            await insertMsg(newMessage)
            return newMessage
        } catch (e) {
            throw new Error(e.message)
        }
    }
    
    async loadMessage() {
        try {
            const messageHistory = await selectMsg()
            return messageHistory
        } catch (e) {
            throw new Error(e.message)
        }
    }
}

module.exports = MessageClass
