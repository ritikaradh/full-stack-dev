let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

function removeTask(){
    let parent = this.parentElement;
    parent.remove();
}

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

    delBtn.addEventListener("click", removeTask);
}

//Insertion of a task
btn.addEventListener("click", addTask);


//Deletion of a task
let deleteBtn = document.querySelectorAll(".delBtn");

for (btn of deleteBtn){
    btn.addEventListener("click", removeTask);
}

