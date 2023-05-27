import {compareAsc, compareDesc } from 'date-fns';

export default class Project{
    constructor(title){
        this.title = title;
        const _todos = {};

        this.addTodo = function(todo){
            _todos[`${todo.get().title}`]= todo;
        }

        this.showAllTodos = function() { 
            return _todos;
        }

        this.delTodo = function(todo){
            delete _todos[todo];
        }
        //if order is true => Ascending order else => Descending order
        this.sortByPriority = function(order){ 
            let result;
            if(order){
                result = Object.keys(_todos).sort((a,b)=>_todos[a].priority - _todos[b].priority)
            }else{
                result = Object.keys(_todos).sort((a,b)=>_todos[b].priority - _todos[a].priority)
            }
            return result;
        }
        this.sortByDueDate = function(order){
            let result;
            if(order){
                result = Object.keys(_todos).sort((a,b) => compareAsc(_todos[a].due, _todos[b].due));
            }else{
                result = Object.keys(_todos).sort((a,b) => compareDesc(_todos[a].due, _todos[b].due));
            }
            return result;
        }
    }

    
}