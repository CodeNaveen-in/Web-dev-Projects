export default function render(container) {
    const datas = [
        {
            feedback_id: "FB-01",
            emotion: "ecstatic",
            emotion_emoji: "🤩",
            aftermath_comment: "Absolutely phenomenal experience!"
        },
        {
            feedback_id: "FB-02",
            emotion: "neutral",
            emotion_emoji: "😐",
            aftermath_comment: "It was okay, but could be improved."
        },
        {
            feedback_id: "FB-03",
            emotion: "angry",
            emotion_emoji: "😡",
            aftermath_comment: "The app crashed and I lost my data."
        }
    ];

    // ---------- Styles ----------
    const style = document.createElement("style");
    style.textContent = `
        .feedback-wrapper {
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            text-align: center;
            font-family: sans-serif;
        }

        .emotions {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 25px 0;
        }

        .emotion-card {
            cursor: pointer;
            padding: 15px 20px;
            border-radius: 12px;
            transition: 0.2s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .emotion-card:hover {
            transform: translateY(-5px);
        }

        .emotion-card p {
            margin: 5px 0;
        }

        .emotion-card .emoji {
            font-size: 3rem;
        }

        .selected {
            background-color: lightgreen;
            color: violet;
            transform: scale(1.1);
        }

        .feedback-btn {
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 8px;
            border: none;
        }
    `;
    document.head.appendChild(style);

    // ---------- Structure ----------
    const wrapper = document.createElement("div");
    wrapper.className = "feedback-wrapper";
    wrapper.classList.add("card", "container");
    wrapper.innerHTML = `<h2>Feedback User Interface</h2>`;

    const emotionsContainer = document.createElement("div");
    emotionsContainer.className = "emotions";

    let selectedId = null;

    datas.forEach(data => {
        const card = document.createElement("div");
        card.className = "emotion-card";
        card.dataset.id = data.feedback_id;

        card.innerHTML = `
            <p class="emoji">${data.emotion_emoji}</p>
            <p>${data.emotion}</p>
        `;

        card.addEventListener("click", () => {
            document
                .querySelectorAll(".emotion-card")
                .forEach(el => el.classList.remove("selected"));

            card.classList.add("selected");
            selectedId = data.feedback_id;
        });

        emotionsContainer.appendChild(card);
    });

    wrapper.appendChild(emotionsContainer);

    const button = document.createElement("button");
    button.className = "feedback-btn";
    button.classList.add("btn", "btn-primary")
    button.textContent = "Send your Feedback";

    button.addEventListener("click", () => {
        if (!selectedId) {
            alert("Please select a feedback first!");
            return;
        }

        const chosen = datas.find(d => d.feedback_id === selectedId);

        wrapper.innerHTML = `
            <h2>Thank You!</h2>
            <p style="font-size: 1.3rem; margin-top: 20px;">
                ${chosen.aftermath_comment} 
                We will use this information to update ourselves.
            </p>
            <p style="font-size: 2rem; margin-top: 15px;">
                ${chosen.emotion_emoji}
            </p>
        `;
    });

    wrapper.appendChild(button);
    container.appendChild(wrapper);
}
