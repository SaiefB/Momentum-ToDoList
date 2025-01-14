import "./styles.css";

import {generateInbox} from "./inbox";

const contentDiv = document.getElementById("contentDiv");
const inboxBtn = document.getElementById("inboxBtn");

contentDiv.innerHTML = "";

inboxBtn.addEventListener("click", generateInbox);

