// let num = 20;

// if(num % 10 === 0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }


// let names = prompt("Enter your name: ");
// let age = prompt("Enter your age");

// alert(`${names} is ${age} years old`);

// let quarter_months = 2;

// switch(quarter_months) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
// }

// if(names[0] === "a" || names[0] ==="A" && names.length > 5){
//     console.log("Golden String");
// }

let num1 = prompt("Enter first num");
let num2 = prompt("Enter second num");
let num3 = prompt("Enter third num");

if (num1 > num2){
    if (num1 > num3){
        alert(`${num1} is largest`);
    }
    else{
        alert(`${num3} is largest`);
    }
}

else{
    if (num2 > num3){
        alert(`${num2} is largest`);
    }
    else{
        alert(`${num3} is largest`);
    }
}

if (num1[num1.length-1]==2 && num2[num2.length-1] == 2){
    console.log("Same!")
}
else{
    console.log("Different!")
}