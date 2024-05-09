//using 'this' keyword to indicate current instance variable
const student = {
    name:   "tisha",
    age: 21,
    course1: 70,
    course2: 70,
    course3: 69,

    getAvg(){
        let avg = (this.course1 + this.course2 + this.course3)/ 3;
        return avg;
    }
}

console.log(student.getAvg());


//try and catch
console.log("hello");
console.log("tisha");

try{
    console.log(a);
}
catch(err){
    console.log("a doesn't exist");
    console.log(err);
}

console.log("let's see....")
console.log("yeah!")
console.log("your code worked properly!");


//arrow function
const multiplyTwoNum = (a, b) =>    {
    return a*b;
}

const multiplyFourNum = (a, b, c, d) => (
    a * b + c / d
)

console.log(multiplyFourNum(45, 2, 32, 6));


//setTimeout
setTimeout( () => {
    console.log("Program execution completed.");
}, 10000);


//setInterval
let id = setInterval( () => {
    console.log(`setInterval Id no. ${id} is responding.`);
}, 5000);

let id2 = setInterval(() => {
    console.log(`setInterval Id no. ${id2} is responding.`)
}, 2500);

clearInterval(id2);


//'this' keyword with Arrow functions
const student1 = {
    name: 'tisha',
    marks: 69,
    prop: this, //global scope

    getName(){
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this);  //parent's scope
        return this.marks;
    },
};
