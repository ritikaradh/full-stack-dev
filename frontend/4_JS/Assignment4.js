//1.    Write a JS program to delete all occurrences of element  "num" in a given array.

//          e.g., if arr= [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//              result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1,2,3,4,5,6,2,3,20];
let num1 = 2;
console.log(`Before performing deletion operation the array is: ${arr}`);
for (let nums of arr){
    if (nums == num1){
        index = arr.indexOf(nums);
        arr.splice(index, 1);
    }
}
console.log(`After performing deletion operation the array is: ${arr}`);


//2.    Write a JS program to find the no. of digits in a number.

    // e.g., number = 287152, count= 6;

let num2 = 287152;
strNum = num2.toString();
noOfDigits = strNum.length;
console.log(`The number of digits in ${num2} is ${noOfDigits}.`);

//3.    Write a JS program to find the sum of digits in a number.
    
    //e.g., if number = 287152, sum = 25

let num3 = 287152;
let sum = 0;

while(num3 > 1){
    digit = num3 % 10;
    sum += digit;
    num3 = Math.floor(num3/10);
}

console.log(`The sum of the digits of the given number is ${sum}.`);

//4.    Print the factorial of a number n.

//[Factorial of a number n is the product of all positive integers less than or equal to a given
//positive integer and denoted by that integer.]

//      e.g., 
//          7! = 1*2*3*4*5*6*7 = 5040
//          0! = 1

let number = 3;
let fact = 1;
let start = number;

while(start != 1){
    fact *= start--;
}

console.log(`The factorial of the number ${number} is ${fact}`);

//5.    Find the largest number in an array with only positive numbers.

let greatest = arr[0];

for(let i=0; i < arr.length; i++){
    if (arr[i + 1] > arr[i]){
        greatest = arr[i + 1];
    }
}

console.log(`The greatest number in the array : ${arr} is ${greatest}`);
