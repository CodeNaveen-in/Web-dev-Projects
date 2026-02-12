export default function render(container) {

    const EMOJI_API_KEY = `YOUR_ACCESS_CODE`

    async function getEmoji() {
        const apiURL = `https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`;
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`HTTP Error occured with code: ${response.status}`);
            }
            const data = await response.json(); // ✅ call .json()
            return data;
        } catch (error) {
            console.log(`Error occured: ${error}`);
        }
    }

    const div = document.createElement("div");
    div.classList.add("card", "section", "row");
    div.innerHTML = `
        <h2>Random Emoji</h2>
        <p id="emoji" style="font-size:5rem"></p>
        <p id="name" style="font-size:3rem"></p>
        <button class="btn btn-primary" id="button">Get Emoji!</button>
    `;

    const emoji = div.querySelector("#emoji");
    const name = div.querySelector("#name");
    const button = div.querySelector("#button");

    button.addEventListener("click", async () => {
        button.disabled = true;
        button.textContent = "Loading...";

        const emjArray = await getEmoji();
        if (!emjArray || emjArray.length === 0) {
            emoji.textContent = "❌";
            name.textContent = "No data found";
        } else {
            const randomEmoji = emjArray[Math.floor(Math.random() * emjArray.length)];
            emoji.textContent = randomEmoji.character;
            name.textContent = randomEmoji.unicodeName;
        }

        button.disabled = false;
        button.textContent = "Get Emoji!";
    });

    container.appendChild(div);
}
