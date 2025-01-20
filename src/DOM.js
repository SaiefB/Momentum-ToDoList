// DOM.js

//Import
import { addTask, validateForm } from "./logic";

// Collect DOM elements
const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const submitBtn = document.querySelector(".submit");
const ////////////////////////////////

// Submit button functionality
function submitButton() {
    submitBtn.onclick = function (event) {
        event.preventDefault();
        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const priority = priorityInput.value;

        if (validateForm(task, description, date, priority)) {
            addTask(task, description, date, priority);
            clearForm();
        }
    };
}

// Clear form fields
function clearForm() {
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
}

function displayTasks() {
//////////////////////////////////////////
}   

export { submitButton };

