const form = document.querySelector('form');
let input = document.querySelector('input');

//creating event listener for form object
form.addEventListener("submit", function(event){
    console.dir(input);
    alert("form submitted");
    event.preventDefault();
    console.log(input.value);
});