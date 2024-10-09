"use strict";

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

// add event listener for new task
addTaskButton.addEventListener("click", ()=>{
    const task = newTaskInput.value.trim();
    tasks.push(task); //adds new task to end of tasks
    saveTasks(tasks); //saves the tasks to local storage
    clearInput(newTaskInput); //clear input box
});