export default function render(container) {

    let count = 0;
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section", "row");
    wrapper.innerHTML = `<h2>Click Counter</h2>`;

    const display = document.createElement("p");
    display.style.fontSize = "5rem";
    display.style.fontWeight = "600";
    display.textContent = `${count}`

    const button_space = document.createElement("div");
    button_space.style.display = "flex";
    button_space.style.gap = "20px";

    const add = document.createElement("button");
    add.style.fontSize = "2rem";
    add.classList.add("btn")
    add.style.backgroundColor = "green";
    add.style.color = "white";
    add.textContent = "+";

    const reset = document.createElement("button");
    reset.style.fontSize = "2rem";
    reset.classList.add("btn")
    reset.style.backgroundColor = "gray";
    reset.style.color = "white";
    reset.textContent = "Reset";

    const minus = document.createElement("button");
    minus.style.fontSize = "2rem";
    minus.classList.add("btn")
    minus.style.backgroundColor = "red";
    minus.style.color = "white";
    minus.textContent = "-";

    function updateDisplay() {
        display.textContent = count;

        if (count > 0) {
            display.style.color = "green";
        } else if (count < 0) {
            display.style.color = "red";
        } else {
            display.style.color = "black";
        }
    }

    add.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    minus.addEventListener("click", () => {
        count--;
        updateDisplay();
    });

    reset.addEventListener("click", () => {
        count = 0;
        updateDisplay();
    });

    button_space.append(add, reset, minus);
    wrapper.appendChild(display);
    wrapper.appendChild(button_space);
    container.appendChild(wrapper)
}; 