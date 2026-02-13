export default function render(container){
    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = `
    <h2>Loan Calculator</h2>
    <label> Loan Amount </label> 
    <input id="loan" type="number" placeholder="Enter loan amount">
    <label> Loan Interest </label>
    <input id="rate" type="number" placeholder = "Enter your rate in %age">
    <label> Total Payment in Months </label>
    <input id="month" type="number" placeholder="Enter duration of months">
    <button id="button"> Get Monthly Payment </button> 
    <p id="result"> </p>
    `;

    const loan = div.querySelector("#loan");
    const rate = div.querySelector("#rate");
    const month = div.querySelector("#month");
    const button = div.querySelector("#button");
    const result = div.querySelector("#result");

    button.classList.add("btn", "btn-primary")

    button.addEventListener("click", ()=> {
        let amount = Number(loan.value) + ( Number(loan.value) * Number(rate.value) / 100);
        let kisht = (amount / Number(month.value)).toFixed(2);

        result.textContent = `Your monthly installement would be ${kisht} with total amount being ${amount}`;
    });
    container.appendChild(div);
};