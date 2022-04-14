const { options } = require('../../options/mariaDB.js');
const knex = require("knex")(options);


async function createTableProducts() {
    try {
        await knex.schema.createTable("products", table => {
            id = table.increments("id");
            title = table.string("title");
            price = table.integer("price");
            url = table.string("url");
        });
        console.log("Table products created");
    } catch (err) {
        // console.log(err);
        console.log('error en createTableProducts');
    }
}

module.exports = createTableProducts;