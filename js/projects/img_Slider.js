export default function render(container) {
    // 1. Prepare your data as an array (easier to navigate than an object)
    const baseUrl = `https://picsum.photos/700/500?random=`;
    const images = [
        baseUrl + Math.random(),
        baseUrl + Math.random(),
        baseUrl + Math.random(),
        baseUrl + Math.random(),
        baseUrl + Math.random()
    ];

    let currentIndex = 0;

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Image Slider</h2>`;

    const sliderContainer = document.createElement("div");
    sliderContainer.style.display = "flex";
    sliderContainer.style.alignItems = "center";
    sliderContainer.style.justifyContent = "center";
    sliderContainer.style.gap = "20px";

    // Use Unicode arrows if FontAwesome isn't linked in index.html
    sliderContainer.innerHTML = `
        <button id="prev" class="btn" style="font-size: 2rem; background: none; border: none; cursor: pointer;">&#10094;</button>
        <div style="border-radius: 10px;">
            <img id="display-img" src="${images[currentIndex]}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.6)">
        </div>
        <button id="next" class="btn" style="font-size: 2rem; background: none; border: none; cursor: pointer;">&#10095;</button>
    `;

    const imgElement = sliderContainer.querySelector("#display-img");
    const prevBtn = sliderContainer.querySelector("#prev");
    const nextBtn = sliderContainer.querySelector("#next");

    // 2. Logic to change images
    function updateImage() {
        // Add a small fade effect by toggling opacity
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = 1;
        }, 150);
    }

    nextBtn.onclick = () => {
        currentIndex++;
        // If we go past the last image, go back to the first
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateImage();
    };

    prevBtn.onclick = () => {
        currentIndex--;
        // If we go before the first image, go to the last
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateImage();
    };

    // 3. Styling the transition
    imgElement.style.transition = "opacity 0.5s ease-in-out";

    wrapper.appendChild(sliderContainer);
    container.appendChild(wrapper);
}