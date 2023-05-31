import Task from "./task";
import Project from "./project";
import Note from "./notes";
import DOM from "./DOM";

import home from "./modules/home";
import * as formatter from "./modules/formatter";
import projectPage from "./modules/projectPage";

import tasksJSON from "../tasks.json";
import notes from "../notes.json";
import { add } from "date-fns";

const container = document.querySelector("#container");
let deletes = document.querySelectorAll(".del");
let edits = document.querySelectorAll(".edit");
let tasks = document.querySelectorAll(".task");
let projects = document.querySelector(".project-item");
let sort = document.querySelector("#sort-by");
let order = document.querySelector(".order-by");
let modalClose = document.querySelectorAll("#modal-close");

let orderDown = true;
let sortBy = "0";

function renderContainer(content) {
  container.innerHTML = "";
  container.append(content);
  deleteEvent();
  editEvent();
  showTaskEvent();
  sortEvent();
  orderEvent();
  projectsEvent();
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

function showTaskEvent() {
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      showTask(task.getAttribute("data-index"));
    });
  });
}

function sortEvent() {
  sort = document.querySelector("#sort-by");
  sort.addEventListener("change", () => {
    sortBy = sort.value;
    sortTasks(sort.value);
  });
}

function orderEvent() {
  order = document.querySelector(".order-by");
  order.addEventListener("click", () => {
    orderTasks(order);
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

function projectsEvent() {
  try {
    projects = document.querySelectorAll(".project-item");
    projects.forEach((project) => {
      project.addEventListener("click", (e) => {
        const projectTitle = project.childNodes[1].textContent;
        renderContainer(
          projectPage.renderProject(
            projectsList.find((pro) => pro.title === projectTitle)
          )
        );
      });
    });
  } catch (ex) {}
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
    formatter.addTaskToLocalStorage(task);
    renderContainer(home.renderHome(taskList));
    DOM.modalClose();
  });
}

function addProjectForm() {
  const projectForm = document.getElementById("add-project-form");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    projectsList.push(new Project(data["project-title"]));
    DOM.modalClose();
    projectPage.renderSidebar(projectsList);
    projectsEvent();
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
    formatter.editTaskFromLocalStorage(task, index);
    DOM.modalClose();
  });
}

function deleteTask(index) {
  taskList.splice(index, 1);
  formatter.delTaskFromLocalStorage(index);
  renderContainer(home.renderHome(taskList));
}

function editTask(task, index) {
  DOM.modalOpen(task.get().title, "editTask", task.get());
  closeEvent();
  editTaskForm(task, index);
}

function showTask(index) {
  DOM.modalOpen(taskList[index].get().title, "showTask", taskList[index].get());
  closeEvent();
}

function sortTasks(sortBy) {
  const tasksContainer = document.querySelector(".tasks");
  tasksContainer.innerHTML = "";
  tasksContainer.append(
    DOM.renderTask(formatter.sortTasksBy(taskList, sortBy, orderDown))
  );
}

function orderTasks(order) {
  if (order.classList.contains("order-down")) {
    orderDown = true;
    order.classList.remove("order-down");
  } else {
    orderDown = false;
    order.classList.add("order-down");
  }
  const tasksContainer = document.querySelector(".tasks");
  tasksContainer.innerHTML = "";
  tasksContainer.append(
    DOM.renderTask(formatter.sortTasksBy(taskList, sortBy, orderDown))
  );
}

let taskList = [];
if (localStorage.getItem("todos")) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  taskList.push(...localTask.tasks);
  taskList = formatter.taskJsonToObj(taskList);
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
  formatter.toLocalStorage(taskList, "tasks");
}
// taskList.push(
//   new Task("Today is testing task", "Testing the tasks list", new Date(), 3)
// );

let projectsList = [];
const test = new Project("Test1");
test.addTodo(new Task("p1", "uhefh uesfh u erfus ", new Date(), 1));
projectsList.push(test);
const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  DOM.modalOpen("Add Task", "addTask");
  closeEvent();
  if (addTask.getAttribute("data-pro-name")) {
    projectPage.addTask(addTask.getAttribute("data-pro-name"), projectsList);
  } else {
    addTaskForm();
  }
});

renderContainer(home.renderHome(taskList));
projectPage.renderSidebar(projectsList);
projectsEvent();

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", () => {
  DOM.modalOpen("Add Project", "addProject");
  closeEvent();
  addProjectForm();
});

export { renderContainer };
