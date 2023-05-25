import Task from "./task";
import Project from "./project";
import Note from "./notes";
import DOM from "./DOM";

import home from "./modules/home";
import {
  addTaskToLocalStorage,
  toLocalStorage,
  taskJsonToObj,
  delTaskFromLocalStorage,
  editTaskFromLocalStorage,
} from "./modules/formatter";

import tasksJSON from "../tasks.json";
import notes from "../notes.json";
import { add } from "date-fns";

const container = document.querySelector("#container");
let deletes = document.querySelectorAll(".del");
let edits = document.querySelectorAll(".edit");
let tasks = document.querySelectorAll(".task");
let modalClose = document.querySelectorAll("#modal-close");

function renderContainer(content) {
  container.innerHTML = "";
  container.append(content);
  deleteEvent();
  editEvent();
  showTaskEvent();
}

const primItems = document.querySelectorAll(".primary-items");
primItems.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.childNodes[2].textContent.trim()) {
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

function addTaskForm() {
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
    addTaskToLocalStorage(task);
    renderContainer(home.renderHome(taskList));
    DOM.modalClose();
  });
}

function editTaskForm(task, index) {
  const taskForm = document.querySelector("#edit-task");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    task.editTitle(data["task-title"]);
    task.editDescription(data["task-desc"]);
    task.editDueDate(new Date(data["task-due"]));
    task.editPriority(data["priority"]);
    renderContainer(home.renderHome(taskList));
    editTaskFromLocalStorage(task, index);
    DOM.modalClose();
  });
}

function closeEvent() {
  modalClose = document.querySelectorAll("#modal-close");
  modalClose.forEach((modal) =>
    modal.addEventListener("click", () => {
      DOM.modalClose();
    })
  );
}

function deleteEvent() {
  deletes = document.querySelectorAll(".del");
  deletes.forEach((del) => {
    del.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = del.getAttribute("data-index");
      deleteTask(index);
    });
  });
}
function deleteTask(index) {
  taskList.splice(index, 1);
  delTaskFromLocalStorage(index);
  renderContainer(home.renderHome(taskList));
}

function editEvent() {
  edits = document.querySelectorAll(".edit");
  edits.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = edit.getAttribute("data-index");
      editTask(taskList[index], index);
    });
  });
}
function editTask(task, index) {
  DOM.modalOpen(task.get().title, "editTask", task.get());
  closeEvent();
  editTaskForm(task, index);
}

function showTaskEvent() {
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      const index = task.getAttribute("data-index");
      DOM.modalOpen(taskList[index].get().title, "showTask", taskList[index].get())
      closeEvent();
    });
  });
}

function showTask() {}

let taskList = [];
if (localStorage.getItem("todos")) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  taskList.push(...localTask.tasks);
  taskList = taskJsonToObj(taskList);
} else {
  for (const key in tasksJSON) {
    const task = new Task(
      tasksJSON[key].title,
      tasksJSON[key].desc,
      new Date(tasksJSON[key].due),
      tasksJSON[key].priority
    );
    taskList.push(task);
  }
  toLocalStorage(taskList, "tasks");
}
// taskList.push(
//   new Task("Today is testing task", "Testing the tasks list", new Date(), 3)
// );

const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  DOM.modalOpen("Add Task", "addTask");
  closeEvent();
  addTaskForm();
});

renderContainer(home.renderHome(taskList));

// const addProject = document.querySelector("#add-project");
// addProject.addEventListener("click", () => {
//   DOM.modalOpen("Add Project", addProject);
// });
