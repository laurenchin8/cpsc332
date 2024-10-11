"use strict";

// for running this on local web server
// refer to this website: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
// run command python -m http.server 9001
// url is localhost:9001
// or whatever port number you want can replace 9001 

// import modules
import { addTask, clearInput } from "./todo.js";
import { saveTasks, loadTasks } from "./storage.js";

// alternately could do this
//import * as storage from "./storage.js"; // would call as storage.saveTasks()

// set up DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// load tasks from local storage
const tasks = loadTasks();
tasks.forEach(task => {
    addTask(task, taskList);
});

// add event listener for new task
addTaskButton.addEventListener("click", ()=>{
    const task = newTaskInput.value.trim();

    if (task) {
        addTask(task, taskList);
        tasks.push(task); //adds new task to end of tasks
        saveTasks(tasks); //saves the tasks to local storage
        clearInput(newTaskInput); //clear input box
    }
});