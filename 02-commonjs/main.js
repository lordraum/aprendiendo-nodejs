const { suma, producto } = require("./operaciones");
const users = require("./users.json");

const numbers = [3, 5];

const sumResult = suma(...numbers);
const productResult = producto(...numbers);

console.log(sumResult, productResult);
console.log(users);
