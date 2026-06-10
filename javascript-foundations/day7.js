//Array reduce 
const prices = [100, 200, 300];
const summation = prices.reduce((acc, data) => {
    return acc + data
}, 0);
console.log(summation);


const users = [
    { age: 20 },
    { age: 25 },
    { age: 30 }
];
const totAge = users.reduce((acc, data) => {
    return acc + data.age
}, 0);
console.log(totAge);
