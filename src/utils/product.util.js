const faker = require("@faker-js/faker");

function generateProduct() {
    return {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
        description: faker.lorem.sentence(),
        category: faker.commerce.product()
    }
}

module.exports = generateProduct;
