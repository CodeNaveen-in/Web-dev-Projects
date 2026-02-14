export default function render(container) {
    const careers = ["Student", "Programmer", "Designer", "Developer"];
    
    const div = document.createElement("div");
    div.classList.add("section", "card");
    div.innerHTML = `<h2>Auto Career Animation</h2>`;
    container.append(div);

    const heading = document.createElement("h1");
    heading.textContent = "I am a ";
    div.appendChild(heading);

    let careerIndex = 0;
    let charIndex = 0;

    function typeLetter() {
        const currentCareer = careers[careerIndex];

        if (charIndex < currentCareer.length) {
            heading.textContent += currentCareer[charIndex];
            charIndex++;
            setTimeout(typeLetter, 150); // 150ms per letter
        } else {
            // Pause for 1 second, then move to next career
            setTimeout(() => {
                heading.textContent = "I am a ";
                charIndex = 0;
                careerIndex = (careerIndex + 1) % careers.length;
                typeLetter();
            }, 1000);
        }
    }

    typeLetter();
}
