//1.    Write an arrow function named arrayAverage that accepts an array of numbers and returns
        //the average of those numbers.
const arrayAverage =  (arr) =>  {
    let sum = 0;
    for (let element of arr){
        sum += element;
    }
    let avg = sum / arr.length;

    return avg;
} 
console.log(arrayAverage([12, 18, 11]));


//2.    Write an arrow function named isEven() that takes a single number as arguement and
        //returns if it is even or not.
const isEven = num =>{
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Not even";
    }
}
console.log(isEven(10));