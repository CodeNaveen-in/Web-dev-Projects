let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let button = document.getElementById("button");
let result = document.getElementById("total");

function billTotal() {
    const bill_amount = parseFloat(bill.value);
    const tip_value = parseFloat(tip.value);
    const total_bill = bill_amount + (bill_amount * tip_value / 100);
    result.innerText = total_bill.toFixed(1) + " is your bill value.";
}

button.addEventListener("click", billTotal);