export default function render(container) {

    const UNSPLASH_API_KEY = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

    async function getImages(query) {
        try {
            const apiURL = `https://api.unsplash.com/search/photos?page=1&per_page=8&query=${query}&client_id=${UNSPLASH_API_KEY}`;

            const response = await fetch(apiURL);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            return data.results;

        } catch (error) {
            console.error("Error fetching images:", error);
            return [];
        }
    }

    // Wrapper Card
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.style.padding = "20px";

    wrapper.innerHTML = `
        <h2>Image Search</h2>
        <input type="text" maxlength="30" id="input" style="width:300px; padding:5px;">
        <button class="btn btn-primary" id="button">Get Images</button>
    `;

    const input = wrapper.querySelector("#input");
    const button = wrapper.querySelector("#button");

    // Image Grid Container
    const imgWrap = document.createElement("div");
    imgWrap.style.display = "grid";
    imgWrap.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    imgWrap.style.gap = "20px";
    imgWrap.style.marginTop = "20px";
    imgWrap.style.width = "100%";

    button.addEventListener("click", async () => {

        if (!input.value.trim()) return;

        imgWrap.innerHTML = ""; // clear old images

        const images = await getImages(input.value);

        images.forEach(photo => {
            const image = document.createElement("img");

            image.src = photo.urls.small;
            image.style.width = "100%";
            image.style.height = "250px";
            image.style.objectFit = "cover";
            image.style.borderRadius = "10px";
            image.style.display = "block";

            imgWrap.appendChild(image);
        });

    });

    wrapper.appendChild(imgWrap);
    container.appendChild(wrapper);
}
