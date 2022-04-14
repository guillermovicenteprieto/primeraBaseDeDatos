const fs = require('fs').promises
const moment = require('moment');
moment.locale('es');
const createTableMsg = require('../db/sqlite/createTableMsg');
const selectMsg = require('../db/sqlite/selectMsg');
const insertMsg = require('../db/sqlite/insertMsg');

class MessageClass {
    // constructor(route) {
    //     this.route = './views/chat.txt' 
    //     this.message = [];
    // }

    async saveMessage(data) {
        try {
            const newMessage = {
                email: data.email,
                text: data.text,
                date: moment().format('LLLL')
            }
            // const loadedMessage = await this.loadMessage()
            // loadedMessage.push(newMessage)
            // await fs.writeFile(this.route, JSON.stringify(loadedMessage, null, 2))
            await insertMsg(newMessage)
            return newMessage
        } catch (e) {
            throw new Error(e.message)
        }
    }
    
    async loadMessage() {
        try {
            const messageHistory = await selectMsg()
            // if (messageHistory.toString() != '') {
            //     this.message = JSON.parse(messageHistory)
            // }
            return messageHistory
        } catch (e) {
            // if (e.code == "ENOENT") {
            //     fs.writeFile(this.route, '')
            //     return []
            // }
            throw new Error(e.message)
        }
    }
}

module.exports = MessageClass
