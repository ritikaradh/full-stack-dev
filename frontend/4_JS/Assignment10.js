const body = document.querySelector('body');

//creating html elements
let h1= document.createElement('h1');
h1.innerHTML = "<u>Ritika Upadhyay</u>";

let h3= document.createElement('h3');
h3.textContent = "Professional Page";

let div = document.createElement('div');

let h2 = document.createElement('h2');
h2.textContent = "AI Engineer"


//appending elements
body.prepend(div);
div.appendChild(h2);

body.prepend(h3);

body.prepend(h1);


//adding style
h1.classList = 'heading1';
h2.classList = 'heading2';
h3.classList = 'heading3';
div.classList = 'box';


//Question 2: Create a button on the page using JS. Add an event listener to the button that changes the button's color to green when it is clicked.
const button = document.createElement('button');
button.innerText = "Click me";
body.prepend(button);

let btn = document.querySelector('button');
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
    console.log("button was clicked");
    console.dir(btn);
});


//Question 3: Create an input element on the page with a placeholder "enter your name" and an h2 heading on the page inside html.
    //The purpose of this input element is to enter a user's name so it should only input letters from a-z, A-Z and space (all other characters should not be detected.)
    //Whenever the user inputs their name, their input should be dynamically visible inside the heading.

    //[Please note that no other character apart from the allowed characters should be visible in the heading.]

const input = document.createElement('input');
input.placeholder = "enter your name";

body.prepend(input);

let head2 = document.createElement('h2');
head2.textContent = "Heading 2 for Input Element";

