//1.    Check if all numbers in our array are multiples of 10 or not.

let arr = [10, 20, 30, 40, 50];
let multiple10 = arr.every(el => (el % 10 == 0));
console.log(multiple10);

multiple10 = [5, 10, 15, 20, 25].every(el => (el % 10 == 0));
console.log(multiple10);


//2.    Create a function to find the minimum number in an array

function getMinNum(arr){
    const minNum = arr.reduce((acc, ele) => {
        if(acc > ele){
            return ele;
        }
        return acc;
    });
    console.log(minNum);
}

getMinNum([5,23,12,54,2,5,8]);