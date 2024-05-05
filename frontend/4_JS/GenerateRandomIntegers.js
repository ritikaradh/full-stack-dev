//  Generate random integers in the range 1 and 10.
console.log("Generating a random number between 1 and 10.");

//Step 1
let num = Math.random();

//Step 2
num = num * 10;

//Step 3
num = Math.floor(num);

//Step 4
num = num + 1;

console.log(num);

//In one step
console.log("Generating a random number betweeen 1 and 10.");
let random = Math.floor(Math.random()*10) + 1;
console.log(random);

//Generate a random number between 1 and 100.
console.log("Generating a random number between 1 and 100.");
num = Math.floor(Math.random() * 100) + 1;
console.log(num);

//Generate a random number between 1 and 5.
console.log("Generating a random number between 1 and 5.")
num = Math.floor(Math.random() * 5) + 1;
console.log(num);