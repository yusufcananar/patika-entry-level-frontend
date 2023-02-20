const addBtn = document.querySelector("#liveToastBtn");
const errorAlert = new bootstrap.Toast(
  document.querySelector("#liveToast.error")
);
const successAlert = new bootstrap.Toast(
  document.querySelector("#liveToast.success")
);
const taskList = document.querySelector("#list");
const taskText = document.querySelector("#task");

const taskCloseBtnClasses = ["btn", "btn-danger", "x-close"];

const newElement = () => {
  clearInput();
  let inputValue = localStorage.getItem("inputValue");

  if (inputValue && inputValue.replace(/\s/g, "").length) {
    // Check if task string is empty or blank spaces
    //Show alert
    successAlert.show();
    //Add new task
    let li = document.createElement("li");
    let span = document.createElement("span");

    let button = document.createElement("button");
    button.classList.add(...taskCloseBtnClasses);
    button.setAttribute("type", "button");
    button.innerHTML = `<span aria-hidden="true">&times;</span>`;

    span.appendChild(document.createTextNode(inputValue));

    li.appendChild(span);
    li.appendChild(button);

    taskList?.appendChild(li);

    completeTask();
  } else {
    //Show alert
    errorAlert.show();
  }

  removeElement();
  isThereAnyTasks();
};

const clearInput = () => {
  localStorage.setItem("inputValue", taskText.value);
  taskText.value = "";
};

const removeElement = () => {
  let closeBtns = document.querySelectorAll(".x-close");
  for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function () {
      this.parentElement.remove();
      isThereAnyTasks();
    });
  }
};

const completeTask = () => {
  let tasks = document.querySelectorAll("#list > li");

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === "no-task") {
      continue;
    }

    if (!tasks[i].getAttribute("listener")) {
    tasks[i].addEventListener("click", function () {
      this.classList.contains("task-done-color")
        ? this.classList.toggle("task-done-color")
        : this.classList.add("task-done-color");
      this.setAttribute("listener", "true");
      });

  }
  }
};

const isThereAnyTasks = () => {
  let tasks = document.querySelectorAll("#list > li");
  let nonTask = document.querySelector("#list #no-task");
  console.log(nonTask);
  if (tasks.length > 1) {
    nonTask?.classList.add("hidden");
  } else if (tasks.length === 1) {
    nonTask?.classList.remove("hidden");
  }
};

taskText?.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    addBtn?.click();
  }
});

removeElement();
completeTask();
