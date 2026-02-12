export default function render(container) {
    const hexcodeNum = 'abcdef0123456789'.split(''); // Hex characters

    function createColor() {
        let clr = '';
        for (let i = 0; i < 6; i++) {
            let randnum = Math.floor(Math.random() * hexcodeNum.length);
            clr += hexcodeNum[randnum];
        }
        return clr;
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("section", "card");
    wrapper.innerHTML = `<h2>Random Color Generator</h2>`;

    const imgWrap = document.createElement("div");
    imgWrap.style.display = "grid";
    imgWrap.style.gridTemplateColumns = "repeat(5, 1fr)"; // ✅ 5 columns per row
    imgWrap.style.gap = "10px";
    imgWrap.style.marginTop = "10px";

    // Create 20 color buttons as an example
    for (let i = 0; i < 20; i++) {
        let clr = createColor();
        const colorBtn = document.createElement("button");
        colorBtn.style.backgroundColor = `#${clr}`;
        colorBtn.textContent = `#${clr}`;
        colorBtn.style.width = "100%";   // fill the column
        colorBtn.style.height = "60px";
        colorBtn.style.border = "none";
        colorBtn.style.cursor = "pointer";
        colorBtn.style.color = "white";
        colorBtn.style.fontWeight = "bold";
        imgWrap.appendChild(colorBtn);
    }

    wrapper.appendChild(imgWrap);
    container.appendChild(wrapper);
}
