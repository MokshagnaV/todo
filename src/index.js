import Task from './task'
import Project from './project';
import Note  from './notes';

import tasks from '../tasks.json';
import notes from '../notes.json';
const notesList = [];

for(const key in notes){
    const note = new Note(notes[key].title, notes[key].note);
    notesList.push(note);
}

const container = document.querySelector("#container");
