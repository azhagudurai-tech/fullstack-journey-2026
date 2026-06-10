// Ex : 1

function sayAge(age) {
    console.log('My age is ' + age);
}
sayAge(26);

// Ex : 2

function subtract(a, b) {
    console.log(a - b);

}
subtract(50, 5)
subtract(11, 1)

// Ex : 3

function square(num) {
    return num * num;
}

let sqrRes = square(10);
console.log('Sqare root value of 10 is ' + sqrRes);

// Ex : 4

const add = function add(a, b) {
    return a + b;
}

console.log(add(1, 1));

// Ex 5

const multiply = (a, b) => a * b;

// Ex 6

function second(num) {
    return 'return from log :' + num;
}

function first(func) {
    return func(2);
}

console.log(first(second));

// Practice Exercises

// Ex A:

function isEven(num) {
    return num % 2 == 0
};

console.log(isEven(3));

// Ex B :

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const resname = getFullName('Azhagu', 'Durai');
console.log(resname);

// Ex C : callback

function add2(x, y) {
    return x + y;
}
function subtract2(x, y) {
    return x - y;
}
function multiply2(x, y) {
    return x * y;
}
function divide2(x, y) {
    return x / y;
}
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(2, 2, add2));
console.log(calculate(2, 2, subtract2));
console.log(calculate(2, 2, multiply2));
console.log(calculate(2, 2, divide2));



