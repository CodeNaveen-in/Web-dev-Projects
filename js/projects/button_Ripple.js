export default function render(container){

    const style = document.createElement("style");
    style.textContent = `
    .ripple-btn {
        position: relative;
        overflow: hidden;
        padding: 12px 24px;
        font-size: 1rem;
        cursor: pointer;
        background: #333;
        color: white;
        border: none;
    }


    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms linear;
        background: rgba(255, 255, 255, 0.6);
        pointer-events: none;
    }

    @keyframes ripple-animation {
        from {
            transform: scale(0);
            opacity: 0.8;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    `;
    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.classList.add("row", "card", "section");

    wrapper.innerHTML = `
        <h2>Button Ripple Effect</h2> 
        <button class="ripple-btn">See Magic!</button>
    `;

    const button = wrapper.querySelector("button");

    button.addEventListener("mouseenter", function(e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        const rect = this.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;

        circle.classList.add("ripple");

        const existingRipple = this.querySelector(".ripple");
        if (existingRipple) existingRipple.remove();

        this.appendChild(circle);
    });


    container.appendChild(wrapper);
}
