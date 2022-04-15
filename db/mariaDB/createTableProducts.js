const { options } = require('../../options/mariaDB.js');
const knex = require("knex")(options);


(async () => {
    try {
        await knex.schema.createTableProducts("products", table => {
            table.increments("id");
            table.string("name");
            table.integer("price");
            table.string("url");
            
        });
        console.log("Table products created");
    } catch (err) {
        console.log('error en createTableProducts' + err);
    }
    finally {
        knex.destroy();
    }
})()