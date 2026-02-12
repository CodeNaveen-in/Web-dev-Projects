export default function render(container) {

    const stats_data_string = `
    {
      "developer": "Alex Rivera",
      "role": "Full Stack Engineer",
      "stats": [
        {"name":"Experience","value":"5","suffix":" Years","icon_class":"fas fa-calendar-alt"},
        {"name":"Projects Completed","value":"42","suffix":"","icon_class":"fas fa-project-diagram"},
        {"name":"GitHub Commits","value":"1200","suffix":"+","icon_class":"fab fa-github"},
        {"name":"Coffee Consumed","value":"850","suffix":" Cups","icon_class":"fas fa-coffee"},
        {"name":"Bugs Fixed","value":"314","suffix":"","icon_class":"fas fa-bug"},
        {"name":"UI/UX Rating","value":"4.8","suffix":"/5","icon_class":"fas fa-palette"}
      ]
    }
    `;

    const data = JSON.parse(stats_data_string);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card");
    wrapper.style.padding = "30px";
    wrapper.style.borderRadius = "12px";
    wrapper.style.background = "#ffffff";
    wrapper.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    wrapper.style.fontFamily = "Arial, sans-serif";

    // Header
    const title = document.createElement("h2");
    title.textContent = "Profile Statistics : ";
    title.textContent += data.developer;
    title.style.marginBottom = "5px";

    const role = document.createElement("p");
    role.textContent = data.role;
    role.style.color = "#777";
    role.style.marginBottom = "30px";

    wrapper.appendChild(title);
    wrapper.appendChild(role);

    // Grid Layout
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    grid.style.gap = "20px";

    // Animated Counter Function
    function animateCount(element, target, suffix = "") {
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);

        function update() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + suffix;
                requestAnimationFrame(update);
            } else {
                element.textContent = target + suffix;
            }
        }
        update();
    }

    data.stats.forEach(stat => {

        const card = document.createElement("div");
        card.style.background = "#f8f9fc";
        card.style.padding = "20px";
        card.style.borderRadius = "10px";
        card.style.textAlign = "center";
        card.style.transition = "0.3s ease";
        card.style.cursor = "pointer";

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.backgroundColor = "black";
            card.style.color = "white"
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
            card.style.backgroundColor = "#f8f9fc";
            card.style.color = "black"
        });

        const icon = document.createElement("i");
        icon.className = stat.icon_class;
        icon.style.fontSize = "28px";
        icon.style.color = "#4e73df";
        icon.style.marginBottom = "10px";

        const number = document.createElement("h3");
        number.style.fontSize = "28px";
        number.style.margin = "10px 0";

        const label = document.createElement("p");
        label.textContent = stat.name;
        label.style.color = "#555";

        card.appendChild(icon);
        card.appendChild(number);
        card.appendChild(label);

        grid.appendChild(card);

        // Start animation
        animateCount(number, Number(stat.value), stat.suffix);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}
