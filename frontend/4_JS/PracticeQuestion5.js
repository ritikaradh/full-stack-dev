// 1. For the given string:
//     let msg = "help!";
//  Trim it and convert it to uppercase.

let msg = "help!";
newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// 2. For the string -> let namee = "Apna College", predict the output for the following:
//     namee.slice(4,9)
//     namee.indexOf("na")
//     namee.replace("Apna", "Our")

let namee = "ApnaCollege";

console.log(namee.slice(4,9));
console.log(namee.indexOf("na"));
console.log(namee.replace("Apna", "Our"));

//3. Seperate the college part in above string and replace 'l' with 't' in it.
console.log(namee.slice("College").replace("l", "t"));
