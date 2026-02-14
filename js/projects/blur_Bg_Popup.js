export default function render(container){
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "container", "row");
    wrapper.innerHTML = `<h2> Blurred Background Popup</h2> 
    <button class="btn btn-primary"> Join today </button>`

    const b1 = wrapper.querySelector(".btn-primary");

    const popped = document.createElement("div");

    popped.style.position = "fixed";
    popped.style.top = "0";
    popped.style.left = "0";
    popped.style.width = "100%";
    popped.style.height = "100%";
    popped.style.display = "none";
    popped.style.justifyContent = "center";
    popped.style.alignItems = "center";
    popped.style.background = "rgba(0,0,0,0.4)";
    popped.style.backdropFilter = "blur(8px)";
    popped.style.webkitBackdropFilter = "blur(8px)"; // Safari
    popped.style.zIndex = "999";

    const modal = document.createElement("div");

    modal.style.background = "white";
    modal.style.padding = "30px";
    modal.style.borderRadius = "15px";
    modal.style.width = "300px";
    modal.style.textAlign = "center";

    modal.innerHTML = `
        <h2>We welcome you here</h2>
        <input type="email" placeholder="Email here please" 
            style="width:100%; padding:8px; margin:10px 0;">
        <button class="btn btn-danger"> JOIN NOW </button>
    `;

    popped.appendChild(modal);

    const b2 = popped.querySelector(".btn-danger");

    b1.addEventListener("click", () => {
        popped.style.display = "flex";
    });

    modal.querySelector(".btn-danger").addEventListener("click", () => {
        popped.style.display = "none";
    });


    wrapper.append(popped);
    container.appendChild(wrapper);
};