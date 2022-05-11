const { faker } = require("@faker-js/faker");

function generateRandomProduct(cant = 5) {
    let listProducts = [];
    for (let i = 0; i < Number(cant); i++) {
        const prod = {
            id: i+1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            url: faker.internet.url()
        }
        listProducts.push(prod); 
    }
    return listProducts
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