function get(ele){
    return document.createElement(ele);
}

function getValueByName(name){
    const ele = document.querySelector(`[name="${name}"]`);
    return ele.value;
}

function classAdd(ele, ...cls){
    for(const cl of cls){
        ele.classList.add(cl);
    }    
}
const priorityList = {"1":"high", "2": "moderate", "3": "low"};
class TaskHTML{
    constructor(title, priority, due, index){
        const container = get("div");
        classAdd(container, "task", priorityList[priority]);

        const titleDiv = get("div");
        classAdd(titleDiv, "title");
        titleDiv.textContent = title;

        const utilDiv = get("div"); 
        const duediv = get("due");
        classAdd(duediv, "due");
        duediv.textContent = due;

        const del = get("i");
        classAdd(del, "del", "material-icons");
        del.setAttribute("data-index", index);
        del.textContent = "delete";

        utilDiv.append(duediv, del);
        container.append(titleDiv, utilDiv);

        this.getHTML = () =>{
            return container;
        }
    }
}

const container = document.querySelector("#container");
function renderTask(taskList){
    container.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Home";
    container.append(h1);
    taskList.forEach(task => {
        const taskObject = task.getTask();
        const taskHtml = new TaskHTML(taskObject.title, taskObject.priority, taskObject.due, taskList.indexOf(task));
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
    }else{
        modalHead.children[1].textContent = title;
    }
    modal.classList.add("modal-open");
}
function modalClose(){
    const modal = document.querySelector(".modal");
            modal.classList.remove("modal-open");
}

export default {modalOpen, modalClose, renderTask, getValueByName}