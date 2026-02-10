export default function render(container) {
    const style = document.createElement("style");
    style.textContent = `
    .popup {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup.active {
        display: flex;
    }

    .popup-content {
        position: relative;
        background: black;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    }

    .close-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        background: rgba(255,255,255,0.15);
        color: white;
        font-size: 1.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .close-btn:hover {
        background: rgba(255,255,255,0.3);
        transform: scale(1.1);
    }

    .poster {
        border-radius: 10px;
        margin: 10px 0;
    }
    `;

    document.head.appendChild(style);

    const div = document.createElement("div");
    div.classList.add("section", "card");

    div.innerHTML = `
        <h2>Video Trailer</h2>
        <img src="https://picsum.photos/300/200" class="poster">
        <h3>The Story</h3>
        <p>The Saga of us, of you and me</p>
        <button id="movie_button" class="btn btn-primary">Watch Now</button>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span id="close" class="close-btn">&times;</span>
                <iframe id="trailer" width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;

    const btn = div.querySelector("#movie_button");
    const popup = div.querySelector("#popup");
    const close = div.querySelector("#close");
    const trailer = div.querySelector("#trailer");

    const TRAILER_URL = "https://www.youtube.com/embed/8ugaeA-nMTc";

    btn.onclick = () => {
        trailer.src = `${TRAILER_URL}?autoplay=1`;
        popup.classList.add("active"); // Use class instead of .hidden
    };

    close.onclick = () => {
        trailer.src = "";
        popup.classList.remove("active"); // Remove class
    };

    container.appendChild(div);
}