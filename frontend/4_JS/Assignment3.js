// 1.   Write a JS program to get the first n elements of an Array.
//         [n can be any positive number]

//     For eg., for array [7, 9, 0, -2] and n=3
//     Print: [7,9,0]
let newArr = [7, 9, 0, -2];
n = 3;
console.log(newArr.slice(0,3));
console.log(newArr);


// 2.  Write a JS program to get the last n elements of an array.
//         [n can be any positive number.]

//     For example, for array [7, 9, 0, -2] and n=3
//     Print [9, 0, -2]
console.log(newArr.slice(-3, 4));


// 3.  Write a JS program to check whether a string is blank or not.
newStr= " RITIKA Upadhyay ";
if(newStr.length == 0){
    console.log("String is empty");
}
else{
    console.log("Not empty");
}


// 4.  Write a JS prpgram to test whether the character at the given (character) index is lower case.
n = 4;
if(newStr[4] == newStr[4].toLowerCase()){
    console.log("Lowercase at Index!");
}
else{
    console.log("Uppercase at Index!");
}

//5.    Write a JS program to strip leading and trailling spaces from a string.
console.log(newStr.trim());

//6.    Write a JS program to check if an element exists in an array or not.
element = "U";
if(newStr.indexOf(element) != -1){
    console.log(newStr.indexOf(element));
}
else{
    console.log("Element Not Found");
    console.log(newStr.indexOf(element));
}
