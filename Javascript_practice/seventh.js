// Lecture 7 : DOM part 2

function addItem() {
    // Create a new paragraph element
    const newPara = document.createElement("p");
    newPara.textContent = "I'm a new item!";
    
    // Append it to the container
    document.getElementById("container").appendChild(newPara);
}

function removeItem() {
    const container = document.getElementById("container");
    const lastItem = container.lastElementChild;
    
    // Remove the last child if it exists
    if (lastItem) {
        container.removeChild(lastItem);
    }
}
