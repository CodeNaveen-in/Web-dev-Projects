export default function render(container) {

    const data = [
        {
            id: "1",
            words: "Iron man is the hero of the marvel universe, and also the one who shaped the marvel cinematic universe.",
            pic: "https://picsum.photos/300?random=1"
        },
        {
            id: "2",
            words: "Batman is the silent hero of the DC universe, and an inspiration played by many actors over time.",
            pic: "https://picsum.photos/300?random=2"
        },
        {
            id: "3",
            words: "Hellboy is a hero from Dark Horse comics, one of the few outside the Marvel and DC hegemony.",
            pic: "https://picsum.photos/300?random=3"
        }
    ];

    const div = document.createElement("div");
    div.classList.add("section", "card");

    div.innerHTML = `
        <h2>Tabs Section</h2>

        <div class="grid-container">
            <div class="image-side">
                <img id="display_image" />
            </div>

            <div class="content-side">
                <div class="buttons">
                    <button id="btn-1" class="btn btn-secondary">Tab 1</button>
                    <button id="btn-2" class="btn btn-secondary">Tab 2</button>
                    <button id="btn-3" class="btn btn-secondary">Tab 3</button>
                </div>
                <p id="content"></p>
            </div>
        </div>
    `;

    // styling (could also go in CSS file)
    const style = document.createElement("style");
    style.textContent = `
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
            align-items: start;
        }

        .image-side img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
        }

        .buttons {
            margin-bottom: 10px;
        }
    `;
    div.appendChild(style);

    const image = div.querySelector("#display_image");
    const content = div.querySelector("#content");

    function changeof(num) {
        content.innerText = data[num].words;
        image.src = data[num].pic;
    }

    div.querySelector("#btn-1").addEventListener("click", () => changeof(0));
    div.querySelector("#btn-2").addEventListener("click", () => changeof(1));
    div.querySelector("#btn-3").addEventListener("click", () => changeof(2));

    // default view
    changeof(0);

    container.appendChild(div);
}
