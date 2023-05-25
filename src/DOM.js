const priorityList = { 1: "danger", 2: "warning", 3: "success" };
const modalBodies = {
  addTask: (obj) => {
    const { title } = obj;
    return ` 
    <div class="myModal-content">
      <div class="myModal-header p-3">
        <h4 id="myModal-title">${title}</h4>
        <button class="btn btn-sm btn-danger" id="modal-close">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="myModal-body p-3">
        <form id="task-form">
          <div class="form-group m-2">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" name="task-title" id="title" required />
          </div>
          <div class="form-group m-2">
            <label for="desc" class="form-label">Description</label>
            <textarea class="form-control" name="task-desc" id="desc" required></textarea>
          </div>
          <div class="form-group m-2">
            <label for="dueDate" class="form-label">Due</label>
            <input type="date" class="form-control" id="dueDate" name="dueDate" required />
          </div>
          <div class="form-group m-2">
            <label for="priority" class="form-label d-block">Priority</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="high"
                value="1"
                required
              />
              <label class="form-check-label" for="high">High</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="moderate"
                value="2"
                required
              />
              <label class="form-check-label" for="moderate">Moderate</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="low"
                value="3"
                required
              />
              <label class="form-check-label" for="low">Low</label>
            </div>
          </div>
          <input class="btn btn-primary m-2" type="submit" value="Submit" />
        </form>
      </div>
    </div>`;
  },
  addProject: "",
  editTask: (obj) => {
    const { title, desc, due, priority } = obj;
    return `
    <div class="task-card">
      <div class="header">
        <span class="material-icons float-end" id="modal-close">close</span>
      </div>
      <form class="form-floating" id="edit-task">
        <div class="card-header">
          <span class="material-icons">task</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="task-title"
              name="task-title"
              placeholder="Title"
              value="${title}"
            />
            <label for="task-title">Title</label>
          </div>
        </div>
        <div class="card-body">
          <div class="form-floating">
            <textarea
              class="form-control"
              name="task-desc"
              id="task-desc"
              placeholder="Description"
              style="height: 100px"
            >${desc}</textarea>
            <label for="task-desc">Task Description</label>
          </div>
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              value="${due}"
              name="task-due"
              placeholder="date"
              id="task-due"
            />
            <label for="task-due">Due Date</label>
          </div>
          <div class="form-floating">
            <select class="form-select" id="priority" name="priority" placeholder="priority">
              <option id="high" value="1" ${
                priority === 1 ? "selected" : ""
              }>High</option>
              <option id="moderate" value="2" ${
                priority === 2 ? "selected" : ""
              }>Moderate</option>
              <option id="low" value="3" ${
                priority === 3 ? "selected" : ""
              }>Low</option>
            </select>
            <label for="priority">Priority of the task</label>
          </div>
          <input class="btn btn-outline-success" type="submit" value="Submit">
        </div>
      </form>
    </div>
  `;
  },
  showTask: (obj) => {
    let { title, desc, due, priority } = obj;
    priority = priorityList[priority];
    return `<div class="card border-${priority} mb-3" style="max-width: 18rem;">
    <div class="card-header"> <span class="material-icons" id="modal-close">close</span> </div>
    <div class="card-body text-${priority}">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${desc}</p>
    </div>
    <div class="card-footer text-muted">
    <strong>Due by </strong> ${due}
    </div>
  </div>`;
  },
};

function get(ele) {
  return document.createElement(ele);
}

function getValueByName(name) {
  const ele = document.querySelector(`[name="${name}"]`);
  return ele.value;
}

function classAdd(ele, ...cls) {
  for (const cl of cls) {
    ele.classList.add(cl);
  }
}

class TaskHTML {
  constructor(title, priority, due, index) {
    const container = get("div");
    classAdd(container, "task", "alert", `alert-${priorityList[priority]}`);
    container.setAttribute("data-index", index);

    const titleDiv = get("span");
    classAdd(titleDiv, "title");
    titleDiv.textContent = title;

    const utilDiv = get("span");
    classAdd(utilDiv, "task-utils");
    const duediv = get("span");
    classAdd(duediv, "due");
    duediv.textContent = due.toDateString();

    const del = get("i");
    classAdd(del, "del", "material-icons", "mx-2");
    del.setAttribute("data-index", index);
    del.textContent = "delete";

    const edit = get("span");
    classAdd(edit, "edit", "material-icons");
    edit.setAttribute("data-index", index);
    edit.textContent = "edit";

    utilDiv.append(duediv, del, edit);
    container.append(titleDiv, utilDiv);

    this.getHTML = () => {
      return container;
    };
  }
}

function renderTask(taskList) {
  const container = get("div");
  classAdd(container, "tasks");

  taskList.forEach((task) => {
    const taskObject = task.get();
    const taskHtml = new TaskHTML(
      taskObject.title,
      taskObject.priority,
      taskObject.due,
      taskList.indexOf(task)
    );
    container.append(taskHtml.getHTML());
  });

  return container;
}

function modalOpen(title, purpose, task) {
  const modal = get("div");
  classAdd(modal, "myModal");
  console.log(title, purpose, task)
  switch (purpose) {
    case "editTask":
      modal.innerHTML = modalBodies[purpose]({
        title: task.title,
        desc: task.desc,
        due: task.due.toISOString().split("").slice(0, 10).join(""),
        priority: task.priority,
      });
      break;
    case "addTask":
      modal.innerHTML = modalBodies[purpose]({ title });
      break;
    case "showTask":
      modal.innerHTML = modalBodies[purpose]({
        title: task.title,
        desc: task.desc,
        due: task.due.toDateString(),
        priority: task.priority,
      });
      break;
    default:
      break;
  }
  document.body.append(modal);
}

function modalClose() {
  const modals = document.querySelectorAll(".myModal");
  modals.forEach((modal) => (modal.outerHTML = ""));
}

export default {
  get,
  classAdd,
  modalOpen,
  modalClose,
  renderTask,
  getValueByName,
};
