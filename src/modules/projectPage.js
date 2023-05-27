import DOM from "../DOM";
import home from "./home";

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
  const container = DOM.get("div");
  const tasks = project.showAllTodos();
  const taskList = Object.values(tasks);
  container.append(
    home.Banner.get("Tasks", taskList.length),
    DOM.renderTask(taskList)
  );
  
  return container;
}

export default {
  renderSidebar,
  renderProject
}
