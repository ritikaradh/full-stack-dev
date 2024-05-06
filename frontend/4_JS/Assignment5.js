//1.    Create a program that generates a random number representing a dice roll.
        // [The number should be between 1 and 6.]

let dice_roll = Math.floor(Math.random()*6) + 1
console.log(`The dice rolls.....\n${dice_roll}`);


//2.    Create an object representing a car that stores the following properties for the car:
        //name, model, color
//      Print car name.

const car = {
        name:   "Honda City",
        model:  "5XTY67",
        color:  "midnight purple",
}

console.log(car.name);


//3.    Create an object Person with their name, age and city.
        //Edit their original value to change it to "New York."
        //Add a new property country and set it to the United States.

//creating object person
const Person = {
        name: "Hansa Chaturvedi",
        age:    "14",
        city:   "Kolkata",
}

//printing original info
console.log(Person);

//edit city's name
Person.city = "New York";

//add new property
Person.country = "United States";

console.log(Person);


