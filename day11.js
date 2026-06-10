/*

# DAY 11 — JavaScript Runtime Fundamentals

# OVERVIEW

Today we explore the JavaScript Runtime Environment,
focusing on how asynchronous code executes.

# TOPICS COVERED

1. Callback Queue
2. Microtask Queue
3. Event Loop
4. Promise vs Timer Execution Order

Goal:
Understand WHY asynchronous code executes
in a particular order.

========================================

1. CALLBACK QUEUE (MACROTASK QUEUE)
   ========================================

Used for:

* setTimeout()
* setInterval()
* DOM Events

Example:
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

/*
Output:

Start
End
Timer

Explanation:

1. "Start" executes.
2. Timer is registered in Runtime Environment.
3. "End" executes.
4. Timer completes.
5. Callback enters Callback Queue.
6. Event Loop moves callback to Call Stack.
7. "Timer" executes.

Flow:

Runtime Environment
↓
Callback Queue
↓
Event Loop
↓
Call Stack
↓
Execution

========================================
2. MICROTASK QUEUE
==================

Used for:

* Promise.then()
* Promise.catch()
* Promise.finally()

Example:
*/

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
Output:

Start
End
Promise

Explanation:

1. Promise callback enters Microtask Queue.
2. Stack becomes empty.
3. Event Loop processes Microtask Queue.
4. Promise callback executes.

Flow:

Microtask Queue
↓
Event Loop
↓
Call Stack

========================================
3. EVENT LOOP
=============

Definition:

Event Loop is a manager that continuously checks:

"Is the Call Stack empty?"

If YES:
Process Microtask Queue first.
Then process Callback Queue.

Mental Model:

while (true) {

```
if (callStack is empty) {

    process microtasks

    process callbacks
}
```

}

(Not actual JavaScript code)

========================================
4. PROMISE vs TIMER
===================

Example:
*/

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

/*
Output:

1
4
3
2

Why?

Promise callback
↓
Microtask Queue

Timer callback
↓
Callback Queue

Event Loop Priority:

1. Microtask Queue
2. Callback Queue

Therefore:

1
4
3
2

========================================
IMPORTANT RULES
===============

Rule 1:

setTimeout(fn, 0)

DOES NOT mean:

"Run immediately"

It means:

"Run after at least 0ms
and only when stack is available"

---

Rule 2:

Microtask Queue has higher priority
than Callback Queue.

Promises beat Timers.

---

Rule 3:

Callbacks never execute directly.

They must:

Queue
↓
Event Loop
↓
Call Stack
↓
Execute

---

Rule 4:

Long synchronous code blocks
queued callbacks.

Example:
*/

setTimeout(() => {
    console.log("Timer");
}, 0);

for (let i = 0; i < 1000000000; i++) {
    // heavy work
}

/*
Timer waits until loop finishes.

Reason:

Call Stack is busy.

========================================
FINAL MENTAL MODEL
==================

Call Stack
↑

Event Loop
↑

Microtask Queue
(Promises)
↑ Higher Priority

Callback Queue
(Timers, Events)

Execution Order:

1. Execute synchronous code.
2. Stack becomes empty.
3. Drain Microtask Queue.
4. Process Callback Queue.

========================================
INTERVIEW ONE-LINERS
====================

Q: What is Event Loop?

A:
Event Loop continuously checks whether
the Call Stack is empty and moves queued
callbacks for execution.

---

Q: Why do Promises execute before Timers?

A:
Promise callbacks go to Microtask Queue,
which has higher priority than Callback Queue.

---

Q: What is Callback Queue?

A:
A queue that stores completed timer/event
callbacks waiting for execution.

---

Q: What is Microtask Queue?

A:
A high-priority queue used by Promises
and other microtasks.

========================================
DAY 11 SUMMARY
==============

* Callback Queue
* Microtask Queue
* Event Loop
* Promise vs Timer Execution Order

Status:
✅ Completed
✅ Reinforcement Completed
✅ Ready for React Day 12
*/
