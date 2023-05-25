import DOM from "../DOM";
import { isThisMonth, isThisWeek, isToday } from "date-fns";

const Banner = (function () {
  const cont = DOM.get("div");
  DOM.classAdd(cont, "d-flex", "align-items-center");
  const label = DOM.get("span");
  DOM.classAdd(label, "badge", "text-bg-info");
  const h1 = DOM.get("h1");
  DOM.classAdd(h1, "title");
  return {
    get: (title, count) => {
      h1.textContent = title;
      label.textContent = count;
      cont.append(h1, label);
      return cont;
    },
  };
})();

function renderHome(taskList) {
  const container = DOM.get("div");

  container.append(
    Banner.get("Home", taskList.length),
    DOM.renderTask(taskList)
  );
  return container;
}

function renderToday(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if (isToday(task.getTask().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = "No Tasks";
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }
  container.append(Banner.get("Today's tasks", tasks.length), content);
  return container;
}
function renderMonth(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if (isThisMonth(task.getTask().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = "No Tasks";
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }

  container.append(Banner.get("This month's tasks", tasks.length), content);
  return container;
}
function renderWeek(taskList) {
  const tasks = [];
  taskList.forEach((task) => {
    if (isThisWeek(task.getTask().due)) {
      tasks.push(task);
    }
  });

  const container = DOM.get("div");

  let content = "No Tasks";
  if (tasks.length != 0) {
    content = DOM.renderTask(tasks);
  }
  container.append(Banner.get("This Week's tasks", tasks.length), content);
  return container;
}

export default { renderHome, renderToday, renderMonth, renderWeek };
