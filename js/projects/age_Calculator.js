export default function render(container){

    const div = document.createElement("div");

    div.innerHTML = `
    <h2>Age Calculator</h2>
    <p>Know your age with your DOB</p>
    
    <label>Enter your DOB</label>
    <input id="dob" type="date">
    <button id="button" class="btn btn-primary">Calculate</button>
    
    <p id="result"></p>
    `;

    div.classList.add("card", "section");

    const dob = div.querySelector("#dob");
    const button = div.querySelector("#button");
    const display = div.querySelector("#result");

    button.addEventListener("click", ()=> {
        const birthDate = new Date(dob.value);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();

        if ( monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        display.textContent = `Your age is ${age} years.`;
    });

    container.appendChild(div);
}
