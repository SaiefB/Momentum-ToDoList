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



