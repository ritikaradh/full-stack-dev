//User enters a maximum number and then tries to guess a random generated number between 1 to max.

const max_num = prompt("Enter a Maximum Range: ");

//generating a random number between 1 and max.
console.log("Generating a random number........");
const num = Math.floor(Math.random() * max_num) + 1;

while(true){

    //asking the user to guess the number
    let guess= prompt("Enter your guess: ");

    if(guess == num){
        console.log(`Correct guess! The number is ${num}.`);
        break;
    }

    else if(guess == "quit"){
        console.log("You lose!");
        break;
    }

    else{
        console.log("Wrong Guess!");
        if (guess > num){
            console.log(`Number is smaller than ${guess}!`);
        }
        else{
            console.log(`Number is greater than ${guess}`);
        }
    }
}
