const { startTransition } = require("react");

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "123") {
            resolve("Login Success");
        } else {
            reject("Invalid Credentials");
        }
    });
}

async function run() {
    const isValidUser = await loginUser("admin", "123");
    const result = await isValidUser;
    console.log(result);
}


async function run2() {
    try {
        const isValidUser = await loginUser("john", "777");
        const result = await isValidUser;
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

// run();
// run2();

function fetchUser() {
    return new Promise((resolve) => {
        resolve({
            id: 1,
            name: "Karthik"
        });
    });
}

async function run3() {
    const user = await fetchUser();
    console.log(user.name);

}
// run3();


async function run4() {
    const userRes = await fetchUser();
    console.log(`User ID: ${userRes.id}`);
    console.log(`User Name: ${userRes.name}`);

}
// run4();


function fetchProfile() {
    return new Promise((resolve) => {
        resolve({
            id: 1,
            name: "Durai"
        });
    });
}
function fetchProfile2() {
    return new Promise((reject) => {
        reject("Server Error");
    });
}

async function loadProfile() {
    console.log('Loading');

    const userData = await fetchProfile();

    console.log(userData);
}
async function loadProfile2() {
    console.log('Loading');

    try {
        const userData = await fetchProfile2();
        console.log(userData);
    } catch (error) {
        console.log(error);
    }

}

// loadProfile1();
// loadProfile2();

function fetchProducts() {
    return new Promise((resolve) => {
        resolve([
            { id: 1, name: "Laptop" },
            { id: 2, name: "Phone" },
            { id: 3, name: "Keyboard" }
        ]);
    });
}

async function loadProducts() {
    console.log('Loading Products');

    const products = await fetchProducts();

    console.log('Products Loaded');
    // T1
    console.log(products);

    // T2
    products.map((item) => {
        console.log(item.name);
    });

    // T3
    console.log('Total Products : ' + products.length);

}

// loadProducts();

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (
            username === "admin" &&
            password === "123"
        ) {
            resolve({
                id: 1,
                name: "Admin"
            });
        } else {
            reject("Invalid Credentials");
        }
    });
}

async function login() {
    console.log('Logging In..');
    const validUser = await loginUser("admin", "123");
    console.log('Login Sucess');
    console.log(validUser);
}
login();

async function loginFail() {
    console.log('Logging In..');
    try {
        const validUser = await loginUser("john", "777");
        console.log('Login Sucess');
        console.log(validUser);
    } catch (e) {
        console.log(e);

    }
}
loginFail();


/****
 

=========================================================
DAY 10 — ASYNCHRONOUS JAVASCRIPT OVERVIEW
=========================================================

1. SYNCHRONOUS CODE
---------------------------------------------------------

Meaning:
JavaScript executes one line at a time.

Example:

console.log("A");
console.log("B");

Output:
A
B

Mental Model:

Task 1
↓
Task 2
↓
Task 3


=========================================================

2. CALL STACK
---------------------------------------------------------

Meaning:
Tracks which function is currently executing.

Rule:
LIFO (Last In First Out)

Example:

function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();

Stack Flow:

one()
↓
two()
↓
console.log()

Then remove:

console.log()
↓
two()
↓
one()


=========================================================

3. ASYNCHRONOUS CODE
---------------------------------------------------------

Meaning:
Start work now.
Finish it later.

Example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

Output:

A
C
B

Reason:
Timer runs later.


=========================================================

4. WEB APIS
---------------------------------------------------------

Meaning:
Browser handles async operations outside the Call Stack.

Examples:

setTimeout()
fetch()
DOM Events

Example:

setTimeout(() => {
    console.log("Timer");
}, 1000);

Browser tracks the timer.


=========================================================

5. CALLBACK QUEUE (MACROTASK QUEUE)
---------------------------------------------------------

Meaning:
Completed async callbacks wait here.

Example:

setTimeout(() => {
    console.log("Timer");
}, 1000);

Flow:

setTimeout
↓
Web API
↓
Callback Queue
↓
Call Stack


=========================================================

6. EVENT LOOP
---------------------------------------------------------

Meaning:
Checks:

"Is Call Stack empty?"

If YES:

Move queued callback into Call Stack.

Example:

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

Output:

Start
End
Timer


=========================================================

7. PROMISES
---------------------------------------------------------

Meaning:
Represents a value that will arrive later.

States:

Pending
↓
Fulfilled

(or Rejected)

Example:

const promise =
    Promise.resolve("Hello");

Promise resolves with:

"Hello"


=========================================================

8. RESOLVE / REJECT
---------------------------------------------------------

Meaning:

resolve()
→ Success

reject()
→ Failure

Example:

new Promise((resolve, reject) => {
    resolve("Success");
});

Example:

new Promise((resolve, reject) => {
    reject("Failed");
});


=========================================================

9. .then()
---------------------------------------------------------

Meaning:
Run this callback when Promise succeeds.

Example:

Promise.resolve("Hello")
    .then((value) => {
        console.log(value);
    });

Output:

Hello


=========================================================

10. MICROTASK QUEUE
---------------------------------------------------------

Meaning:
Promise callbacks wait here.

Priority:

Microtask Queue
↓
Callback Queue

Example:

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timer");
}, 0);

Output:

Promise
Timer


=========================================================

11. PROMISE CHAINING
---------------------------------------------------------

Meaning:
Run multiple async steps in order.

Example:

Promise.resolve(1)
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then(console.log);

Output:

3


=========================================================

12. ASYNC FUNCTIONS
---------------------------------------------------------

Meaning:
Function that can use await.

Example:

async function greet() {
    return "Hello";
}

Returns:

Promise


=========================================================

13. AWAIT
---------------------------------------------------------

Meaning:
Pause async function until Promise resolves.

Example:

const value =
    await Promise.resolve("Hello");

console.log(value);

Output:

Hello

IMPORTANT:

fetchProducts()
↓
Promise

await fetchProducts()
↓
Resolved Value


=========================================================

14. ASYNC / AWAIT FLOW
---------------------------------------------------------

Example:

async function run() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

run();

console.log("C");

Output:

A
C
B

Reason:

Function pauses at await.
Main code continues.
Function resumes later.


=========================================================

15. TRY / CATCH WITH ASYNC
---------------------------------------------------------

Meaning:
Handle rejected Promises.

Example:

try {
    await Promise.reject("Error");
} catch (error) {
    console.log(error);
}

Output:

Error


=========================================================

16. FETCH API
---------------------------------------------------------

Meaning:
Request data from a server.

Example:

fetch("/users");

Returns:

Promise


=========================================================

17. FETCH FLOW
---------------------------------------------------------

Mental Model:

fetch()
↓
Promise

await fetch()
↓
Response Object

await response.json()
↓
JavaScript Data

Example:

const response =
    await fetch("/users");

const users =
    await response.json();


=========================================================

18. RESPONSE OBJECT VS DATA
---------------------------------------------------------

Wrong:

const users =
    await fetch("/users");

users is NOT actual data.

Correct:

const response =
    await fetch("/users");

const users =
    await response.json();


=========================================================

19. LOADING → SUCCESS → ERROR PATTERN
---------------------------------------------------------

Most common real-world flow.

Example:

Loading...
↓
Wait for API
↓
Success

or

Loading...
↓
Wait for API
↓
Error


=========================================================

20. COMPLETE REAL-WORLD FLOW
---------------------------------------------------------

async function loadProducts() {
    console.log("Loading...");

    try {
        const products =
            await fetchProducts();

        console.log("Success");
        console.log(products);

    } catch (error) {
        console.log(error);
    }
}

Application Flow:

User Action
↓
Loading
↓
API Request
↓
Success / Error
↓
Display Result


=========================================================

MOST IMPORTANT DAY 10 TAKEAWAYS
=========================================================

1. JavaScript is single-threaded.

2. Async code does NOT mean parallel execution.

3. Event Loop manages async execution.

4. Promise callbacks go to Microtask Queue.

5. Microtasks run before Timers.

6. async functions always return Promises.

7. await returns the RESOLVED VALUE.

8. fetch() returns a Promise.

9. await fetch() returns a Response Object.

10. await response.json() returns actual data.

11. Real applications follow:

Loading
↓
Wait
↓
Success / Error


 *****/