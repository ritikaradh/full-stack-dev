const body = document.querySelector('body');

//creating html elements
let h1 = document.createElement('h1');
let btn = document.createElement('button');
let div = document.createElement('div');
let para = document.createElement('p');

//manipulating html elements
h1.append("Generate a random color");
btn.append("Generate Color");
para.append("This is your new color");

//adding html elements to body
body.prepend(div);
div.appendChild(para);
body.prepend(btn);
body.prepend(h1);

//add styling
div.classList.add('box');

//function to get random values of rgb (0-255)
function getRandomColor(){
    let redValue = Math.floor((Math.random() * 255));
    let greenValue = Math.floor(( Math.random() * 255));
    let blueValue = Math.floor((Math.random() * 255));

    let randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    return randomColor;
}

//function to set random color to div
function setRandomColor(){
    let color = getRandomColor();
    div.style.backgroundColor = color;
    h1.textContent = color;
    console.log(`color changed to ${color}`)
}

//adding event listener for btn
btn.addEventListener("click", setRandomColor);

//using 'this' for single event listener on multiple objects.
function hoverOnElement(){
    let color = getRandomColor();
    this.style.backgroundColor = color;
}

//using the same callback for various html elements
h1.addEventListener("click", hoverOnElement);
para.addEventListener("click", hoverOnElement);
btn.addEventListener("click", hoverOnElement);


//Keyboard Events

//Listening dbl click event
btn.addEventListener("dblclick", function(event){
    console.dir(event);
})

