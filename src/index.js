//index.js

import "./styles.css";
import { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction, todaySectionFunction, inboxSectionFunction, weekSectionFunction, addNewProject, closeNewProject, confirmNewProject, displayProjects} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    submitButton();
    closeButton();
    cancelButton();
    addTaskButton();
    deleteTaskFunction();
    todaySectionFunction();
    inboxSectionFunction();
    weekSectionFunction();
    addNewProject();
    closeNewProject();
    confirmNewProject();
    displayProjects();
});
