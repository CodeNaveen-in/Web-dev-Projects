export default function render(container) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("video-section");
    wrapper.style.position = "relative";
    wrapper.style.overflow = "hidden";
    wrapper.style.width = "100%";
    wrapper.style.height = "70vh"; // responsive height
    wrapper.style.minHeight = "400px";

    // Correctly set HTML content
    wrapper.innerHTML = `<h2 style="position:relative; z-index:3; color:white; text-align:center; margin-top:20px;">
        Background Video
    </h2>`;

    // Video element
    const video = document.createElement("video");
    video.src = "https://www.w3schools.com/howto/rain.mp4"; 
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "1";
    wrapper.appendChild(video);

    // Overlay for better readability
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))";
    overlay.style.zIndex = "2";
    wrapper.appendChild(overlay);

    // Text content
    const text = document.createElement("div");
    text.style.position = "absolute";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.color = "white";
    text.style.textAlign = "center";
    text.style.zIndex = "3";
    text.innerHTML = `
        <h1 style="margin:0; font-size:3rem; font-weight:700; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
            Welcome to Our Site
        </h1>
        <p style="font-size:1.2rem; margin-top:1rem; text-shadow: 0 1px 5px rgba(0,0,0,0.5);">
            Experience the elegance of a dynamic background
        </p>
    `;
    wrapper.appendChild(text);

    container.appendChild(wrapper);
}
