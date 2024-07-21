// require package for fake data:
const { faker } = require('@faker-js/faker');



// fake data:
let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(getRandomUser());