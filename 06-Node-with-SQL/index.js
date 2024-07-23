const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'pajwnkm@7591',
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let q = "SHOW TABLES"; // q => query 

// Inserting new data:
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "newuser_123", "abc@gmail.com", "abcd"];

// Inserting new data:
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["123a", "newuser_123a", "abc@gmail.coma", "abcda"],
//     ["123b", "newuser_123b", "abc@gmail.comb", "abcdb"]
// ];

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}


try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
        // console.log(result.length); // result is array
        // console.log(result[0]);
        // console.log(result[1]);
    });
} catch (err) {
    console.log(err);
}

connection.end(); // stop automatic connection
