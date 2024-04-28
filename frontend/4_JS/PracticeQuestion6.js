//Question: For the given start state of an Array, change it to final form using methods.

//     start: ["january", "july", "march", "august"]
//     final: ["july", "june", "march", "august"]

let startArr = ["january", "july", "march", "august"];

startArr.shift();
startArr.shift();
startArr.shift();

startArr.unshift("march");
startArr.unshift("june");
startArr.unshift("july");

console.log(startArr);

