export default function render(container) {

    async function getJoke() {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        return `${data.setup} — ${data.punchline}`;
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `
    <h2>Dad Joke Generator</h2>
    <p id="display" style="font-size : 5rem"></p>
    <button class="btn btn-primary">Get me a joke </button>`;

    const display = wrapper.querySelector("#display");
    const button = wrapper.querySelector(".btn-primary");
    button.addEventListener("click", async () => {
        button.disabled = true;
        button.textContent = "Loading.."
        display.textContent = await getJoke();
        button.disabled = false;
        button.textContent = "Get me a Joke"

    });

    container.appendChild(wrapper);
};