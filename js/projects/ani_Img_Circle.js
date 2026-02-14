export default function render(container) {

  const style = document.createElement("style");
  style.textContent = `
    .gallery-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      perspective: 1000px;
    }

    .gallery {
      position: relative;
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      transition: transform 1s;
    }

    .gallery img {
      position: absolute;
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      left: 0;
      top: 0;
    }

    .controls {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }
  `;
  document.head.append(style);

  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");

  const title = document.createElement("h2");
  title.textContent = "Rotating Image Gallery";

  const galleryWrapper = document.createElement("div");
  galleryWrapper.classList.add("gallery-wrapper");

  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const images = [
    "https://picsum.photos/id/1015/200",
    "https://picsum.photos/id/1016/200",
    "https://picsum.photos/id/1018/200",
    "https://picsum.photos/id/1020/200",
    "https://picsum.photos/id/1024/200",
    "https://picsum.photos/id/1027/200",
  ];

  const angle = 360 / images.length;

  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.transform = `rotateY(${index * angle}deg) translateZ(300px)`;
    gallery.appendChild(img);
  });

  galleryWrapper.appendChild(gallery);

  let currentRotation = 0;

  const controls = document.createElement("div");
  controls.classList.add("controls");

  const prev = document.createElement("button");
  prev.textContent = "Prev";
  prev.classList.add("btn", "btn-secondary")

  const next = document.createElement("button");
  next.textContent = "Next";
  next.classList.add("btn", "btn-primary")

  prev.addEventListener("click", () => {
    currentRotation += angle;
    gallery.style.transform = `rotateY(${currentRotation}deg)`;
  });

  next.addEventListener("click", () => {
    currentRotation -= angle;
    gallery.style.transform = `rotateY(${currentRotation}deg)`;
  });

  controls.append(prev, next);

  wrapper.append(title, galleryWrapper, controls);
  container.append(wrapper);
}
