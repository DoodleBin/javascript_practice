// JS ESSENTIALS FOR A KOTLIN PERSON (~30 min)
// How to use: do NOT paste. Retype each example, run it, change a value, run again.
// Run it in the browser console (F12), or save as scratch.js and run `node scratch.js`.

// ---------------------------------------------------------------
// 0. const / let  (5 sec)
// const = val (can't reassign), let = var. Use const by default.
// ---------------------------------------------------------------
const pi = 3.14;
let count = 0;
count = count + 1;

// Strings: backticks give you templates, like Kotlin's "Hello $name"
const who = "Alexa";
console.log(`Hello, ${who}`);

// ---------------------------------------------------------------
// 1. ARROW FUNCTIONS  (5 min)
// Kotlin: val add = { a: Int, b: Int -> a + b }
// ---------------------------------------------------------------
const add = (a, b) => a + b;        // one expression: implicit return
const double = n => n * 2;          // one parameter: parens optional
const greet = (name) => {           // braces: you must write `return`
  return `Hi, ${name}`;
};
console.log(add(2, 3), double(4), greet("Josh")); // 5 8 "Hi, Josh"

// YOUR TURN: write `square` and `isEven` as arrow functions.
// square(5) -> 25     isEven(4) -> true

// ---------------------------------------------------------------
// 2. DESTRUCTURING  (5 min)
// Kotlin: val (x, y) = pair  -- JS does this for objects AND arrays
// React uses this constantly for props.
// ---------------------------------------------------------------
const user = { name: "Alexa", age: 20, city: "Grinnell" };
const { name, age } = user;         // pulls out fields by name
console.log(name, age);             // "Alexa" 20

const [first, second] = [10, 20, 30];  // pulls out by position
console.log(first, second);         // 10 20

// In function params (this is exactly how React components receive props):
const label = ({ title, count }) => `${title}: ${count}`;
console.log(label({ title: "Unread", count: 3 })); // "Unread: 3"

// YOUR TURN: destructure `city` from `user`, then write a function
// `describe({ name, age })` that returns "Alexa is 20".

// ---------------------------------------------------------------
// 3. SPREAD  (5 min)
// `...` copies the contents of an array or object into a new one.
// Kotlin: it's like `copy()` on a data class, or `list + item`.
// ---------------------------------------------------------------
const nums = [1, 2, 3];
const more = [...nums, 4];          // [1, 2, 3, 4]; `nums` is unchanged
console.log(nums, more);

const older = { ...user, age: 21 }; // same fields, age overridden
console.log(user.age, older.age);   // 20 21  (original unchanged!)

// YOUR TURN: make `front` = [0, ...nums] and `renamed` = user with name "Sam".

// ---------------------------------------------------------------
// 4. map / filter / find  (5 min)
// Same ideas as Kotlin. Biggest difference: find() returns `undefined`
// when nothing matches (Kotlin's firstOrNull() returns null).
// ---------------------------------------------------------------
const list = [1, 2, 3, 4, 5];
console.log(list.map(n => n * 2));          // [2, 4, 6, 8, 10]
console.log(list.filter(n => n % 2 === 0)); // [2, 4]
console.log(list.find(n => n > 3));         // 4
console.log(list.find(n => n > 99));        // undefined

// Always use === (not ==). `===` is strict equality, like Kotlin's ==.

// YOUR TURN: from ["apple", "kiwi", "banana"], get the lengths (map),
// the names longer than 4 chars (filter), and the first that starts with "b" (find).

// ---------------------------------------------------------------
// 5. COPY, DON'T MUTATE  (8 min, the most important one for React)
// React state must be replaced with a NEW array/object, not edited.
// Kotlin: like using immutable List + copy(). Avoid push, splice, and
// `todos[0].done = true` on state.
// ---------------------------------------------------------------
const todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Learn React", done: false },
];

// ADD: spread the old items and append the new one
const added = [...todos, { id: 3, text: "Build table", done: false }];

// REMOVE: filter out the one you don't want
const removed = todos.filter(t => t.id !== 1);

// UPDATE: map, and copy only the one that changes
const toggled = todos.map(t =>
  t.id === 2 ? { ...t, done: true } : t
);

console.log(todos);   // unchanged! Check it. That's the point.
console.log(added, removed, toggled);

// YOUR TURN (write these from a blank line, no peeking):
//  a) `addTodo(list, text)` returns a new list with one more todo
//  b) `deleteTodo(list, id)` returns a new list without that id
//  c) `toggleTodo(list, id)` returns a new list with that todo's `done` flipped
//  Then confirm `todos` itself never changes after calling them.
