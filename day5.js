// Exercise 1
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

// Exercise 2
const user = {
    name: "Arun",
    city: "Chennai"
};

const { name, city } = user;
console.log(name, city);


// Exercise 3
const product = {
    title: "Laptop"
};
const { title: productTitle } = product;
console.log(productTitle);

// Exercise 4
let first = [1, 2];
let copy = [...first, 3];
console.log(copy);

// Exercise 5
let arrOne = [1, 2];
let arrTwo = [3, 4];
let combined = [...arrOne, ...arrTwo];
console.log(combined);

// Exercise 6
const newObj = { ...user, age: 26 };
console.log(newObj);

// Exercise 7 — VERY IMPORTANT
// it logs Sam . because object/array copies refernce so changing in 2 will afeect it 1 also .. use spread operator to avoid this


// Understanding Questions

// Q1:
// array destructuring using position
// object destructuring using varibale key name (technical word didn't remember )

// Q2:
// spread operator copy object/array created new one 

// Q3: b = a
// its dangerous becuse it copies reference chned made in this will affect main also will lead to mismatch

// Q4:
// used spead operator it copies above array log same as above

// Q5:
// {name:"Arun", city:"Chennai"}

