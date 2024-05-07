//1.    Write a function to roll a dice.
function rollDice(){
    const dice = Math.floor(Math.random()*6) + 1;
    console.log(dice);
}

rollDice();

//2.    Create a function that gives us the average of 3 numbers.
function averageThreeNumbers(a,b,c){
    const average = (a + b + c)/3;
    console.log(average);
}

averageThreeNumbers(4,5,5);

//3.    Create a function that prints the multiplication table of a number.
function multiplicationTable(n){
    for(let i=1 ; i <= 10 ; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

multiplicationTable(5);

//4.    Create a function that returns the concatenation of all strings in an array.
function concatString(arr){
    let concat="";
    for(i of arr){
        concat += i + " ";
    }
    return concat;
}

console.log(concatString(["Hello", "everyone", "I", "am", "the", "new", "intern", "here.", "Nice", "to meet you all."]));