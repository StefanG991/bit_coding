function getSavedTodos() {
  let JSONtodos = localStorage.getItem("todos");
  if (JSONtodos) {
    return JSON.parse(JSONtodos);
  } else {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos(todos, filters) {
  document.querySelector("#todos").innerHTML = "";
  filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  if (filters.hideCompleted) {
    filteredTodos = filteredTodos.filter((todo) => todo.completed == false);
  }

  filteredTodos.forEach((todo) => {
    let p = generateTodoDOM(todos, filters, todo);
    document.querySelector("#todos").appendChild(p);
  });
}
function generateTodoDOM(todos, filters, todo) {
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = todo.completed;
  checkBox.addEventListener("change", function (event) {
    let index = todos.findIndex((e) => {
      return e.id === todo.id;
    });
    todos[index].completed = event.target.checked;
    renderTodos(todos, filters);
    saveTodos(todos);
  });
  let button = document.createElement("button");
  button.textContent = "delete";
  button.addEventListener("click", function () {
    let index = todos.findIndex((e) => {
      return e.id === todo.id;
    });
    todos.splice(index, 1);
    renderTodos(todos, filters);
    saveTodos(todos);
  });
  let p = document.createElement("span");
  p.textContent = todo.text;
  let todoEl = document.createElement("div");
  todoEl.appendChild(checkBox);
  todoEl.appendChild(p);
  todoEl.appendChild(button);
  return todoEl;
}
