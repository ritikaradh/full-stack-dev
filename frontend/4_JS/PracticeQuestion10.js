//1.    Write an arrow function that returns the square of a number n.
const squareNum = num => (
    num*num
)
console.log(squareNum(10));


//2.    Write a function that prints "Hello World" 5 times at intervals of 2s each.
let id = setInterval( () => {
    console.log("Hello Tisha");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("setInterval timeout!");
}, 2000*5);