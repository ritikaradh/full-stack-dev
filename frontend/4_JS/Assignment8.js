//1.    Square and sum the array elements using the arrow function
        //and then find the average of the array.
       
arr = [1,3,2,4,6,5,7];

arrSquare = arr.map(el => el*el);
console.log(`Square of array elements: ${arrSquare}`);

arrSum = arrSquare.reduce((acc,ele) => acc + ele);
console.log(`Sum of the square of the array elements: ${arrSum}`);

arrAvg = (arrSquare.reduce((acc,ele) => acc + ele)) / arr.length;
console.log(`Average of the square of the array elements: ${arrAvg}`);


//2.    Create a new array using the map function whose each element is equal to the original element plus 5.

arrPlus5 = arr.map(el => el + 5);
console.log(`New array whose element is original element + 5 is: ${arrPlus5}`);


//3.    Create a new array whose elements are in uppercase of words present in the original array.

arr = ["I", "am", "Ritika", "Upadhyay", "and", "I", "do", "modelling", "sometimes"];
uppercaseArr = arr.map(el => el.toUpperCase());
console.log(uppercaseArr);


//4.    Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguements.
        //The funtion should return a new array with the original array values and all of the additional arguements doubled.

function doubleAndReturnArgs(arr, ...args){
    let newArr = [];
    newArr.push(...arr, ... args.map ( el => el * 2 ) );
    return newArr;
}

console.log(doubleAndReturnArgs([1,2,3,4,5], 10, 20, 30));


//5.    Write a function called mergeObjects that accepts two objects
        //and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2){
    let newObj = {
        ...obj1, ...obj2
    }

    return newObj;
}

instaUser = {
    id: "@thecatiscoding",
    name: "Neha",
    dob: "02-01-1995",
    recentPost: "#studylife",
}

userInfo = {
    surname : "Upadhyay",
    age:    21,
    joiningDate: "25-02-2016",
    occupation: "doctor",
}

console.log(mergeObjects(instaUser, userInfo));



