function generateInbox() {

    const contentDiv = document.getElementById("#contentDiv");

    const inboxTitle = document.createElement("h1");
    inboxTitle.textContent = "Inbox";
    contentDiv.appendChild(inboxTitle)

}

export {generateInbox};


