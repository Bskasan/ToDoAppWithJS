//* Elements - DOM Catching
//? Fastest one, if there is a 'id' you should use getElementById.
const todoInput = document.getElementById("input-value");
const addBtn = document.querySelector("#add-btn");
const todoUl = document.querySelector("#list");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//? Load event vs. DomContentLoaded (Interview Question)
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //* get TodoList from localStorage and load to UI
};

//* form => submit event
//! Alternative Way
//! form.addEventListener("submit", ()=>{});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please, enter new todo text!");
    return;
  }
  //* alert("continue");
  const newTodo = {
    id : new Date().getTime , //* Unique id with ms of now
    completed : false, //* Status
    text : todoInput.value, //* User Input

  }
});
