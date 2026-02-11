export default function render(container){
    const div = document.createElement("div");
    div.innerHTML = `
    <div style="display: grid; grid-template-columns: 11fr 1fr">
        <h2> Sidebar Menu </h2>
        <i class="fa-solid fa-bars" id="hamburger-menu"></i>
    </div>
    
    <img src="https://picsum.photos/500/300" style="border-radius: 10px">
    `;
    div.classList.add("card", "section");

    const sidebar = document.createElement("div");
    sidebar.classList.add("card", "section");
    sidebar.innerHTML = `
    <div>
        <div style="display: grid; grid-template-columns: 11fr 1fr">
            <h2> Sideee baaaar </h2>
            <i class="fa-regular fa-circle-xmark" id="close"></i>
        </div>
        <a class="btn" style="display:block"> Home </a>
        <a class="btn" style="display:block"> Shop </a>
        <a class="btn" style="display:block"> Contact </a>
        <a class="btn" style="display:block"> About </a>
        <a class="btn" style="display:block"> Latest </a>
    </div>
    `;
    div.style.position = "relative"; // parent div

    sidebar.style.position = "absolute";
    sidebar.style.top = "0";
    sidebar.style.left = "0";
    sidebar.style.width = "50%";   // 50% of parent div
    sidebar.style.height = "100%"; // full height of parent div
    sidebar.style.display = "none";
    sidebar.style.zIndex = "1000";

    const hamburger = div.querySelector("#hamburger-menu");
    const close = sidebar.querySelector("#close");

    hamburger.addEventListener("click", () => {
        sidebar.style.display = (sidebar.style.display === "flex") ? "none" : "flex";
        sidebar.style.flexDirection = "column"; // optional
    });

    close.addEventListener("click", ()=> {
        sidebar.style.display = "none";
    });

    div.appendChild(sidebar);
    container.appendChild(div);
};
