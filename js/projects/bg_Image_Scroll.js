export default function render(container){

    const style = document.createElement("style");
    style.textContent = `
    img{
      position: sticky;
      top: 0;
      border-radius: 20px;
    }

    .active{
      opacity: 0.3;
      display: block;
    }
    `;
    document.head.append(style);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");

    const title = document.createElement("h2");
    title.textContent = "Background Image Scroll";

    const img = document.createElement("img");
    img.src = "https://picsum.photos/1200/1200";

    const texts = document.createElement("p");
    texts.textContent = "PARAGRAPH ONE\n\nPARAGRAPH TWO";
    texts.style.height = "800px"; // make page scrollable
    texts.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            texts.style.display = "block";
            texts.classList.add("active");
        } else {
            texts.style.display = "none";
            texts.classList.remove("active");
        }
    });

    wrapper.append(title, img, texts);
    container.append(wrapper);
}
