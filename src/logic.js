/* closeBtn.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

addBtn.onclick = function() {
    const modal = document.getElementById("formSection");
    const overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
} */

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
    let taskTitle = 0;
}