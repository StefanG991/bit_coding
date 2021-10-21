let todos = getSavedTodos();
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-todo").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.elements.todoText.value;
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.todoText.value = "";
});

document.querySelector("#checkbox").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
  console.log(filters.hideCompleted);
});
