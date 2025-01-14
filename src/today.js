function generateToday() {

    const contentDiv = document.getElementById("contentDiv");

    contentDiv.innerHTML = "";

    // Inbox Title
    const inboxTitle = document.createElement("h1");
    inboxTitle.textContent = "Today";
    contentDiv.appendChild(inboxTitle);


    // Button
    const inboxButton = document.createElement("button");
    inboxButton.className = "contentButton";
    contentDiv.appendChild(inboxButton);

    const contentButtonLeftDiv = document.createElement("div");
    contentButtonLeftDiv.className = "contentButtonLeftDiv";
    inboxButton.appendChild(contentButtonLeftDiv);

    const inboxButtonCircle = document.createElement("i");
    inboxButtonCircle.className = "fa-regular fa-circle"
    contentButtonLeftDiv.appendChild(inboxButtonCircle);

    const inboxButtonTask = document.createElement("p");
    inboxButtonTask.textContent = "A today task";
    contentButtonLeftDiv.appendChild(inboxButtonTask);

    const contentButtonRightDiv = document.createElement("div");
    contentButtonRightDiv.className = "contentButtonRightDiv";
    inboxButton.appendChild(contentButtonRightDiv);

    const inboxButtonDate = document.createElement("p");
    inboxButtonDate.textContent = "13/01/24";
    contentButtonRightDiv.appendChild(inboxButtonDate)

    const inboxButtonBin = document.createElement("i");
    inboxButtonBin.className = "fa-solid fa-trash"
    contentButtonRightDiv.appendChild(inboxButtonBin);

    //Add  Button
    const addButton = document.createElement("button");
    addButton.className = "contentAddButton";
    contentDiv.appendChild(addButton);

    const addButtonSymbol = document.createElement("i");
    addButtonSymbol.className = "fa-solid fa-plus";
    addButton.appendChild(addButtonSymbol);



}

export {
    generateToday
};


