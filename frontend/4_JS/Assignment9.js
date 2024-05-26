//Question 1:   Create a new input and button element on the page using JavaScript only.
    //Set the text of the button to "click me".

const body = document.querySelector('body');
let input = document.createElement('input');
let btn = document.createElement('button');
btn.append("Click me!");

body.appendChild(input);
body.appendChild(btn);


//Question 2:   Add following attributes to the element:
    //Change placeholder value of input to "username"
    //Change the id of button to "btn"

input.placeholder = "username";
btn.id = "btn";


//Question 3:   Access the btn using the querySelector and button id.
    //Change the button background color to blue and text color to white.

let btnSelect = document.querySelector('#btn');
btnSelect.style.backgroundColor = "blue";
btnSelect.style.color = "white"; 

//Question 4:   Create an h1 element on the page and set its text to "DOM Practice" underlined.
    //Change its color to purple.

let h1 = document.createElement('h1');
h1.append("DOM Practice");
h1.style.textDecoration = "underlined";
h1.style.color = "purple";

body.prepend(h1);

//Question 5:   Create a <p> tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";

body.appendChild(para);


//Keyboard Events
input = document.querySelector('input');
input.addEventListener("keydown", function(){
    console.log("key was pressed.");
})

