//const createTableProducts = require('../db/mariaDB/createTableProducts');
const selectProducts = require('../db/mariaDB/selectProducts');
const insertProducts = require('../db/mariaDB/insertProducts');

//const generateProduct = require("../src/utils/product.util.js");

class ProductClass {

  async allProducts() {
    try {
      const productsList = await selectProducts();
      return productsList;
    } catch (error) {
      throw new Error("Se produjo un error en allProducts: " + error.message)
    }
  }


  async saveProduct(product) {
    try {
      const addNewProduct = {
        name: product.name,
        price: product.price,
        url: product.url,
      };
      await insertProducts(addNewProduct);
      return addNewProduct;
    } catch (error) {
      throw new Error(
        "Se produjo un error al guardar el producto : " + error.message
      );
    }
  }

  updateProduct(idProduct, body) {
    try {
      const updateProduct = {
        title: body.title,
        price: body.price,
        url: 'https://via.placeholder.com/200',
        id: idProduct
      };
      const findIndex = this.product.findIndex((product) => product.id === idProduct);
      this.product[findIndex] = updateProduct;
      return updateProduct;
    } catch (error) {
      throw new Error(
        "Se produjo un error al actualizar el producto : " + error.message
      );
    }
  }

  deleteProduct(idProduct) {
    try {
      this.product = this.product.filter((product) => product.id != idProduct);
    } catch (error) {
      throw new Error("Hubo un error al eliminar " + error.message);
    }
  }
}

module.exports = ProductClass;
