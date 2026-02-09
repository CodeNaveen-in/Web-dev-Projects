export default function render(container) {

    const dice_list = ["1️⃣","2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];

    const div = document.createElement("div");
    div.classList.add("card", "section", "row");
    div.innerHTML = `
    <h2>Dice Roll Simulator</h2>
    <p id="dice_image"> </p>
    <button id="button" class="btn btn-primary">Roll Dice</button>
    <p id="display"></p>`;

    const image = div.querySelector("#dice_image");
    const button = div.querySelector("#button");
    const display = div.querySelector("#display"); 
    
    button.addEventListener("click", () => {
        let num = Math.floor((Math.random()*6)+1);
        console.log(num);
        image.innerText = dice_list[num-1];
        image.style.fontSize="10rem";
        display.innerText = `The chosen number is ${num} : ${dice_list[num-1]}`;
    });
    container.appendChild(div);
}