const { options } = require('../../options/mariaDB.js');
const knex = require('knex')(options);

async function deleteProducts(product) {
    try {
        await knex('products').where('id', product.id).del();
        console.log('Product deleted');
    } catch (err) {
        console.log(err);
    }
}

module.exports = deleteProducts;

