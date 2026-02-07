export default function render(container){

    const div = document.createElement("div");

    div.innerHTML = `
    <h2>Temperature Converter</h2>
    <p>Get the temperature in top 3 formats</p>

    <div class="row">
        <label>Celsius</label>
        <input type="number" placeholder="Enter temperature" id="celsius">
    </div>

    <div class="row">
        <label>Fahrenheit</label>
        <input type="number" placeholder="Enter temperature" id="fahrenheit">
    </div>

    <div class="row">
        <label>Kelvin</label>
        <input type="number" placeholder="Enter temperature" id="kelvin">
    </div>
    `;

    div.classList.add("card", "section");

    const celsius = div.querySelector("#celsius");
    const fahrenheit = div.querySelector("#fahrenheit");
    const kelvin = div.querySelector("#kelvin");

    // Celsius → Others
    celsius.addEventListener("input", () => {

        const value = Number(celsius.value);

        fahrenheit.value = ((value * 9/5) + 32).toFixed(2);
        kelvin.value = (value + 273.15).toFixed(2);
    });

    // Fahrenheit → Others
    fahrenheit.addEventListener("input", () => {

        const value = Number(fahrenheit.value);

        celsius.value = ((value - 32) * 5/9).toFixed(2);
        kelvin.value = (((value - 32) * 5/9) + 273.15).toFixed(2);
    });

    // Kelvin → Others
    kelvin.addEventListener("input", () => {

        const value = Number(kelvin.value);

        celsius.value = (value - 273.15).toFixed(2);
        fahrenheit.value = (((value - 273.15) * 9/5) + 32).toFixed(2);
    });

    container.appendChild(div);
}
