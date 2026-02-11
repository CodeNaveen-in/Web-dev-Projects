export default function render(container) {

    const style = document.createElement("style");
    style.textContent = `
    .custom-select { position: relative; width: 100%; }

    .selected {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        background: #f9fafb;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .selected:hover { border-color: #4f46e5; }

    .options {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        background: white;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        list-style: none;
        padding: 0.5rem 0;
        margin: 0;
        display: none;
    }

    .options.show { display: block; }

    .options li {
        padding: 0.7rem 1rem;
        display: flex;
        gap: 10px;
        cursor: pointer;
    }

    .options li:hover { background: #eef2ff; }
    `;
    document.head.appendChild(style);

    const socials = [
        { name: "Facebook", icon: "fa-facebook-f" },
        { name: "Instagram", icon: "fa-instagram" },
        { name: "LinkedIn", icon: "fa-linkedin-in" },
        { name: "Threads", icon: "fa-threads" },
        { name: "YouTube", icon: "fa-youtube" }
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "card section";

    const title = document.createElement("h2");
    title.textContent = "Social Media Select Menu";

    /* ===== REAL SELECT ===== */

    const select = document.createElement("select");
    select.style.display = "none";

    socials.forEach(social => {
        const option = document.createElement("option");
        option.value = social.name.toLowerCase();
        option.textContent = social.name;
        select.appendChild(option);
    });

    /* ===== CUSTOM DROPDOWN ===== */

    const dropdown = document.createElement("div");
    dropdown.className = "custom-select";

    const selected = document.createElement("div");
    selected.className = "selected";
    selected.innerHTML = `<i class="fa-brands ${socials[0].icon}"></i> ${socials[0].name}`;

    const list = document.createElement("ul");
    list.className = "options";

    socials.forEach((social, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-brands ${social.icon}"></i> ${social.name}`;

        li.addEventListener("click", () => {
            selected.innerHTML = li.innerHTML;

            // ✅ Sync real select
            select.selectedIndex = index; // Index is default given for each value we don't need to initialise it

            list.classList.remove("show");
        });

        list.appendChild(li);
    });

    selected.addEventListener("click", () => {
        list.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            list.classList.remove("show");
        }
    });

    dropdown.appendChild(selected);
    dropdown.appendChild(list);

    wrapper.appendChild(title);
    wrapper.appendChild(select);   // real select
    wrapper.appendChild(dropdown);

    container.appendChild(wrapper);
}
