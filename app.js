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

addBtn.addEventListener("click", () => {
    
});
