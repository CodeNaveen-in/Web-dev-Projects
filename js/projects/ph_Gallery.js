export default function render(container){
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `
    <h2>Photo Gallery</h2>
    <label> Enter Number of Photos </label>
    <input id="num" type="number" placeholder="1" min="1" max="10">
    <button id="button" class="btn btn-primary"> Get Photos </button>`;

    const imgwrap = document.createElement("div");
    imgwrap.style.display = "grid";
    imgwrap.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    imgwrap.style.gap = "10px";
    imgwrap.style.marginTop = "20px";

    async function addImg(num){
        imgwrap.innerHTML = "";

        for (let i=0; i<num; i++){
            let img = document.createElement("img");
            img.src = `https://picsum.photos/300?random=${Math.random()}`;
            img.style.width = "100%";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.6)";
            imgwrap.appendChild(img);
        }
    }

    const numInput = wrapper.querySelector("#num");
    const button = wrapper.querySelector("#button");

    button.addEventListener("click", async ()=> {
        let val = Number(numInput.value);

        if (!val || val < 1) return;
        imgwrap.innerHTML = ``;

        button.disabled = true;
        button.textContent = "Loading ...";

        await addImg(val);

        button.disabled = false;
        button.textContent = "Get Images";
    });

    wrapper.appendChild(imgwrap);
    container.appendChild(wrapper);
}
