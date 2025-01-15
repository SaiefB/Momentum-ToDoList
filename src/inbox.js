function generateInbox() {

    const contentDiv = document.getElementById("contentDiv");

    contentDiv.innerHTML = "";

    // Inbox Title
    const inboxTitle = document.createElement("h1");
    inboxTitle.textContent = "Inbox";
    contentDiv.appendChild(inboxTitle);

    //Add  Button
    const addButton = document.createElement("button");
    addButton.className = "contentAddButton";
    contentDiv.appendChild(addButton);

    const addButtonSymbol = document.createElement("i");
    addButtonSymbol.className = "fa-solid fa-plus";
    addButton.appendChild(addButtonSymbol);


}

export {
    generateInbox
};


