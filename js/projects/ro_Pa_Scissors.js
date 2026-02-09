export default function render(container) {
    const options = ["🪨", "📃", "✂️"];

    let computer_score = 0;
    let human_score = 0;

    function choice() {
        return options[Math.floor(Math.random() * 3)]
    };

    function whowin(human_choice, computer_choice) {
        if (human_choice == computer_choice) {
            return null
        } else if (human_choice == "🪨" && computer_choice == "✂️" ||
            human_choice == "✂️" && computer_choice == "📃" ||
            human_choice == "📃" && computer_choice == "🪨"
        ) {
            return `You`
        } else {
            return `Computer`
        }
    };

    function updateScore(result) {
        if (result == "You") {
            human_score++
        } else if (result == "Computer") {
            computer_score++
        }
        score.innerText = `Your Score: ${human_score} | Computer Score: ${computer_score}`;
    }

    function handleClick(human_choice) {
        const computer_choice = choice();
        display.innerText = `You chose ${human_choice}, Computer chose ${computer_choice}`;
        const result = whowin(human_choice, computer_choice);
        updateScore(result);
    }

    const div = document.createElement("div");
    div.classList.add("section", "card", "row");
    div.innerHTML = `
    <h2>Rock Paper Scissor Game</h2>

    <div style="display:flex, padding=30px">
        <button id="rock" class="btn btn-primary">🪨</button>
        <button id="paper" class="btn btn-primary">📃</button>
        <button id="scissor" class="btn btn-primary">✂️</button>
    </div>

    <p id="display"></p>
    <h3 id="score">Your Score: 0 | Computer Score: 0</h3>
    `;

    const rock = div.querySelector("#rock");
    const paper = div.querySelector("#paper");
    const scissor = div.querySelector("#scissor");
    const display = div.querySelector("#display");
    const score = div.querySelector("#score");

    div.querySelectorAll("button").forEach(btn =>
        btn.style.fontSize = "5rem");

    rock.addEventListener("click", () => handleClick("🪨"));
    paper.addEventListener("click", () => handleClick("📃"));
    scissor.addEventListener("click", () => handleClick("✂️"));

    container.appendChild(div);
};