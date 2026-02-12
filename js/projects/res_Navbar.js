export default function render(container) {

    const style = document.createElement("style");
    style.textContent = `
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 1rem 2rem;
            position: relative;
        }

        .logo {
            color: #643cef;
            font-weight: 600;
            margin: 0;
        }

        .right-side {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .nav-links {
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            text-decoration: none;
            color: #333;
            text-transform: capitalize;
        }

        .menu-icon {
            display: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: #643cef;
        }

        @media (max-width: 600px) {

            .menu-icon {
                display: block;
            }

            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: white;
                padding: 1rem;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }

            .nav-links.active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);


    const nav = document.createElement("nav");
    nav.classList.add("nav-container");

    const logo = document.createElement("p");
    logo.classList.add("logo");
    logo.textContent = "Responsive Navbar";

    const right = document.createElement("div");
    right.classList.add("right-side");

    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");

    const icon = document.createElement("div");
    icon.classList.add("menu-icon");
    icon.innerHTML = "&#9776;"; // ☰ always visible

    const menu = ["home", "contact", "about"];

    menu.forEach(m => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = m;
        navLinks.appendChild(link);
    });

    icon.onclick = () => {
        navLinks.classList.toggle("active");
    };

    right.appendChild(icon);
    right.appendChild(navLinks);

    nav.appendChild(logo);
    nav.appendChild(right);

    container.appendChild(nav);
}
