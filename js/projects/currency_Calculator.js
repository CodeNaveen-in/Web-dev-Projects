export default async function render(container){

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Currency Converter</h2>`;

    const input1 = document.createElement("input");
    input1.type = "number";
    input1.placeholder = "Amount";

    const input2 = document.createElement("input");
    input2.type = "number";
    input2.placeholder = "Amount";

    const select1 = document.createElement("select");
    const select2 = document.createElement("select");

    wrapper.append(select1, input1, select2, input2);
    container.appendChild(wrapper);

    let rates = {};
    let baseCurrency = "USD";

    async function getRates(base){
        const apiURL = `https://open.er-api.com/v6/latest/${base}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        rates = data.rates;
    }

    // Populate dropdowns
    function populateCurrencies(){
        const currencies = Object.keys(rates);

        currencies.forEach(currency => {
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");

            option1.value = option2.value = currency;
            option1.textContent = option2.textContent = currency;

            select1.appendChild(option1);
            select2.appendChild(option2);
        });

        select1.value = "USD";
        select2.value = "EUR";
    }

    function convert(fromInput, fromSelect, toInput, toSelect){
        const amount = parseFloat(fromInput.value);
        if(isNaN(amount)) {
            toInput.value = "";
            return;
        }

        const rate = rates[toSelect.value];
        toInput.value = (amount * rate).toFixed(2);
    }

    // Initial load
    await getRates(baseCurrency);
    populateCurrencies();

    // Convert when typing in first input
    input1.addEventListener("input", () => {
        convert(input1, select1, input2, select2);
    });

    // Convert when typing in second input
    input2.addEventListener("input", () => {
        const amount = parseFloat(input2.value);
        if(isNaN(amount)){
            input1.value = "";
            return;
        }

        const rate = rates[select2.value];
        input1.value = (amount / rate).toFixed(2);
    });

    // When base currency changes
    select1.addEventListener("change", async () => {
        baseCurrency = select1.value;
        await getRates(baseCurrency);
        convert(input1, select1, input2, select2);
    });

    // When target currency changes
    select2.addEventListener("change", () => {
        convert(input1, select1, input2, select2);
    });
}
