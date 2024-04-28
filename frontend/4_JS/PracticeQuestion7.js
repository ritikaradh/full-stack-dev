// 1.  For the given start state of an Array, change it to final form using splice method.
    
//         start: ["january", "july", "march", "august"]
//         final:  ["july", "june", "march", "august"]

let startArr = ["january", "july", "march", "august"];

startArr.splice(0, 2, 'july', 'june');

console.log(startArr);

// 2.  Return the index of the 'javacript' from the given Array, if it was reversed.

let programmingLanguages = ["c", "html", "javascript", "python", "java", "c#", "sql"];

console.log(programmingLanguages.reverse().indexOf("javascript"));
