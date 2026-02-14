export default function render(container) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "container");
    wrapper.style.height = "800px";
    wrapper.style.position = "relative";
    wrapper.style.overflow = "hidden";
    wrapper.style.backgroundColor = "black";
    wrapper.innerHTML = `<h2 style="color:white; text-align:center;">Heart Trail Animation</h2>`;

    // Inject CSS for the hearts animation
    const styleEl = document.createElement("style");
    styleEl.textContent = `
        .heart {
            position: absolute;
            pointer-events: none;
            background: url("https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-512.png");
            background-size: cover;
            animation: heartMove 4s linear forwards;
        }
        @keyframes heartMove {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 1;
                filter: hue-rotate(0deg);
            }
            100% {
                transform: translateY(-800px) rotate(720deg) scale(0.5);
                opacity: 0;
                filter: hue-rotate(360deg);
            }
        }
    `;
    document.head.appendChild(styleEl);

    function heartMake(e) {
        const rect = wrapper.getBoundingClientRect();
        const heart = document.createElement("span");
        heart.classList.add("heart");

        // Random size for variety
        const size = 20 + Math.random() * 50;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        // Position under cursor
        heart.style.left = e.clientX - rect.left + "px";
        heart.style.top = e.clientY - rect.top + "px";

        wrapper.appendChild(heart);

        // Remove after animation completes (matches 30s duration)
        setTimeout(() => heart.remove(), 30000);
    }

    wrapper.addEventListener("mousemove", heartMake);
    container.appendChild(wrapper);
}
