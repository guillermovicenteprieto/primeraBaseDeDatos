const { options } = require('../../options/mariaDB.js');
const knex = require('knex')(options);

//const generateRandomProduct = require("../../class/fakerContainer.js");
//const listProd = generateRandomProduct();
//const fakerProd = JSON.parse(JSON.stringify(listProd));



async function insertProducts(product, listProd) {
    try {
        // await knex('products').insert(fakerProd);
        // console.log('Products faker inserted');
        await knex('products').insert(product)
        console.log('Product inserted');
    } catch (err) {
        console.log(err);
    }
}

module.exports = insertProducts;