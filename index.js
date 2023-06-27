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

// let randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);

// let prompt1 = prompt("Pick a number 1-10");

// if (randomNumber == prompt1) {
//   alert("Correct");
// } else {
//   alert("Incorrect");
// }

// // Challenge: Guess the Number
// The program generates a random number between 1 and 10.
// The user is prompted to guess the number.
// If the user's guess matches the generated number, an alert is shown with a success message.
// If the user's guess is incorrect, an alert is shown with a failure message.

///////////////////// LOOPS 6/23/2023 ////////////////////////////

// // variables and data types
// let myName = "Alee";
// console.log(myName);
// console.log(`Hello ${myName}`);

// // conditionals
// if (myName === "Alee") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // for loop**
// // Initializer is what's in the parenthesis
// // < 5 is condition**
// // iterator

// // const arr = [1,2,3]

// console.log(arr[2])

// for (let initializer = 0; initializer < arr.length; initializer++) {
// console.log(arr[initializer])
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// if youre in an infinte loop, your machine will crash***
// let 1 = 0 if i is less than 10 i adds 1 word form**

// arrays and methods
// let team = ["Alee", "Audry", "Edwin", "lucycan"];
// console.log(team);
// console.log(team.length);

// // push
// console.log(team.push("Derrick", "John"));
// console.log(team);

// /// pop
// console.log(team.pop());
// console.log(team);

// ///join
// console.log(team.join(""));

// ///slice returns a new array
// console.log(team);
// console.log(team.slice(1, 3));

// ///split
// let team1 = "john,mike,kiersten,lucy";
// console.log(team1);
// let teamSplit = team1.split(",");
// console.log(teamSplit);

// ///looping through an array
// console.log(team);
// for (i = 0; i < team.length; i++) {
//   console.log(`Hello ${team[i]}`);
// }

// let roles = [
//   "Tech Manager",
//   "TechFellow",
//   "Placement Manager",
//   "Program Manager",
//   "Intern",
// ];

// ///Hello my name is Lucycan and I am the Tech Manager

// for (i = 0; i < team.length; i++) {
//   console.log;
//   console.log(`Hello my name is ${team[i]} and I am the ${roles[i]}`);
// }

// ///CHALLENGE:
// // using only what we habe learned this far, working with
// // enter your teams names and rolse into your prompt
// //populate those values in an array
// //write a for loop tha tlogs "hello my name is <name and i am a role
// //you must get a log for every team member

// let team3 = prompt("Enter your names");
// console.log(team3);

// let team3Roles = prompt("Enter your roles");
// console.log(team3Roles);

// let nameSplit = team3.split(",");
// console.log(nameSplit);

// let roleSplit = team3Roles.split(",");
// console.log(roleSplit);

// for (i = 0; i < nameSplit.length; i++) {
//   console.log(`Hello my name is ${nameSplit[i]} and I am the ${roleSplit[i]}`);
// }

// /////////////////////// 6/26 FUNCTIONS ///////////////////////////

// //ANCHOR - FUNCTIONS

// function thisIsTheFunctionName(name) {
//   console.log(name);
// }

// // TYPE THE FUNCTION NAME FOLLOWED BY PARENTHESIS
// thisIsTheFunctionName("collin"); // whatever is in the parenthesis is an argument

// //RETURN STATEMENT

// function thisIsTheFunctionName(name) {
//   return name; //replace console.log with return()
// }

// let name = thisIsTheFunctionName("vince");
// let name2 = thisIsTheFunctionName("collin");

// let array2 = [1, 2, 3, 4, 5, 6];

// function iterateThroughArray(arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(array2[initializer]);
//   }
// }

// iterateThroughArray(array3)

// function sum(num1, num2) {
//   console.log(num1 + num2)
// }

// // () parameters/place holders

// sum(1,3) // would equal 4

// function helloWorld() {
//   console.log('hello world')
// }

// helloWorld()

// // ex

// function pho(ingredient1, ingredient2) {
//   console.log(ingredient1 / ingredient2)
// }

// // delcare as a
// const function1 = function() {

// }

// // ARROW FUNCTION "CAN USE FOR REGULAR FUNCTION"
// const function2 = () => {

// }

//// const function21 = function(arr) {
////   for (let initializer = 0; initializer < arr.length, initializer++) {
////   console.log(arr[initializer]);
////   }
////  }
//// let array10 = [1,2,3,4,5]

// // function21(array10) //**TURNS ALL THE "arr" to function21

// // more examples

// let users = ['collin', 'vince', 'haylee']

// userinput = prompt('what is your name')

// function blockScope() {
//   let x = 0  // You CANT access in GLOBAL SCOPE/not in the {}
// }

// console.log(x)

///////////////////////// ASSIGNMENT/CHALLENGE !!! /////////////////////////////

//let team = ["Lucycan", "Collin", "Mark", "Cortez"];
///this array needs to be in block scope not global scope
///create a function that passes another name as an argument to the function parameter
/// the function adds the name that you passed to the array
/// return the array
/// expected output: ["Lucycan", "Collin", "Mark", "Cortez", "Blanca"]

function blockScope(name) {
  let team = ["Lucycan", "Collin", "Mark", "Cortez"];
  team.push(name);
  console.log(team);
}
let blanca = "blanca";
blockScope(blanca);
