let container = document.querySelector(".container");
let addButton = document.querySelector(".adding_button");
let plus = document.querySelector(".plus");
let addText = document.querySelector(".addText");
let inputDiv = document.querySelector(".input");
let inputField = document.querySelector(".item");
let taskList = document.querySelector(".task-list");
let sort = document.querySelector(".sort");
let hover_sort = document.querySelector(".hover-sort");
let reverse = document.querySelector(".reverse");
let hover_reverse = document.querySelector(".reverse-hover");
let sort_btn = document.querySelector(".sort-btn");

document.querySelector(".x").addEventListener("click", () => {
  inputDiv.classList.add("hidden");
});

plus.addEventListener("click", () => {
  if (inputDiv.classList.contains("hidden")) {
    inputDiv.classList.remove("hidden");
    inputField.focus();
    return;
  }
});

addText.addEventListener("click", () => {
  let taskText = inputField.value.trim();
  if (taskText === "") return;

  if (taskList.classList.contains("hidden")) {
    taskList.classList.remove("hidden");
  }

  let task = document.createElement("div");
  task.classList.add("task");

  let span = document.createElement("span");
  span.textContent = taskText;

  let deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.classList.add("x");

  let img = document.createElement("img");
  img.src = "./xbutton.svg";
  img.alt = "xbutton";

  deleteButton.appendChild(img);
  deleteButton.addEventListener("click", function () {
    task.remove();

    if (taskList.children.length === 0) {
      taskList.classList.add("hidden");
    }
  });

  task.appendChild(span);
  task.appendChild(deleteButton);

  taskList.appendChild(task);

  inputField.value = "";
  inputDiv.classList.add("hidden");
});

let isSortedAsc = true;

sort_btn.addEventListener("mouseover", () => {
  if (isSortedAsc) {
    sort.classList.add("hidden");
    hover_sort.classList.remove("hidden");
  } else {
    reverse.classList.add("hidden");
    hover_reverse.classList.remove("hidden");
  }
});

sort_btn.addEventListener("mouseout", () => {
  if (isSortedAsc) {
    sort.classList.remove("hidden");
    hover_sort.classList.add("hidden");
  } else {
    reverse.classList.remove("hidden");
    hover_reverse.classList.add("hidden");
  }
});

sort_btn.addEventListener("click", () => {
  let tasksArray = Array.from(taskList.children);

  sort.classList.add("hidden");
  hover_sort.classList.add("hidden");
  reverse.classList.add("hidden");
  hover_reverse.classList.add("hidden");

  if (isSortedAsc) {
    tasksArray.sort((a, b) =>
      a.querySelector("span").textContent.localeCompare(b.querySelector("span").textContent)
    );
    reverse.classList.remove("hidden"); 
  } else {
    tasksArray.sort((a, b) =>
      b.querySelector("span").textContent.localeCompare(a.querySelector("span").textContent)
    );
    sort.classList.remove("hidden"); 
  }

  tasksArray.forEach((task) => taskList.appendChild(task));

  isSortedAsc = !isSortedAsc;
});
