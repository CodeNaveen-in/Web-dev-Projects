export default function render(container) {
    const div = document.createElement("div");

    div.innerHTML = `
    <h2>Tip Calculator</h2>
    <p>Enter your bill amount along with tip percentage for the total</p>
    
    <input type="number" min="0" placeholder="Enter Bill amount" id="amount">
    <input type="number" min="0" placeholder="Enter Tip percentage" id="percentage">
    <button id="button" class="btn btn-primary"> Calculate final Cost</button>

    <p id="display"></p>
    `;

    div.classList.add("card", "section");

    const amountInput = div.querySelector("#amount");
    const percentageInput = div.querySelector("#percentage");
    const button = div.querySelector("#button");
    const display = div.querySelector("#display");

    button.addEventListener("click", () => {

        const amount = Number(amountInput.value);
        const percentage = Number(percentageInput.value);

        const final = amount + (amount * percentage / 100);

        display.textContent = `Final bill amount is ${final}`;
    });

    container.appendChild(div);
}
