// Lecture 6 : DOM part 1

function editText() {
    // Fetch the element by ID and change its text
    const infoDiv = document.getElementById("info");
    infoDiv.textContent = "Text has been updated!";
}

function changeStyle() {
    // Fetch the same element and change its style
    const infoDiv = document.getElementById("info");
    infoDiv.style.color = "blue";
    infoDiv.style.fontSize = "20px";
}