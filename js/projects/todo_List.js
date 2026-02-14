export default function render(container) {
  // --- Styles ---
  const style = document.createElement("style");
  style.textContent = `
    .todo-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 300px;
    }
    
    .todo-list {
      list-style: none;
      padding: 0;
      width: 100%;
    }

    .todo-list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
    }

    .todo-list li.completed {
      text-decoration: line-through;
      color: gray;
    }

    .delete-btn {
      background: red;
      border: none;
      color: white;
      border-radius: 3px;
      padding: 2px 6px;
      cursor: pointer;
    }
  `;
  document.head.append(style);

  // --- HTML Structure ---
  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");

  const title = document.createElement("h2");
  title.textContent = "Mini To-Do List";

  const todoWrapper = document.createElement("div");
  todoWrapper.classList.add("todo-wrapper");

  const input = document.createElement("input");
  input.classList.add("todo-input");
  input.placeholder = "Enter a task";

  const addButton = document.createElement("button");
  addButton.classList.add( "btn-primary", "btn");
  addButton.textContent = "Add Task";

  const list = document.createElement("ul");
  list.classList.add("todo-list");

  // --- Functions ---
  function addTask(taskText) {
    if (!taskText.trim()) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Complete on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-delete-left");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggling completed
      li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
  }

  // Add button click
  addButton.addEventListener("click", () => addTask(input.value));

  // Enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask(input.value);
  });

  // --- Append Elements ---
  todoWrapper.append(input, addButton, list);
  wrapper.append(title, todoWrapper);
  container.append(wrapper);
}
