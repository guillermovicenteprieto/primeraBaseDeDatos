const { options } = require('../../options/mariaDB.js');
const knex = require('knex')(options);
const createTableProducts = require('./createTableProducts');

async function selectProducts() {
    try {
        const products = await createTableProducts();
        const productsList = await knex('products').select('*');
        return productsList;
    } catch (err) {
        console.log(err);
    }
}

module.exports = selectProducts;



