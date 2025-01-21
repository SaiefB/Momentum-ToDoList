//Logic.js
const myTasks = [];

const taskEntries = document.querySelector(".taskItemContainer");

// Class Constructor
class Task {
    constructor(taskTitle, description, dueDate, priority) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// Validates the form - checks if all fields are entered
function validateForm(task, description, date, priority) {
    if (task === "" || description === "" || date === "" || priority === "") {
        alert("Please complete all required fields");
        return false;
    }
    return true;
}

// Function to Add Task to Inbox
function addTask(taskTitle, description, dueDate, priority) {
    const newTask = new Task(taskTitle, description, dueDate, priority);
    myTasks.push(newTask);
    console.log("New Task Added:", newTask);
    console.log("Task Array:", myTasks);
    displayTasks();
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
            </div>
            <div class="contentButtonRightDiv">
                <p>${task.dueDate}</p>
                <i class="fa-solid fa-trash"></i>
            </div>
        </button>
        `;

        taskEntries.innerHTML += taskEntry;
    });


}   

export { validateForm, addTask};
