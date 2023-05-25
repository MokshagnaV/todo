import Task from "./task";
import Project from "./project";
import Note from "./notes";
import DOM from "./DOM";

import home from "./modules/home";

import tasks from "../tasks.json";
import notes from "../notes.json";
import { add } from "date-fns";

const container = document.querySelector("#container");
let deletes = document.querySelectorAll(".del");

function checkForm() {
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const task = new Task(
      data["task-title"],
      data["task-desc"],
      new Date(data["dueDate"]),
      data["priority"]
    );
    taskList.push(task);
    renderContainer(home.renderHome(taskList));
    DOM.modalClose();
  });
}

function deleteEvent() {
  deletes = document.querySelectorAll(".del");
  deletes.forEach((del) => {
    del.addEventListener("click", () => {
      deleteTask(del);
    });
  });
}
function deleteTask(del) {
  const index = del.getAttribute("data-index");
  taskList.splice(index, 1);
  renderContainer(home.renderHome(taskList));
}
function renderContainer(content) {
  container.innerHTML = "";
  container.append(content);
  deleteEvent();
}

const primItems = document.querySelectorAll(".primary-items");
primItems.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.innerHTML) {
      case "Home":
        renderContainer(home.renderHome(taskList));
        break;
      case "Today":
        renderContainer(home.renderToday(taskList));
        break;
      case "This Month":
        renderContainer(home.renderMonth(taskList));
        break;
      case "This Week":
        renderContainer(home.renderWeek(taskList));
        break;
      default:
        renderContainer(home.renderHome(taskList));
    }
  });
});

const taskList = [];
for (const key in tasks) {
  const task = new Task(
    tasks[key].title,
    tasks[key].desc,
    new Date(tasks[key].due),
    tasks[key].priority
  );
  taskList.push(task);
}
taskList.push(
  new Task("Today is testing task", "Testing the tasks list", new Date(), 3)
);

const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  DOM.modalOpen("Add Task", "addTask");
  checkForm();
});

renderContainer(home.renderHome(taskList));

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", () => {
  DOM.modalOpen("Add Project", addProject);
});

document.querySelector("#modal-close").addEventListener("click", () => {
  DOM.modalClose();
});
