function generateWeek() {

    const contentDiv = document.getElementById("contentDiv");

    contentDiv.innerHTML = "";

    // week Title
    const weekTitle = document.createElement("h1");
    weekTitle.textContent = "Today";
    contentDiv.appendChild(weekTitle);


    // Button
    const weekButton = document.createElement("button");
    weekButton.className = "contentButton";
    contentDiv.appendChild(weekButton);

    const contentButtonLeftDiv = document.createElement("div");
    contentButtonLeftDiv.className = "contentButtonLeftDiv";
    weekButton.appendChild(contentButtonLeftDiv);

    const weekButtonCircle = document.createElement("i");
    weekButtonCircle.className = "fa-regular fa-circle"
    contentButtonLeftDiv.appendChild(weekButtonCircle);

    const weekButtonTask = document.createElement("p");
    weekButtonTask.textContent = "A weekly task";
    contentButtonLeftDiv.appendChild(weekButtonTask);

    const contentButtonRightDiv = document.createElement("div");
    contentButtonRightDiv.className = "contentButtonRightDiv";
    weekButton.appendChild(contentButtonRightDiv);

    const weekButtonDate = document.createElement("p");
    weekButtonDate.textContent = "13/01/24";
    contentButtonRightDiv.appendChild(weekButtonDate)

    const weekButtonBin = document.createElement("i");
    weekButtonBin.className = "fa-solid fa-trash"
    contentButtonRightDiv.appendChild(weekButtonBin);

    //Add  Button
    const addButton = document.createElement("button");
    addButton.className = "contentAddButton";
    contentDiv.appendChild(addButton);

    const addButtonSymbol = document.createElement("i");
    addButtonSymbol.className = "fa-solid fa-plus";
    addButton.appendChild(addButtonSymbol);



}

export {
    generateWeek
};
