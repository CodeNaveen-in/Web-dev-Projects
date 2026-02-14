export default function render(container) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `
    <h2>BMI Calculator</h2>
    <label> Enter your height <input type="number" id="height" placeholder="in meter only!"></label>
    <label> Enter your weight <input type="number" id="weight" placeholder="in kilogram only!"></label>
    <button class="btn btn-primary">Get your BMI ! </button>
    <p id="display"></p>`;

    const height = wrapper.querySelector("#height");
    const weight = wrapper.querySelector("#weight");
    const button = wrapper.querySelector("button");
    const display = wrapper.querySelector("#display");

    button.addEventListener("click", () => {
        let h = Number(height.value);
        let w = Number(weight.value);
        let bmi = w / h ** 2
        let category = "";

        switch (true) {
            case (bmi < 18.5):
                category = "Underweight";
                break;
            case (bmi >= 18.5 && bmi < 25):
                category = "Normal Weight";
                break;
            case (bmi >= 25 && bmi < 30):
                category = "Overweight";
                break;
            case (bmi >= 30):
                category = "Obese";
                break;
            default:
                category = "Invalid Data";
        }
        display.textContent = `BMI: ${bmi.toFixed(1)} - ${category}`;
        display.style.textAlign = "center";
    });

    container.appendChild(wrapper);
};