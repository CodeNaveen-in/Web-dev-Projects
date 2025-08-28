// Common elements
const img = document.getElementById("img");
const container = document.getElementById("container");
img.src = "../assets/image/moviepic.webp";

// --- INLINE STYLE ---
const inlineButton = document.getElementById("inlineButton");
let inlineVideo, inlineClose;

function showInlineTrailer() {
  // Prevent multiple videos being added
  if (inlineVideo) return;

  inlineVideo = document.createElement("video");
  inlineVideo.src = "../assets/video/mov_bbb.mp4";
  inlineVideo.controls = true;
  inlineVideo.autoplay = true;
  inlineVideo.width = 800;
  inlineVideo.height = 500;

  inlineClose = document.createElement("button");
  inlineClose.textContent = "Close Inline Trailer";
  inlineClose.className = "inline-close";

  container.appendChild(inlineVideo);
  container.appendChild(inlineClose);

  inlineClose.addEventListener("click", hideInlineTrailer);
}

function hideInlineTrailer() {
  if (inlineVideo) {
    container.removeChild(inlineVideo);
    inlineVideo = null;
  }
  if (inlineClose) {
    container.removeChild(inlineClose);
    inlineClose = null;
  }
}

inlineButton.addEventListener("click", showInlineTrailer);

// --- MODAL STYLE ---
const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("trailerModal");
const modalVideo = document.getElementById("trailerVideo");
const modalClose = document.getElementById("closeModal");

function showModalTrailer() {
  modal.style.display = "flex";
  modalVideo.currentTime = 0;
  modalVideo.play();
}

function closeModalTrailer() {
  modal.style.display = "none";
  modalVideo.pause();
}

modalButton.addEventListener("click", showModalTrailer);
modalClose.addEventListener("click", closeModalTrailer);

// Optional: Close modal if you click outside modal-content
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     closeModalTrailer();
//   }
// });

// Close only when the button is clicked
modalClose.addEventListener("click", closeModalTrailer);