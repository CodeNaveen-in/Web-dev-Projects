export default function render(container) {

    const datas = [
        { stars: 1, label: "Terrible", emoji: "😠" },
        { stars: 2, label: "Poor", emoji: "🙁" },
        { stars: 3, label: "Average", emoji: "😐" },
        { stars: 4, label: "Good", emoji: "😊" },
        { stars: 5, label: "Excellent", emoji: "🤩" }
    ];

    /* ---------- STYLES ---------- */

    const style = document.createElement("style");
    style.textContent = `
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: 300px;
            margin: 40px auto;
            font-family: Arial, sans-serif;
        }

        #emoji {
            font-size: 5rem;
            margin: 10px 0;
            transition: transform 0.2s ease;
        }

        .stars {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .fa-star {
            font-size: 2rem;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .fa-star:hover {
            transform: scale(1.2);
        }

        .fa-solid {
            color: gold;
        }
    `;
    document.head.appendChild(style);

    /* ---------- STRUCTURE ---------- */

    const wrapper = document.createElement("div");
    wrapper.classList.add("card");

    wrapper.innerHTML = `
        <h2>Emoji Rating</h2>
        <p id="emoji"></p>
        <div class="stars"></div>
    `;

    const emojiDisplay = wrapper.querySelector("#emoji");
    const starsContainer = wrapper.querySelector(".stars");

    /* ---------- CREATE STARS ---------- */

    datas.forEach(data => {
        const star = document.createElement("i");
        star.classList.add("fa-regular", "fa-star");
        star.dataset.value = data.stars;

        star.addEventListener("click", () => {

            const allStars = starsContainer.querySelectorAll("i");

            allStars.forEach(s => {
                if (Number(s.dataset.value) <= data.stars) {
                    s.classList.add("fa-solid");
                    s.classList.remove("fa-regular");
                } else {
                    s.classList.remove("fa-solid");
                    s.classList.add("fa-regular");
                }
            });

            emojiDisplay.textContent = data.emoji;
            emojiDisplay.style.transform = "scale(1.2)";
            setTimeout(() => {
                emojiDisplay.style.transform = "scale(1)";
            }, 150);
        });

        starsContainer.appendChild(star);
    });

    container.appendChild(wrapper);
}
