const inputElement = document.getElementById("input");
const submitButton = document.getElementById("submit");
const outputElement = document.getElementById("output");

// log the value of the input on every change

inputElement.addEventListener("change", function() {
    console.log(inputElement.value);
})

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“



/**document.querySelector("#submit").addEventListener("click", function (event){
    event.preventDefault()
    outputElement.textContent = "Der Button wurde geklickt!";
});  **/

// log the message „500px erreicht“, when the user scrolls more than 500px
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        console.log("500px erreicht");
    }
});


// add the value of the input to a bullet point list in the #output element
// every time the user clicks on the button #submit
// and empty the input value afterwards
// add a delete button to the bullet point list items
// so the user can delete every single list item



submitButton.addEventListener("click", function(event) {
    event.preventDefault();


    let taskInput = inputElement.value;
    if (taskInput.trim() === "") {
        return;
    }
    

    let todoList = document.getElementById("todoList");
    if (!todoList) {
        todoList = document.createElement("ul");
        todoList.id = "todoList";
        outputElement.appendChild(todoList);
    }

    let newListItem = document.createElement("li");
    newListItem.innerText = taskInput;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        newListItem.remove();
    });
    newListItem.appendChild(deleteButton);

    todoList.appendChild(newListItem);

    inputElement.value = "";
})

// BEWARE THE PREVENT DEFAULT ON THE BUTTON