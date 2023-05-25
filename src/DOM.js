const priorityList = { 1: "danger", 2: "warning", 3: "success" };
const modalBodies = {
  addTask: `<form id="task-form">
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
  </form>`,
  addProject: "",
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

    utilDiv.append(duediv, del);
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
    const taskObject = task.getTask();
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

function modalOpen(title, purpose) {
  const modalTitle = document.querySelector("#myModal-title");
  modalTitle.textContent = title;
  const modalBody = document.querySelector(".myModal-body");
  modalBody.innerHTML = modalBodies[purpose];

  const modal = document.querySelector(".myModal");
  modal.classList.remove("hidden");
}
function modalClose() {
  const modal = document.querySelector(".myModal");
  modal.classList.add("hidden");
}

export default {
  get,
  classAdd,
  modalOpen,
  modalClose,
  renderTask,
  getValueByName,
};
