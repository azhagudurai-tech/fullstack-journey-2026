// # Day 9 — Events & Event Handling

// Events
// An event is an action or occurrence detected by the browser, such as a click, key press, form submission, or typing.

// Example:
// button clicked
// ↓
// click event occurs

// --------------------------------------------------

// Event Listeners
// An event listener waits for a specific event and runs a function when that event occurs.

// Example:
// button.addEventListener("click", handleClick);

// --------------------------------------------------

// Event Handlers
// An event handler is the function that executes when an event occurs.

// Example:
// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

// --------------------------------------------------

// Function Reference vs Function Call
// Passing a function reference registers it for later execution, while calling a function executes it immediately.

// Example:
// button.addEventListener("click", greet);   // register
// button.addEventListener("click", greet()); // execute immediately

// --------------------------------------------------

// Event Object
// The browser creates an event object when an event occurs and passes it to the handler. It contains information about the event.

// Example:
// button.addEventListener("click", (event) => {
//   console.log(event);
// });

// --------------------------------------------------

// event.target
// event.target refers to the element where the event originally occurred.

// Example:
// button.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// --------------------------------------------------

// Multiple Elements with Same Handler
// One handler function can work for multiple elements because event.target tells us which element triggered the event.

// Example:
// function handleClick(event) {
//   console.log(event.target.textContent);
// }

// --------------------------------------------------

// preventDefault()
// preventDefault() stops the browser's default action while allowing the event and handler to continue.

// Example:
// link.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// --------------------------------------------------

// Keyboard Events
// Keyboard events occur when the user presses keys.

// Example:
// input.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });

// --------------------------------------------------

// event.key
// event.key tells us which keyboard key was pressed.

// Example:
// event.key
// // Enter
// // a
// // Escape

// --------------------------------------------------

// Input Events
// The input event fires whenever the value of an input changes.

// Example:
// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// --------------------------------------------------

// Form Events
// The submit event fires when a form is submitted.

// Example:
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// --------------------------------------------------

// event.target.value
// event.target.value returns the current value inside an input element.

// Example:
// console.log(event.target.value);

// --------------------------------------------------

// Event Bubbling
// Events start on the target element and then bubble upward through ancestor elements.

// Example:
// BUTTON
// ↓
// SECTION
// ↓
// DIV

// --------------------------------------------------

// stopPropagation()
// stopPropagation() stops an event from bubbling to parent elements.

// Example:
// button.addEventListener("click", (event) => {
//   event.stopPropagation();
// });

// --------------------------------------------------

// Core Mental Models

// event.target
// → Where the event started

// event.key
// → Which keyboard key was pressed

// event.target.value
// → Current value of an input

// preventDefault()
// → Stop browser default action

// stopPropagation()
// → Stop event bubbling

// Runtime Flow

// User Action
// ↓
// Event Occurs
// ↓
// Browser Creates Event Object
// ↓
// Handler Executes
// ↓
// (Optional)
// preventDefault()
// stopPropagation()