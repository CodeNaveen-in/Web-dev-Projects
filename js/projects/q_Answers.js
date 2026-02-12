export default function render(container) {

    const superhero_JSON_string = `
    {
        "quiz_name": "Superhero Trivia",
        "questions": [
            {"id":1,"question":"What is the secret identity of the superhero known as Batman?","options":["Clark Kent","Bruce Wayne","Peter Parker","Tony Stark"],"answer":"Bruce Wayne","universe":"DC"},
            {"id":2,"question":"Which superhero is often referred to as the 'God of Thunder'?","options":["Iron Man","Hulk","Thor","Captain America"],"answer":"Thor","universe":"Marvel"},
            {"id":3,"question":"What is the name of the fictional African nation ruled by Black Panther?","options":["Genosha","Themyscira","Wakanda","Latveria"],"answer":"Wakanda","universe":"Marvel"},
            {"id":4,"question":"What power-granting item is the source of a Green Lantern's abilities?","options":["A Magic Cloak","A Power Ring","A Cosmic Shield","An Enchanted Hammer"],"answer":"A Power Ring","universe":"DC"},
            {"id":5,"question":"Which hero was bitten by a radioactive spider?","options":["The Flash","Black Widow","Spider-Man","Ant-Man"],"answer":"Spider-Man","universe":"Marvel"}
        ]
    }
    `;

    const quizData = JSON.parse(superhero_JSON_string);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Questions and Answers</h2> <h3>${quizData.quiz_name}</h3>`;

    quizData.questions.forEach(q => {
        const ques = document.createElement("div");
        ques.style.border = "1px solid #ccc";
        ques.style.borderRadius = "8px";
        ques.style.padding = "10px 15px";
        ques.style.marginBottom = "10px";
        ques.style.display = "flex";
        ques.style.flexDirection = "column"; // ✅ stack vertically
        ques.style.backgroundColor = "#f9f9f9";

        const header = document.createElement("div");
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        header.style.cursor = "pointer";

        const questionText = document.createElement("h3");
        questionText.textContent = `Q${q.id}: ${q.question}`;
        questionText.style.margin = "0";

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-plus");
        icon.style.color = "#007bff";

        header.appendChild(questionText);
        header.appendChild(icon);
        ques.appendChild(header);

        const ans = document.createElement("p");
        ans.textContent = q.answer;
        ans.style.display = "none";
        ans.style.marginTop = "10px";
        ans.style.fontWeight = "bold";
        ques.appendChild(ans);

        // ✅ Event listener for toggling answer
        header.addEventListener("click", () => {
            if (ans.style.display === "none") {
                ans.style.display = "block";
                icon.classList.replace("fa-plus", "fa-minus");
            } else {
                ans.style.display = "none";
                icon.classList.replace("fa-minus", "fa-plus");
            }
        });

        wrapper.appendChild(ques);
    });

    container.appendChild(wrapper);
}
