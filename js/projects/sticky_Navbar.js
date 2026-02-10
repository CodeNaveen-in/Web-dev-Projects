export default function render(container) {
    const style = document.createElement("style");
    style.innerText = `
    nav {
        display: grid;
        grid-template-columns: 9fr 3fr;
        position: sticky;
        top: 0;
        background: white;
        padding: 10px;
        z-index: 10;
    }

    nav a {
        margin-right: 15px;
        cursor: pointer;
    }

    nav a:hover {
        color: red;
    }

    #hero-section {
        background-image: url("https://picsum.photos/1080?random=1");
        height: 720px;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `;
    document.head.appendChild(style);

    const bigdiv = document.createElement("div");
    bigdiv.classList.add("section", "card");
    bigdiv.innerHTML = `
    <nav>
        <h2> Sticky Navbar </h2>
        <div>
            <a>Home</a>
            <a>Shop</a>
            <a>Contact</a>
        </div>
    </nav>
    
    <div id="hero-section">
        <h1> Hero Line 😎 </h1>
    </div>
    
    <ul>
        <li>
        <strong> Paragraph 1: Definition of a Hero </strong>
            A hero is defined not by extraordinary powers, but by courage, selflessness, and a commitment to helping others. 
            Heroes put the needs of others before themselves, acting as role models who inspire through their actions and words. 
            They are often ordinary people doing extraordinary things in times of need.
        </li>
        <li> <strong> Paragraph 2: Everyday Heroes </strong>
            Real-life heroes exist all around us, often in the form of teachers, parents, or neighbors who spread joy and provide support during difficult times. 
            They demonstrate empathy, integrity, and patience in their daily lives. 
            These individuals make the world a better place through small, kind acts and consistent dedication.
        </li>
        <li>
            <strong> Paragraph 3: Impact of Heroes </strong>
            Heroes play a crucial role in society by offering protection and inspiration. 
            Whether in the military, as first responders, or as caring family members, they teach us values of bravery and self-sacrifice. 
            They remind us that one person can make a positive impact on the world.
        </li>
    </ul>`;
    container.appendChild(bigdiv);
}