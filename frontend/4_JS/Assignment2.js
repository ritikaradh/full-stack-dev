let num = 20;

if(num % 10 === 0){
    console.log("Good");
}
else{
    console.log("Bad");
}


let names = prompt("Enter your name: ");
let age = prompt("Enter your age");

alert(`${names} is ${age} years old`);

let quarter_months = 2;

switch(quarter_months) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
}

if(names[0] === "a" || names[0] ==="A" && names.length > 5){
    console.log("Golden String");
}