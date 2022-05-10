const { options } = require('../../options/mariaDB.js');
const knex = require("knex")(options);
// const insertProducts = require("../../db/mariaDB/insertProducts");

const generateRandomProduct = require("../../class/fakerContainer.js");
const listProd = generateRandomProduct(10);
console.log({listProd});


(async () => {
    try {
        await knex.schema.createTable("products", table => {
            table.increments("id");
            table.string("name");
            table.integer("price");
            table.string("url");
        });
        console.log("Table products created");
        // if (listProd) {
        //     await knex('products').insertProducts(listProd);
        //     console.log("Products faker inserted");
        // }
    } catch (err) {
        console.log('error en createTable' + err);
    }
    finally {
        knex.destroy();
    }
})()