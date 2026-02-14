export default function render(container) {
    const style = document.createElement("style");
    style.textContent = `
    /* The container (label) */
    .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px; /* Mini width */
    height: 20px; /* Mini height */
    }

    /* Hide default HTML checkbox */
    .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider (the track) */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 20px; /* Makes it rounded */
    }

    /* The slider "handle" (the circle) */
    .slider:before {
    position: absolute;
    content: "";
    height: 16px; /* Mini handle height */
    width: 16px; /* Mini handle width */
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%; /* Makes it a circle */
    }

    /* Change background color when checked */
    input:checked + .slider {
    background-color: #2196F3; /* Blue when checked */
    }

    /* Move the handle when checked */
    input:checked + .slider:before {
    -webkit-transform: translateX(20px); /* Moves handle to the right (40px width - 16px handle - 2*2px padding = 20px translation) */
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    }
    
    body.dark {
    background: #121212;
    color: white;
    }
    `;

    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Dark Mode Toggle</h2`;

    const label = document.createElement("label");
    label.className = "toggle-switch"
    label.innerHTML = `
    <input type="checkbox" id="mini-toggle">
    <span class="slider"></span>
    `;

    const input = label.querySelector("#mini-toggle");

    input.addEventListener("change", (e) => {
        document.body.classList.toggle("dark", e.target.checked);
    });


    wrapper.appendChild(label);
    container.appendChild(wrapper);
};