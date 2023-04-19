export default class Task {
    constructor(title, description, dueDate, priority) {
       let _title = title;
       let _description = description;
       let _dueDate = dueDate;
       let _priority = priority;
       this.editTitle = function(title) {
           _title = title;
       }
       this.editDescription = function(desc){
            _description = desc;
       }
       this.editDueDate = function(due){
            _dueDate = due;
       }
       this.editPriority = function(prio){
            _priority = prio;
       }
       this.getTask = function() {
           return {
               title: _title, desc: _description, due: _dueDate, priority: _priority
           }
       }
    }
}