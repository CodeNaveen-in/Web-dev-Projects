export default function render(container) {

    let score = 0;
    let num1 = 0;
    let num2 = 0;

    function mulcheck(a, b, ans) {
        return ans === a * b ? 1 : -1;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = "<h2>Multiply App</h2>";

    const score_count = document.createElement("p");
    score_count.style.color = "green";
    score_count.textContent = `Your score is: ${score}`;

    const ques = document.createElement("h3");
    ques.style.fontSize = "3rem";

    const inp = document.createElement("input");
    inp.type = "number";
    inp.style.fontSize = "4rem";
    inp.style.textAlign = "center";
    inp.placeholder = "Enter your answer";

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Submit";

    function updateQuestion() {
        num1 = getRandomNumber();
        num2 = getRandomNumber();
        ques.textContent = `What is ${num1} multiply by ${num2}?`;
        inp.value = ""; // Clear input
    }

    button.addEventListener("click", () => {
        const userAnswer = Number(inp.value);
        if (!isNaN(userAnswer)) {
            score += mulcheck(num1, num2, userAnswer);
        }
        score_count.textContent = `Your score is: ${score}`;
        updateQuestion();
    });

    // Initialize first question
    updateQuestion();

    div.appendChild(score_count);
    div.appendChild(ques);
    div.appendChild(inp);
    div.appendChild(button);
    container.appendChild(div);
}
