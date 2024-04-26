//A "good string" is a string that starts with the letter 'a' and has a length > 3. Write a Program to find if a string is good or not.

let string = "aya";

if (string[0] === 'a' && string.length>3) {
    console.log("Good String");
}
else{
    console.log("Not Good String");
}