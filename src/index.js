//index.js

import "./styles.css";
import { submitButton, closeButton, addTaskButton, deleteTaskFunction} from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    submitButton();
    closeButton();
    addTaskButton();
    deleteTaskFunction();
});
