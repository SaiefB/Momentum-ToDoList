// DOM.js

//Import
import { addTask, validateForm, myTasks } from "./logic";

// Collect DOM elements
const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const submitBtn = document.querySelector(".submit");
const modal = document.querySelector(".formSection");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modalClose");
const addBtn = document.querySelector(".contentAddButton");
const taskEntries = document.querySelector(".taskItemContainer");
const modalCancel = document.querySelector(".cancelBtn");

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
        };
    };
};

// Clear form fields
function clearForm() {
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
}

// Display tasks
function displayTasks() {
    taskEntries.innerHTML = ""; // Clears the current task entries to avoid duplication

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

// Delete Task functionality using Event Delegation
function deleteTaskFunction() {
    taskEntries.addEventListener("click", (event) => {
        // Check if a delete button was clicked
        if (event.target.classList.contains("fa-trash")) {
            const taskIndex = parseInt(event.target.getAttribute("data-index"), 10);
            myTasks.splice(taskIndex, 1); // Remove task from the array
            displayTasks(); // Re-render the task list
        }
    });
}

// Modal open and close function
function addTaskButton() {
    addBtn.onclick = function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    };
}

function closeButton() {
    closeBtn.onclick = function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    };
}

function cancelButton() {
    modalCancel.onclick = function() {
        modal.style.display = "none";
        overlay.style.display = "none"; 
    }
}

/* --------- Inbox/Today/This Week Section ------------ */
const inboxSection = document.querySelector(".inboxSection");
const inboxSectionBtn = document.querySelector(".inboxBtn");
const todaySection = document.querySelector(".todaySection");
const todaySectionBtn = document.querySelector(".todayBtn");
const weekSection = document.querySelector(".weekSection");
const weekSectionBtn = document.querySelector(".weekBtn");

function inboxSectionFunction() {
    inboxSectionBtn.onclick = function() {
        inboxSection.style.display = "block";
        todaySection.style.display = "none";
        weekSection.style.display = "none"
    }
}

function todaySectionFunction() {
    todaySectionBtn.onclick = function() {
        inboxSection.style.display = "none";
        todaySection.style.display = "block";
        weekSection.style.display = "none"
    }
}

function weekSectionFunction() {
    weekSectionBtn.onclick = function() {
        inboxSection.style.display = "none";
        todaySection.style.display = "none";
        weekSection.style.display = "block"
    }
}



export { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction, todaySectionFunction, inboxSectionFunction, weekSectionFunction};
