//Logic.js
const myTasks = [];

// Inbox Class Constructor
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

// Project Section
const myProjects = [];

// Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
    }
};

function validateProjectForm() {
    const projectTitle = projectInput.value;
    if (projectTitle === "") {
        alert("Please enter a project title");
        return false;
    }
    return true;
}

function addProject(projectTitle) {
    const newProject = new Project(projectTitle);
    myProjects.push(newProject);
    console.log("New Project Added:", newProject);
    console.log("Project Array:", myProjects);
}
   

export { validateForm, addTask, myTasks, removeFromArray, validateProjectForm, addProject, myProjects};
