let todos = [];

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) {
    alert("Hech narsa kiritilmagan.");
    return;
  }

  todos.push({
    id: Date.now(),
    text,
    isCompleted: false,
  });

  todoInput.value = "";
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.map((todo) => {
    const li = document.createElement("li");
    li.className = todo.isCompleted ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;

    span.addEventListener("click", () => {
      todo.isCompleted = !todo.isCompleted;
      renderTodos();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}
