import DOM from "../DOM";
import home from "./home";
import Task from "../task";
import { renderContainer } from "..";

function projectItem(title) {
  return `<span class="item-icon material-icons"> checklist </span><span>${title}</span>`;
}

function renderSidebar(list) {
  const proSide = document.querySelector(".projects-list");
  proSide.innerHTML = ""; 
  list.forEach((pro) => {
    const div = DOM.get("div");
    DOM.classAdd(div, "item", "project-item");
    div.innerHTML = projectItem(pro.title);
    proSide.append(div)
  });
}

function renderProject(project) {
  const addButton = document.querySelector("#addTask");
  addButton.setAttribute("data-pro-name", project.title);
  const container = DOM.get("div");
  const tasks = project.showAllTodos();
  const taskList = Object.values(tasks);
  container.append(
    home.Banner.get("Tasks", taskList.length),
    DOM.renderTask(taskList)
  );
  
  return container;
}

function addTask(projectTitle, projectList) {
  const pro = projectList.find(pro=>pro.title === projectTitle);
  const taskForm = document.getElementById("task-form");
  console.log(taskForm)
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const task = new Task(
      data["task-title"],
      data["task-desc"],
      new Date(data["dueDate"]),
      data["priority"]
    );
    pro.addTodo(task);
    renderContainer(renderProject(pro));
    DOM.modalClose();
  });
}

export default {
  renderSidebar,
  renderProject,
  addTask
}
