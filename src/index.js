import Task from './task'
import Project from './project';
import Note  from './notes';
import DOM from './DOM';


import tasks from '../tasks.json';
import notes from '../notes.json';
import { add } from 'date-fns';






const taskList = []
for(const key in tasks){
    const task = new Task(tasks[key].title,
                            tasks[key].desc,
                            tasks[key].due,
                            tasks[key].priority);
    taskList.push(task);
}

const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
    DOM.modalOpen("Add Task");
    const addTask = document.querySelector("#task-add");
    addTask.addEventListener("click", ()=>{
        const title = DOM.getValueByName("task-title");
        const desc = DOM.getValueByName("task-desc");
        const due = DOM.getValueByName("dueDate");
        const prio = DOM.getValueByName("priority");

        const task = new Task(title, desc, due, prio);
        taskList.push(task);
        DOM.renderTask(taskList);
        deleteEvent();
        DOM.modalClose();
    })
})
const close = document.querySelectorAll("#close");
close.forEach(c => {
    c.addEventListener("click", ()=>{
        DOM.modalClose();
    })
})

DOM.renderTask(taskList);
let deletes = document.querySelectorAll(".del");

function deleteEvent(){
    deletes = document.querySelectorAll(".del");
    deletes.forEach(del => {
        del.addEventListener("click", ()=>{
            deleteTask(del);
        })
})}
function deleteTask(del){
        const index = del.getAttribute("data-index");
        taskList.splice(index, 1);
        DOM.renderTask(taskList);
        deleteEvent();
}
deleteEvent();

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", ()=>{
    DOM.modalOpen("Add Project");
});