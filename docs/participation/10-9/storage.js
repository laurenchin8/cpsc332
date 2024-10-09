"use strict";

// function to save task to local storage
function saveTasks(tasks) {
    // here we specified "tasks" as key
    localStorage.set("tasks", JSON.stringify(tasks));
}

// function to load tasks from local storage
function loadTasks() {
    // using "tasks" key to get the tasks
    const tasks = localStorage.getItem("tasks");
    // same as if null return [], else parse
    return tasks ? JSON.parse(tasks) : [];
}

// exports
export {saveTasks, loadTasks};