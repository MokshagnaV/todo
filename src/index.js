import Task from './task'
import Project from './project';
import Note  from './notes';
import DOM from './DOM';


import tasks from '../tasks.json';
import notes from '../notes.json';

const taskList = []
for(const key in tasks){
    const task = new Task(tasks[key].title,
                            tasks[key].desc,
                            tasks[key].due,
                            tasks[key].priority);
    taskList.push(task);
}

// console.log(taskList);

const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
    DOM.modalOpen("Add Task");
})
const close = document.querySelectorAll("#close");
close.forEach(c => {
    c.addEventListener("click", ()=>{
        DOM.modalClose();
    })
})

DOM.renderTask(taskList);