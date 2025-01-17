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
    const taskInput = document.querySelector("task");
    const descriptionInput = document.querySelector(".description");
    const dateInput = document.querySelector(".date");
    const priorityInput = document.querySelector(".priority")

    // If any field is empty, alert the user and return false to prevent submission.
    if (taskInput === "" || descriptionInput === "" || dateInput === "" || priorityInput === "") {
        alert("Please complete all required fields");
        return false; // Form is not valid.
    } else {
        return true; // Form is valid.
    }
}

const submitBtn = querySelector(".submit")

/* -------------------- Button Functionality --------------------*/
submitBtn.onclick = function(event) {
    

    event.preventDefault(); // Prevents the form from submitting and refreshing the page.
    
    if (validateForm()) {
        console.log("success"); // Calls your function to add a book if the form is valid.
    }
}