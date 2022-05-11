const eleTodos = document.querySelector(".todos");
let todos = [
  { id: "1", content: "weak up" },
  { id: "2", content: "make the bed" },
];
let input;

renderTodos(todos);

function renderTodos(todos) {
  if (todos.length === 0) addNoItem();
  else {
    eleTodos.innerHTML = "";
    for (let todo of todos) {
      const todoItem = document.createElement("li");
      todoItem.innerHTML = todo.content;
      todoItem.id = todo.id;
      todoItem.classList.add("todo-item");
      todoItem.onclick = () => {
        removeTodoItem(todoItem.id);
      };
      eleTodos.appendChild(todoItem);
    }
  }
}

function addNoItem() {
  const noItem = document.createElement("li");
  noItem.innerHTML = "No todo left";
  noItem.classList.add("no-todo-item");
  eleTodos.innerHTML = "";
  eleTodos.appendChild(noItem);
}

function addTodoItem(e) {
  e.preventDefault();
  const id = Math.random().toString();
  if (input) {
    const newTodos = [
      ...todos,
      {
        id,
        content: input,
      },
    ];
    todos = newTodos;
    input = "";
    document.querySelector("#input").value = "";
    renderTodos(todos);
  }
}

function removeTodoItem(id) {
  const newTodos = todos.filter((todo) => todo.id !== id);
  todos = newTodos;
  renderTodos(todos);
}

function getValue() {
  const eleInput = document.querySelector("#input");
  input = eleInput.value;
}
