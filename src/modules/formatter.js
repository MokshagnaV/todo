import Task from "../task";

function toLocalStorage(dataList, dataType) {
  const res = {};
  res[dataType] = dataList.map((data) => data.get());
  if (dataType === "tasks") localStorage.setItem("todos", JSON.stringify(res));
  else if (dataType === "projects")
    localStorage.setItem("projects", JSON.stringify(res));
}

function addTaskToLocalStorage(task) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks.push(task.get());
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function delTaskFromLocalStorage(index) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function editTaskFromLocalStorage(task, index) {
  const localTask = JSON.parse(localStorage.getItem("todos"));
  localTask.tasks[index] = task.get();
  localStorage.setItem("todos", JSON.stringify(localTask));
}

function taskJsonToObj(jsonTask) {
  return jsonTask.map((task) => {
    return new Task(task.title, task.desc, new Date(task.due), task.priority);
  });
}

function sortTasksBy(taskList, sortBy, order) {
  const res = [...taskList];
  res.sort((task1, task2) => {
    const [a, b] = [task1.get()[sortBy], task2.get()[sortBy]];
    if (order) {
      return a === b ? 0 : a < b ? -1 : 1;
    } else {
      return a === b ? 0 : a < b ? 1 : -1;
    }
  });
  return res;
}

export {
  toLocalStorage,
  addTaskToLocalStorage,
  taskJsonToObj,
  delTaskFromLocalStorage,
  editTaskFromLocalStorage,
  sortTasksBy,
};
