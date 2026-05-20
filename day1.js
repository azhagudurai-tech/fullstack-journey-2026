var a = 10;
function abc() {
    var a = 20;
    console.log(a);
}
// abc();
// console.log(a);

let b = 10;
function abcd() {
    let b = 20;
}
// abcd();
// console.log(b)

// console.log(x);
var x = 99;

// console.log(y);
let y = 88;

const user = {
    name: "Sam"
};

// user = {
//     name: "John"
// }; // cannot reclare only can acces through dot method

user.name = "AD";
// console.log(user)

const arr = [1, 2];

arr.push(3);

// console.log(arr);//push is normal method in javascrrip to push new data into array

var name1 = "AD";
let name2 = "A Durai";
const name3 = "Rohit";


if (true) {
    var name1 = "AD var";
    let name2 = "AD let";
    var name3 = "AD const";
}


console.log(name1);
console.log(name2);
console.log(name3);

const users = {
    name: "YourName",
    skills: ["PHP"]
}

users.name="A Durai";
users.skills.push("React");
console.log(users);


console.log(test);

let test = 5;