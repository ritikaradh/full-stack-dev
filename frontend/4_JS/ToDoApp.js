// Todo App:
//     i.      list-   to show all todos.
//     ii.     add-    to add a todo.
//     iii.    delete- to delete a task.
//     iv.     quit-   to exit the todo.

let todo = [];
let quit = false;

do{
    let request = prompt("Enter your request: ");

    if(request == "quit"){
        console.log("Quiting the App");
        quit = true;
    }

    else if(request == "list"){
        for(task of todo){
            console.log(task);
        }
    }

    else if(request == "add"){
        let task = prompt("Enter a Task: ");
        todo.push(task);
        console.log("Task added successfully.")
    }

    else if(request == "delete"){
        let task = prompt("Enter a Task to be Deleted: ");
        let index = todo.indexOf(task);
        todo.splice(index, 1);
        console.log("Task deleted successfully.")
    }
}while(quit != true);