// // VARIABLES
// // let, var, const

// // const never changes

// // let name = "Alee";

// // name = "vince";

// // console.log(name); // Print to the console

// // console.log("hello world");

// // console.log("1+1");

// const name2 = "pizza";

// const name1 = "sausage";

// // adding two strings;
// // concatenation

// console.log(name1 + " " + name2);
// console.log(name1, "pizza");

// // TEMPLATE LITERALS
// console.log(`${name1} ${name2}`);
// // back tick

// console.log("string" + 1);

// console.log("32" + "100" + "str");
// // not an integer when having "" and its a string

// console.log(1 * 3);
// // integers are numbers without ""

// // booleans: Telling what's true

// const num = 1;

// // let num = undefined;

// console.log(Boolean(num));

// // Notes

// // let prompt1 = prompt("What is your name?");
// // let whereDidHeGo = prompt("Where did he go?");
// // console.log(`${prompt1} went to the ${whereDidHeGo}`);

// // alert(`${prompt1} went to the ${whereDidHeGo}`);
// //when copying don't copy the ()

// // console.log(prompt1);

// // Homework

// let prompt1 = prompt("What is your name?");
// let prompt2 = prompt("How old are you?");
// let prompt3 = prompt("What is your hobby");

// alert(
//   `Hi my name is ${prompt1}, I am ${prompt2}, and I like playing ${prompt3}.`
// );

// // Data types and variables
// // blah blah blah.

// CONDITIONALS ///////////////////////// THIS IS WHERE CONDITIONAL STARTS 06/22/2023

// Truthy values

//Falsy value
// Undefined, null, nan, 0

// let x = 1;

// console.log(Boolean(x));
//
// Conditional

// ===; 1 === 1 is true; strict equals
// ==; loose equals; 1 == "1" true; checks if value is the same regardless of data type
// =; assignment operators

// 1 !== 2; true
// <, >, !==(NOT EQUALS), <=, >=; (MORE THAN OR LESS THAN EQUAL TO)
// 1 >= 0; TRUE
// 1 <= 0; NOT TRUE
// 'A' < 'Z'

// CAN USE '===' FOR STRINGS TOO
// EX: 'ALEE' === 'ALEE'; TRUE STATEMENT

// IF STATEMENT

// if (this === this) {then run this}**

// if ("alee" === "alee") {
//   console.log("hello world");

// LOGICAL OPERATORS//////////////////
// || && ??
// || = OR
// && = AND
// ?? = NULLISH

// EX:

// let x = 0;
// let y = 0;

// if (x === 0 && y === 0) {
//   console.log("hello world");
// }

// TRUE STATEMENT
// STATEMENT FORM: does x equal 0 and y equal 0

// let questComplete = false;
// let questComplete2 = false;
// let slimesDefeated = 0;

// // OR OPERATOR////////////////////////////////////

// if (slimesDefeated === 10) {
//   questComplete = true;
// }

// let i = 0;

// let k = 1;

// if (i === 1 || k === 1) {
//   console.log("hello world");}

// if this happens or this

// ELSE; if the statement is false, goes to default

// let v = 10;
// let u = 8;

// if (v === 10) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }

// if (login === true) {
//   // redirect to page
// } else {
//   alert("user doesn't exist");
// }

// else if/////////////////////////
/* will run if conditions before it are false and specifies a new condition*/

// let q = 2;
// if (q === 2) {
//   console.log("hello world");
// } else if (q === 3) {
//   console.log("goodbye world");
// } else {
//   console.log("something");
// }

// let userName = prompt("Enter your username");

// if (userName === "Alee" || userName === "Yang") {
//   alert("Hello Mastaa");
// } else if (userName === "Someone") {
//   alert("Hello!");
// } else {
//   alert("Adios Amigo!");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];

// console.log(arr[randomNumber]);

// if (arr[randomNumber] === arr[0]) {
//   console.log("Hello world");
// } else if (arr[randomNumber] === arr[1]) {
//   console.log("good bye world");
// } else if (arr[randomNumber] === arr[2]) {
//   console.log("down");
// } else if (arr[randomNumber] === arr[3]) {
//   console.log("whats up");
// }

// if (login === true) {

// } else if () {

// NOTE FOR EQUALS*****
// === ; MEANS EXACT CLONE, HAS TO BE IDENTICLE 3 = 3
// == ; LOOSE/TWIN, "3" = 3
// = ; ASSIGNING A VALUE; let x = 100, x is 100

// HOMEWORK FOR COLLIN

let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

let prompt1 = prompt("Pick a number 1-10");

if (randomNumber == prompt1) {
  alert("Correct");
} else {
  alert("Incorrect");
}

// // Challenge: Guess the Number
// The program generates a random number between 1 and 10.
// The user is prompted to guess the number.
// If the user's guess matches the generated number, an alert is shown with a success message.
// If the user's guess is incorrect, an alert is shown with a failure message.
