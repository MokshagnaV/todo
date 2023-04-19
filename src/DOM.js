function get(ele){
    return document.createElement(ele);
}
function classAdd(ele, cls){
    ele.classList.add(cls);
}
const priorityList = {"1":"high", "2": "moderate", "3": "low"};
class TaskHTML{
    constructor(title, priority, due){
        const container = get("div");
        classAdd(container, "task");
        classAdd(container, priorityList[priority]);

        const titleDiv = get("div");
        classAdd(titleDiv, "title");
        titleDiv.textContent = title;

        const duediv = get("due");
        classAdd(duediv, "due");
        duediv.textContent = due;

        container.append(titleDiv, duediv);

        this.getHTML = () =>{
            return container;
        }
    }
}

const container = document.querySelector("#container");
function renderTask(taskList){
    taskList.forEach(task => {
        const taskObject = task.getTask();
        const taskHtml = new TaskHTML(taskObject.title, taskObject.priority, taskObject.due);
        container.append(taskHtml.getHTML());
    });
}


function modalOpen(title){
    const modal = document.querySelector(".modal");
    const modalHead = document.querySelector(".modal-header");
    if(modalHead.children.length < 2){
        const head = document.createElement("h1");
        head.textContent = title;
        modalHead.appendChild(head);
    }
    modal.classList.add("modal-open");
}
function modalClose(){
    const modal = document.querySelector(".modal");
            modal.classList.remove("modal-open");
}

export default {modalOpen, modalClose, renderTask}