const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 2000 }
];
let names = products.filter((list) => list.price > 1000).map((user) => user.name);
console.log(names);


const users = [
    { name: "Arun", active: true },
    { name: "Sam", active: false },
    { name: "John", active: true }
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);

const newusers = [
    { name: "Arun", active: true },
    { name: "Sam", active: false },
    { name: "John", active: true }
];
const activeUsrNames = newusers.filter(user => user.active).map(data => data.name);
console.log(activeUsrNames);


