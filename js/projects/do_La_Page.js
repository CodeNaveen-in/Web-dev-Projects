export default function render(container){

    const pages = ["cat", "dog", "cow", "bull"];
    const style = document.createElement("style");
    style.textContent = `
    .page {
        display: flex;
        gap: 20px;
    }

    .page img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.6);
        transform: translateY(-5px);
    }

    .set {
        flex: 1;
        transition: 0.3s ease;
    }

    .set:hover {
        flex: 2;
    }
`;

    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Double Landing Page</h2>`;
    
    const page_set = document.createElement("div");
    page_set.className = "page";

    pages.forEach(page => {
        const pg = document.createElement("div");
        pg.innerHTML = `<h1>${page}</h1>`
        pg.classList.add("set");
        const image = document.createElement("img");
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = `Get your ${page}`;

        image.src = `https://picsum.photos/300/200?random=${page}`;
        pg.appendChild(image);
        pg.appendChild(button);
        page_set.appendChild(pg)
    });

    wrapper.appendChild(page_set);
    container.appendChild(wrapper);
};