export default function render(container){
    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = `
    <h2>Weight Converter</h2>
    <label for="pounds">Pounds</label>
    <input id="pounds" type="number" placeholder="Enter the weight in pounds">
    <p id="ounce"></p>

    <label for="kilos">Kilos</label>
    <input id="kilos" type="number" placeholder="Enter the weight in kilogram">
    <p id="ratti"></p>`

    const pounds = div.querySelector("#pounds");
    const ounce = div.querySelector("#ounce");
    const kilos = div.querySelector("#kilos");
    const ratti = div.querySelector("#ratti");

    pounds.addEventListener("input", ()=> {
        let pound = Number(pounds.value);
        kilos.value = (pound * 0.45359237).toFixed(4);
        ounce.innerText = `It is equal to ${pound * 16} ounce.`
        ratti.innerText = `It is equal to ${pound * 3733} rattis`
    });

    kilos.addEventListener("input", ()=> {
        let kilo = Number(kilos.value);
        pounds.value = (kilo * 2.2046226218).toFixed(4);
        ounce.innerText = `It is equal to ${kilo * 35.274} ounce.`
        ratti.innerText = `It is equal to ${kilo * 8230.45} rattis`
    });

    container.appendChild(div)
};