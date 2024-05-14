//WAP to find the maximum of an array using reduce method.

let arr = [12, 34, 54, 23, 52, 51, 97, 65];

let max = arr.reduce((acc, ele) => {
    if(acc < ele){
        return ele;
    }
    return acc;
});
console.log(max);