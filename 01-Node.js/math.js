// We can export files in many ways:

// 1st method:
module.exports = 12345;

// 2nd method:

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}

module.exports = obj;

// 3rd method:

module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;

// 4th method:

exports.sum = (a, b) => a + b;


// # import :
export const div = (a, b) => a / b;
