// DOM.js

//Import
import { addTask, validateForm, myTasks, removeFromArray, validateProjectForm, addProject, myProjects} from "./logic";

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
        console.log("Task submitButton clicked")
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
    console.log("Task form cleared");
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
};

// Display tasks
function displayTasks() {
    taskEntries.innerHTML = ""; // Clears the current task entries to avoid duplication
    console.log("taskEntries innerHTML cleared");

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
        console.log("taskEntries innerHTML updated with new task")
    });
};

// Delete Task functionality using Event Delegation
function deleteTaskFunction() {
    taskEntries.addEventListener("click", (event) => {
        console.log("deleteTask button clicked")
        // Check if a delete button was clicked
        if (event.target.classList.contains("fa-trash")) {
            removeFromArray();
            displayTasks(); // Re-render the task list
        }
    });
}

// Modal open and close function
function addTaskButton() {
    addBtn.onclick = function () {
        console.log("addTaskButton clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("taskModal displayed and overlay added");
    };
}

function closeButton() {
    closeBtn.onclick = function () {
        console.log("Task closeButton clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal and overlay removed");
    };
}

function cancelButton() {
    modalCancel.onclick = function() {
        console.log("Task cancel button clicked");
        modal.style.display = "none";
        overlay.style.display = "none"; 
        console.log("taskModal and overlay removed");
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
        console.log("inboxSection button clicked");
        inboxSection.style.display = "block";
        todaySection.style.display = "none";
        weekSection.style.display = "none";
        mainSection.style.display = "none";
        console.log("inboxSection displayed");
        console.log("todaySection removed");
        console.log("weekSection removed");
        console.log("mainSection removed");
    }
}

function todaySectionFunction() {
    todaySectionBtn.onclick = function() {
        console.log("todaySection button clicked");
        inboxSection.style.display = "none";
        todaySection.style.display = "block";
        weekSection.style.display = "none"
        mainSection.style.display = "none";
        console.log("inboxSection removed");
        console.log("todaySection displayed");
        console.log("weekSection removed");
        console.log("mainSection removed");
    }
}

function weekSectionFunction() {
    weekSectionBtn.onclick = function() {
        console.log("weekSection button clicked");
        inboxSection.style.display = "none";
        todaySection.style.display = "none";
        weekSection.style.display = "block"
        mainSection.style.display = "none";
        console.log("inboxSection removed");
        console.log("todaySection removed");
        console.log("weekSection displayed"); 
        console.log("mainSection removed");
    }
}

/* --------- Project Section ------------ */

const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");

const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectInput = document.querySelector(".projectInput");
const mainSection = document.querySelector(".mainSection")
const projectList = document.querySelector(".projectList");
const projectListItem = document.querySelector(".projectItem");

function addNewProject() {
    projectAddBtn.onclick = function() {
        console.log("addNewProject button clicked");
        projectAddBtn.style.display = "none";
        projectAddModal.style.display = "flex";
        console.log("projectAddBtn removed");
        console.log("projectAddModal displayed");
    }
}

function closeNewProject() {
    cancelNewProjectBtn.onclick = function() {
        console.log("createNewProjectBtn clicked");
        projectAddBtn.style.display = "flex";
        projectAddModal.style.display = "none";
        console.log("projectAddBtn displayed");
        console.log("projectAddModal removed");
    }
}

function confirmNewProject() {
    projectSubmitBtn.onclick = function(event) {
        console.log("projectSubmitBtn clicked");
        event.preventDefault();
        const project = projectInput.value;

        if (validateProjectForm(project)) {
            mainSection.innerHTML = "";
            console.log("main section cleared");
            addProject(project);
            clearProjectForm();
            displayProjects();
            console.log("main section updated")
        }
    }
};

// Clear Project Input
function clearProjectForm() {
    projectInput.value = "";
    console.log("projectForm cleared");
};

// Display Projects
function displayProjects() {
    mainSection.innerHTML = ""; // Clears the current project entries to avoid duplication  
    projectList.innerHTML = ""; // Clears the current project entries to avoid duplication 
    console.log("mainSection cleared");
    console.log("projectList cleared");

    myProjects.forEach((project, index) => {
        const projectEntry = `
        <button class="projectButton" data-index="${index}">
            <h1>${project.projectTitle}</h1>
            <div class="taskItemContainer"></div>
        </button>
        `;
        mainSection.innerHTML += projectEntry;

        const projectAsideEntry = `
        <li><button class="projectBtn projectItem"><i class="fa-solid fa-box-archive"></i>${project.projectTitle}</button></li>
        `;
        projectList.innerHTML += projectAsideEntry
        console.log("projectList updated with new project");
    })
}

/* function selectProject() {
    projectListItem.onclick = function() {
        mainSection.innerHTML = "";
    }
} */

// Export
export { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction, todaySectionFunction, inboxSectionFunction, weekSectionFunction, addNewProject, closeNewProject, confirmNewProject, displayProjects };
