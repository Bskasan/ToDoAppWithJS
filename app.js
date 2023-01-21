//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

//global array for todo obj
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//load event vs. DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //get TodoList from localStorage and load to UI
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

//form => submit event vs. button => click event
// form.addEventListener("submit", ()=>{})
addBtn.addEventListener("click", (e) => {
  //prevent form submit
  e.preventDefault();
  //user input control
  if (todoInput.value.trim() === "") {
    alert("Please, enter new todo text!");
    return;
  }
  // else{
  //     alert("continue");
  // }
  //continue func.
  const newTodo = {
    id: new Date().getTime(), //unique id with ms of now
    completed: false, //status
    text: todoInput.value, //userInput
  };

  // insertTodoToDB(newTodo);
  createTodo(newTodo);

  //UPDATE TODO array
  todoList.push(newTodo);
  //localStorage todoList Update
  //localStorage vs. SessionStorage vs. Cookies
  //!!!!!!!!stringify!!!!!!!!!
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //event.target vs. event.currentTarget
  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  //todo item creation
  //alert("item was added");
  //obj. dest. (ES6 => JS'e kazandırılan yapılar??)
  const { id, completed, text } = newTodo;

  //create li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //add class with completed(status)
  completed ? li.classList.add("checked") : "";

  //create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  //append vs. appendChild
  li.append(icon);

  //create item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //create remove icon
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  //append li to ul
  //prepend vs. append
  // todoUl.append(li);
  todoUl.prepend(li);
};

//* Capturing vs Bubbling
todoUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-check")) {
    alert("check clicked");
  } else if (e.target.classList.contains("fa-trash")) {
    alert("remove clicked");
  } else {
    alert("other element clicked");
  }
});
