export default function render(container){
    
    async function getAnime() {
        let apiURL = `https://api.nekosapi.com/v4/images/random/file`;
        let response = await fetch(apiURL);
        let data = await response.blob()
        return data
    };

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section", "row");
    wrapper.innerHTML = `<h2>Anime Character Profile Picture</h2>`;
    
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Get Anime PFP"

    const image = document.createElement("img");
    image.style.borderRadius = "10px";

    button.addEventListener("click", () => {
        button.disabled = true;
        button.textContent = "NEKO ON THE WAY...";
        image.src = `https://api.nekosapi.com/v4/images/random/file?${Date.now()}`;
        image.onload = () => {
            button.disabled = false;
            button.textContent = "Get Anime PFP";
        };
    });

    wrapper.append(button, image);
    container.append(wrapper);
}