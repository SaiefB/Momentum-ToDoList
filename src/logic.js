//Logic.js

//Variables:
const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");

const myTasks = [];


//Class Constructor
class Task {
    constructor(taskTitle, description, dueDate, priority) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

// Validates the form - checks if all fields are entered
function validateForm() {
    // If any field is empty, alert the user and return false to prevent submission.
    if (taskInput.value === "" || descriptionInput.value === "" || dateInput.value === "" || priorityInput.value === "") {
        alert("Please complete all required fields");
        return false; // Form is not valid.
    } else {
        return true; // Form is valid.
    }
}

/* -------------------- Function to Add Task to Inbox--------------------*/
/* function addTask() {
    let task = 
}; */

//Export

export {validateForm, addTask};