import DOM from "../DOM";
import { isThisMonth, isThisWeek, isToday } from "date-fns";

function handleAdd() {
  const addButton = document.querySelector("#addTask");
  addButton.removeAttribute("data-pro-name");
}

function noTasks() {
  const res = DOM.get("div");
  res.innerHTML =
    '<div class="alert alert-primary" role="alert"> No Tasks! </div>';
  return res;
}

const Banner = (function () {
  const cont = DOM.get("div");
  cont.setAttribute("id", "main-content-head");
  const label = DOM.get("span");
  DOM.classAdd(label, "badge", "bg-info", "text-dark");
  const h1 = DOM.get("h1");
  DOM.classAdd(h1, "title");

  const sort = DOM.get("div");
  DOM.classAdd(sort, "d-flex", "align-items-center", "g-2");
  sort.innerHTML = `<div class="form-floating">
  <select class="form-select" name="sort-by" id="sort-by">
    <option value="0">Select</option>
    <option value="priority">Priority</option>
    <option value="due">Due date</option>
    <option value="title">Title</option>
  </select>
  <label for="sort-by">Sort by</label>
</div>`;
  const order = DOM.get("button");
  order.setAttribute("title", "Order By");
  DOM.classAdd(order, "btn", "btn-light", "mx-2", "order-by");
  order.innerHTML = `<span class="material-icons">
  filter_list
  </span>
  `;
  sort.append(order);
  const leftPart = DOM.get("div");
  DOM.classAdd(leftPart, "d-flex", "align-items-center");
  return {
    get: (title, count) => {
      h1.textContent = title;
      label.textContent = count;
      leftPart.append(h1, label);
      cont.append(leftPart, sort);
      return cont;
    },
  };
})();

function renderHome(taskList) {
  const container = DOM.get("div");
  handleAdd();
  container.append(
    Banner.get("Home", taskList.length),
    DOM.renderTask(taskList)
  );
  return container;
}

function renderToday(taskList) {
  handleAdd();
  const tasks = [];
  taskList.forEach((task) => {
    if (isToday(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }
  container.append(Banner.get("Today's tasks", tasks.length), content);
  return container;
}

function renderMonth(taskList) {
  handleAdd();
  const tasks = [];
  taskList.forEach((task) => {
    if (isThisMonth(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }

  container.append(Banner.get("This month's tasks", tasks.length), content);
  return container;
}

function renderWeek(taskList) {
  handleAdd();
  const tasks = [];
  taskList.forEach((task) => {
    if (isThisWeek(task.get().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = noTasks();
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }
  container.append(Banner.get("This Week's tasks", tasks.length), content);
  return container;
}

export default { renderHome, renderToday, renderMonth, renderWeek, Banner };
