export default function render(container) {
    const div = document.createElement("div");
    const choice = document.createElement("input");
    choice.type = "number";
    choice.placeholder = "Enter your character limit";

    div.classList.add("card", "section");
    div.innerHTML = `
        <h2>Real Time Character Counter</h2>
        <textarea id="input" placeholder="Enter your text here"></textarea>
        <h3>Total Characters: <span id="total">0</span></h3>
        <p>Remaining: <span id="left">0</span></p>
    `;
    div.style.position = "relative";

    div.appendChild(choice);

    const input_text = div.querySelector("#input");
    const total = div.querySelector("#total");
    const left = div.querySelector("#left");

    // Set fixed dimensions
    input_text.style.width = "100%";
    input_text.style.height = "30vh";
    input_text.style.resize = "none";

    function updateCounter() {
        const limit = Number(choice.value) || 0;
        total.textContent = input_text.value.length;
        left.textContent = limit - input_text.value.length;
        left.style.color = "red";
        input_text.maxLength = limit; // enforce limit
    }

    input_text.addEventListener("input", updateCounter);
    choice.addEventListener("input", updateCounter);

    container.appendChild(div);
}
