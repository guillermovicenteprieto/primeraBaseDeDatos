const { faker } = require("@faker-js/faker");

function generateRandomProduct(cant=10) {
    let listProducts = [];
    for (let i = 0; i < cant; i++) {
        const prod = {
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            url: faker.internet.url()
        }
        listProducts.push(prod);
        return listProducts
    }
}

module.exports = generateRandomProduct;



/*
generateRandomMessage(cant) {   
    return {
        message: this.faker.lorem.sentence()
    }
}
generateRandomUser(cant) {
    return {
        name: this.faker.name.firstName(),
        email: this.faker.internet.email(),
    }
}

*/