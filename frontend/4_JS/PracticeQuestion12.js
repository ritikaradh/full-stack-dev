//Question:     Add the following elements to the container using only JavaScript and the DOM methods.
    //i.    a <p> with red text that says "Hey, I'm red!"
    //ii.   an <h3> with blue text that says "I'm a blue h3!"
    //iii.  a <div> with a black border and pink background color with the following elements inside of it-
                //another <h1> that says "I'm in a div"
                //a <p> that says "ME TOO!"

let body = document.querySelector('body');

//Step 1- Creating html elements i.e., html tags
let para = document.createElement('p');
para.append("Hey, I'm red!");

let h3 = document.createElement('h3');
h3.append("I'm a blue h3!");

let div = document.createElement('div');

let h1InsideDiv = document.createElement('h1');
h1InsideDiv.append("I'm in a div!");

let paraInsideDiv = document.createElement('div');
paraInsideDiv.append("ME TOO!");


//Step 2- Adding the created html elements
body.appendChild(para);
body.prepend(h3);
body.prepend(div);

div.appendChild(h1InsideDiv);
div.appendChild(paraInsideDiv);


//Step 3- Styling the html elements
para.style.color = "red";
h3.style.color = "blue";

//creating a class to manipulate the style of div element.
div.classList="div1";

div.style.backgroundColor = "pink";
div.style.border = "0.1rem solid black"




