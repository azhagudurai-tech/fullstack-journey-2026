// Exercise 1
const colors = ["red", "blue", "green"];
console.log('first item : ' + colors[0]);
console.log('last item : ' + colors[colors.length - 1]);
console.log('total length : ' + colors.length);

// Exercise 2
const nums = [1, 2, 3];
nums.forEach((num) => {
    console.log('Number is ' + num);
});

// Exercise 3
let doubled = nums.map((num) => {
    return num * 2;
});
console.log(doubled);

// Exercise 4
const animals = ["cat", "elephant", "dog", "tiger"];
let filtered = animals.filter((animal) => {
    return animal.length > 4
});
console.log(filtered);

// Exercise 5
const allNums = [10, 40, 55, 80];
let firstoccur = allNums.find((num) => {
    return num > 50;
});
console.log(firstoccur);

// Exercise 6
let isanynegative = allNums.some((num) => {
    return num < 1
});
console.log(isanynegative);

// Exercise 7
let isallpositive = allNums.every((num) => {
    return num >= 0;
});
console.log(isallpositive);