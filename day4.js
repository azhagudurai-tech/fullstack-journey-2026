// Exercise 1
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// Exercise 2
car.color = "Black";
console.log(car);

// Exercise 3
car.year = 2024;

// Exercise 4
delete car.model;

// Exercise 5
const student = {
    name: "Sam",
    marks: {
        maths: 90,
        science: 85
    }
};
console.log(student.marks.science);

// Exercise 6
const user = {
    name: "Arun",
    city: "Chennai"
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Exercise 7
for (let key in user) {
    console.log(key, user[key]);
}


// Mini task 

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 50000,
        inStock: true
    },
    {
        id: 2,
        title: "Phone",
        price: 20000,
        inStock: false
    },
    {
        id: 3,
        title: "Keyboard",
        price: 3000,
        inStock: true
    }
];

console.log(products.length);

// Task A
const prodTitles = products.map((item) => {
    return item.title
});
console.log(prodTitles);

// Task B
const stockProds = products.filter((item) => {
    return item.inStock == true;
});
console.log(stockProds);

// Task C
let above10K = products.find((item) => {
    return item.price > 10000
});
console.log(above10K);

// Task D
let isSomeinStock = products.some((item) => {
    return item.inStock === true
});
console.log(isSomeinStock);


let isAllinStock = products.every((item) => {
    return item.inStock === true;
});
console.log(isAllinStock);

// Task E
products.forEach((item) => {
    console.log(item.title + ' costs ' + item.price);
});

