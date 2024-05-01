// 1.  Print all odd numbers in the range 1-15 using for loop.

let start = 1;
let end = 15;

for(i=start; i <= end; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

// 2.  Print all even numbers in the range 1-15 using for loop.

console.log("Printing even numbers");

for(i=start; i <= end; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}