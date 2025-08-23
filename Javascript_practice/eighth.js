// Lecture 8 : Events in Javascript

// Adding Dark and Light mode
let modeBtn = document.querySelector("#Toggle")
let body = document.querySelector("body")
let mode = "light"

modeBtn.addEventListener("click", ()=> {
    if (mode == "light") {
        mode = "dark";
        body.classList.remove("light")
        body.classList.add("dark")
    } else {
        mode = "light";
        body.classList.remove("dark")
    }
    console.log(mode)
})