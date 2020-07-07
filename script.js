const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const todos = JSON.parse(localStorage.getItem("list_todos")) ||[];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {
        const todoElement = document.createElement("li");
        const todoText = document.createTextNode(todo);

        const linkElement = document.createElement("img");
        linkElement.setAttribute("src", "https://image.flaticon.com/icons/svg/833/833520.svg#");

        const pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
       
        const linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        

        listElement.appendChild(todoElement);
        
    }

}
renderTodos();

function addTodo() {
    const todoText = inputElement.value;

    todos.push (todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo;

inputElement.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("#app button").click();
    }
});

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("list_todos",JSON.stringify(todos));
}
