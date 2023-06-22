// VARIABLES
// let, var, const

// const never changes

// let name = "Alee";

// name = "vince";

// console.log(name); // Print to the console

// console.log("hello world");

// console.log("1+1");

const name2 = "pizza";

const name1 = "sausage";

// adding two strings;
// concatenation

console.log(name1 + " " + name2);
console.log(name1, "pizza");

// TEMPLATE LITERALS
console.log(`${name1} ${name2}`);
// back tick

console.log("string" + 1);

console.log("32" + "100" + "str");
// not an integer when having "" and its a string

console.log(1 * 3);
// integers are numbers without ""

// booleans: Telling what's true

const num = 1;

// let num = undefined;

console.log(Boolean(num));

// Notes

// let prompt1 = prompt("What is your name?");
// let whereDidHeGo = prompt("Where did he go?");
// console.log(`${prompt1} went to the ${whereDidHeGo}`);

// alert(`${prompt1} went to the ${whereDidHeGo}`);
//when copying don't copy the ()

// console.log(prompt1);

// Homework

let prompt1 = prompt("What is your name?");
let prompt2 = prompt("How old are you?");
let prompt3 = prompt("What is your hobby");

alert(
  `Hi my name is ${prompt1}, I am ${prompt2}, and I like playing ${prompt3}.`
);
