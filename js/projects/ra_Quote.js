export default function render(container) {
    const API_URL = `https://motivational-spark-api.vercel.app/api/quotes/random`;

    async function fetchQuote() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
    }

    const div = document.createElement("div");
    div.classList.add("card", "section"); // Removed "row" unless your CSS specifically needs it
    div.innerHTML = `
        <h2>Random Quote Generator</h2>
        <p id="quote" style="font-size: 4rem; font-style: italic;"></p>
        <p id="speaker" style="font-weight: bold;"></p>
        <button id="button" class="btn btn-primary">Get Quote</button>
    `;

    const quoteText = div.querySelector("#quote");
    const speaker = div.querySelector("#speaker");
    const button = div.querySelector("#button");

    // ADDED ASYNC HERE 
    button.addEventListener("click", async () => {
        button.disabled = true; // Good practice: prevent double-clicks
        button.textContent = "Loading...";

        const data = await fetchQuote();
        
        if (data) {
            quoteText.textContent = `"${data.quote}"`;
            speaker.textContent = `- ${data.author}`;
        }

        button.disabled = false;
        button.textContent = "Get Quote";
    });

    container.appendChild(div);
}