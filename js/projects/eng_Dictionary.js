export default function render(container){

    async function getMeaning(input){
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
        try {
            let response = await fetch(apiURL);

            if (!response.ok){
                throw new Error(`HTTP Error ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch(error){
            console.log(`Error has occurred: ${error}`);
        }
    }

    const div = document.createElement("div");
    div.classList.add("card", "container");
    div.innerHTML = `
    <h2>English Dictionary</h2>
    <input type="text" maxlength="50" id="input">
    <p>Enter your word and press enter</p>
    <button id="button" class="btn btn-primary">Get Explanation</button>
    <p id="display"></p>`

    const button = div.querySelector("#button");
    const input = div.querySelector("#input");
    const display = div.querySelector("#display");

    button.addEventListener("click", async ()=> {
        const result = await getMeaning(input.value);
        if (result) {
            display.textContent = result[0].meanings[0].definitions[0].definition;
        }
    });

    container.appendChild(div);
}
