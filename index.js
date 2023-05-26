const addBtn = document.querySelector("#btn");
const list = document.getElementById("list");

addBtn.addEventListener("click", (e) => {
  // preventRedirect
  e.preventDefault();

  // searchItem
  let name = document.getElementById("name");
  if (name.value === "") {
    return alert("Input data is required!");
  }

  // createItem
  newTodo(name.value, false);

  // resetInput
  name.value = "";
});

function newTodo(text, completed) {
  let todoItem = document.createElement("li");
  let todoText = document.createTextNode(text);

  todoItem.appendChild(todoText);
  todoItem.classList.add("data");

  if (completed) {
    todoItem.classList.add("completed");
  }

  list.appendChild(todoItem);
  todoItem.addEventListener("dblclick", toggle);
}

function toggle() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

function clearCompleted() {
  const listItems = document.getElementsByClassName("completed");

  if (listItems.length === 0) {
    return alert("Data tidak ditemukan!");
  }

  while (listItems.length > 0) {
    listItems.item(0).remove();
  }

  alert("Berhasil dihapus!");
}

function emptyList() {
  const listItems = list.children;

  if (listItems.length === 0) {
    return alert("Data tidak ditemukan!");
  }

  while (listItems.length > 0) {
    listItems.item(0).remove();
  }

  localStorage.setItem("todos", [{}]);

  alert("Berhasil dihapus!");
}

function saveList() {
  let todos = [];

  const items = list.children;

  if (items.length === 0) {
    return alert("Data tidak ditemukan!");
  }

  for (let i = 0; i < items.length; i++) {
    let todo = items.item(i);

    todos.push({
      task: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  alert("Berhasil disimpan!");
}

function loadList() {
  const items = localStorage.getItem("todos");

  if (items !== null) {
    let todos = JSON.parse(items);

    for (let i = 0; i < todos.length; i++) {
      newTodo(todos[i].task, todos[i].completed);
    }
  }
}

loadList();
