/****

# Day 8 — DOM Fundamentals

DOM Fundamentals
Browser converts HTML into a tree of JavaScript objects called the DOM so JavaScript can interact with the page.

Example:
document.querySelector("h1");

DOM Tree
Elements are connected using parent-child relationships in a hierarchical tree structure.

Example:
div
├── h1
└── p

DOM Manipulation
JavaScript can read, update, create, and remove elements from the DOM.

Example:
heading.textContent = "Welcome";

Reading & Modifying Attributes
Attributes store extra information about elements and can be accessed or changed with JavaScript.

Example:
img.src = "dog.jpg";

Creating Elements
Creates a new DOM element object in memory.

Example:
const p = document.createElement("p");

Appending Elements
Attaches an element to the DOM tree so it becomes visible on the page.

Example:
document.body.append(p);

Removing Elements
Detaches an element from the DOM tree.

Example:
para.remove();

Memory vs DOM Tree
Removing an element from the DOM does not destroy it if a JavaScript variable still references it.

Example:
para.remove();
console.log(para.textContent);

DOM Traversal
Moving through the DOM tree using parent, child, and sibling relationships.

Example:
element.parentElement
element.children
element.nextElementSibling

***/