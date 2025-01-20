//Import
import { validateForm } from "./logic";


// DOM.js

/* -------------------- Button Functionality --------------------*/
function submitButton() {
    const submitBtn = document.querySelector(".submit")

    submitBtn.onclick = function(event) {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page.
        console.log("prevent default success")
    
        if (validateForm()) {
            console.log("success"); // Calls your function to add a book if the form is valid.
        }
    }
}

//Exports
export {submitButton}

