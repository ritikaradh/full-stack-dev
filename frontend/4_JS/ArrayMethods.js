let arr;

//1.    arr.forEach()
console.log("Implementing forEach method")
arr = [1, 2, 3, 4, 5];

//method 1
function print(arr){
    console.log(arr);
}
print(arr);
arr.forEach(print);
console.log("\n");

//method 2
arr.forEach(function(el){
    console.log(el);
})
console.log("\n");

//method 3
arr.forEach((el) =>{
    console.log(el);
})


//2.    arr.map()
console.log("Implementing map method")
arr = [1, 3, 5, 7, 9];

let newArr = arr.map((el) => {
    return el*2;
})
console.log(newArr);


//3.    arr.filter()
console.log("Implementing filter function")

let nextArr = newArr.filter(
    el => (el <= 10)
);
console.log(nextArr);


//4.    arr.every()
console.log("Implementing every method");

let flag = newArr.every(el => (el % 2 != 0));
console.log(flag);


//5.    arr.some()
console.log("Implementing some method");

flag = nextArr.some(el =>   (el % 10 == 0));
console.log(flag)

flag = nextArr.some(el =>   (el % 13 == 0));
console.log(flag)


//6.    arr.reduce((acc, reduce) => (something))
console.log("Implementing reduce method");

flag = arr.reduce((acc, ele) => (acc + ele));
console.log(arr);
console.log(flag);

flag = [1,2,3,4].reduce((acc, ele) => (acc * ele));
console.log(flag);
