// DOM.js

//Import
import { addTask, validateForm, myTasks} from "./logic";

// Collect DOM elements
const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const submitBtn = document.querySelector(".submit");
const modal = document.querySelector(".formSection")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".modalClose");
const addBtn = document.querySelector(".contentAddButton");
const taskEntries = document.querySelector(".taskItemContainer");


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
            displayTasks();
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
    taskEntries.innerHTML = ' '; // clears the current task entry to avoid duplication

    myTasks.forEach((task, index) => {
        const taskEntry = `
        <button class="contentButton" data-index="${index}">
            <div class="contentButtonLeftDiv">
                <i class="fa-regular fa-circle"></i>
                <p>${task.taskTitle}</p>
                <p>${task.description}</p>
                <p>${task.priority}</p>
            </div>
            <div class="contentButtonRightDiv">
                <p>${task.dueDate}</p>
                <p class="delete"><i class="fa-solid fa-trash" data-index="${index}"></i></p>
            </div>
        </button>
        `;

        taskEntries.innerHTML += taskEntry;
    });
}

//

// Modal open and close function

// When the user clicks the "Add" button, open the modal and display the overlay.
function addTaskButton() {
    addBtn.onclick = function() {
        modal.style.display = "block"
        overlay.style.display = "block";
    }
}

// When the user clicks the close button, hide the modal and overlay.
function closeButton() {
    closeBtn.onclick = function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
}

export { submitButton, closeButton, addTaskButton};

