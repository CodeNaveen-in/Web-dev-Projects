export default function render(container) {

    /* ============================== MAIN WRAPPER ============================== */

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.style.padding = "20px";

    const title = document.createElement("h2");
    title.textContent = "Random Image Gallery";

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Load Images";
    button.style.marginBottom = "20px";

    /* ============================== IMAGE GRID ============================== */

    const imageContainer = document.createElement("div");
    imageContainer.style.display = "grid";
    imageContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    imageContainer.style.gap = "20px";

    /* ============================== FETCH IMAGE (SCALABLE) ============================== */

    async function getImage() {
        const apiURL = `https://picsum.photos/300?random=${Math.random()}`;

        try {
            const response = await fetch(apiURL);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const blob = await response.blob();
            return URL.createObjectURL(blob);

        } catch (error) {
            console.error("Error fetching image:", error.message);
            return null;
        }
    }

    /* ============================== ADD IMAGES (PARALLEL LOADING) ============================== */

    async function addImages(count) {

        button.disabled = true;
        button.textContent = "Loading...";

        const promises = Array.from({ length: count }, () => getImage());
        const imageSources = await Promise.all(promises);

        imageSources.forEach(src => {
            if (!src) return;

            const img = document.createElement("img");
            img.src = src;
            img.style.width = "100%";
            img.style.borderRadius = "12px";
            img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            img.style.transition = "transform 0.3s ease";

            // Hover effect
            img.addEventListener("mouseenter", () => {
                img.style.transform = "scale(1.05)";
            });

            img.addEventListener("mouseleave", () => {
                img.style.transform = "scale(1)";
            });

            // Memory cleanup
            img.onload = () => {
                URL.revokeObjectURL(src);
            };

            imageContainer.prepend(img);
        });

        button.disabled = false;
        button.textContent = "Load Images";
    }

    /* ============================== EVENTS ============================== */

    button.addEventListener("click", () => {
        addImages(6);
    });

    /* ============================== BUILD DOM ============================== */

    wrapper.appendChild(title);
    wrapper.appendChild(button);
    wrapper.appendChild(imageContainer);
    container.appendChild(wrapper);

    // Initial load
    addImages(3);
}
