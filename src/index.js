import "./styles.css";
import {generateInbox} from "./inbox";
import {generateToday } from "./today";
import { generateWeek } from "./week";

const contentDiv = document.getElementById("contentDiv");
const inboxBtn = document.getElementById("inboxBtn");
const todayBtn = document.getElementById("todayBtn");
const weekBtn = document.getElementById("weekBtn");

generateInbox()

inboxBtn.addEventListener("click", generateInbox);
todayBtn.addEventListener("click", generateToday);
weekBtn.addEventListener("click", generateWeek);


const addBtn = document.querySelector(".contentAddButton")
const closeBtn = document.getElementById("modalClose");
const modal = document.getElementById("formSection");
const overlay = document.getElementById("overlay");

closeBtn.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

addBtn.onclick = function() {
    const modal = document.getElementById("formSection");
    const overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
}