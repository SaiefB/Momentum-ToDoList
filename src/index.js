//index.js

import "./styles.css";
import { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    submitButton();
    closeButton();
    cancelButton();
    addTaskButton();
    deleteTaskFunction();
});
