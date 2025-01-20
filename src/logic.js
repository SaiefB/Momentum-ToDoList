//Logic.js

const myTasks = [];

class Task {
    constructor(taskTitle, description, dueDate, priority) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

function validateForm() {
    const taskInput = document.querySelector(".task");
    const descriptionInput = document.querySelector(".description");
    const dateInput = document.querySelector(".date");
    const priorityInput = document.querySelector(".priority");

    // If any field is empty, alert the user and return false to prevent submission.
    if (taskInput.value === "" || descriptionInput.value === "" || dateInput.value === "" || priorityInput.value === "") {
        alert("Please complete all required fields");
        return false; // Form is not valid.
    } else {
        return true; // Form is valid.
    }
}

//Export

export {validateForm};