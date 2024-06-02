let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

function addTask(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList = "delBtn";

    item.appendChild(delBtn);
    ul.appendChild(item);

    console.log(input.value);
    input.value = "";
}

//Insertion of a task
btn.addEventListener("click", addTask);

//Deletion of a task
ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
    }
});

