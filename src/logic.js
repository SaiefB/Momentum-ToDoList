//Logic.js
const myTasks = [];

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
}

//Function to remove task from array
function removeFromArray() {
    const taskIndex = parseInt(event.target.getAttribute("data-index"), 10);
            myTasks.splice(taskIndex, 1); // Remove task from the array
}

   

export { validateForm, addTask, myTasks, removeFromArray};
