export default function render(container) {
  // --- Styles ---
  const style = document.createElement("style");
  style.textContent = `
    .countdown-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 300px;
      font-family: sans-serif;
    }

    .countdown {
      font-size: 48px;
      font-weight: bold;
      color: darkblue;
      background: #f0f0f0;
      padding: 20px 40px;
      border-radius: 10px;
      letter-spacing: 2px;
      text-align: center;
    }

    .label {
      font-size: 20px;
      margin-top: 10px;
      color: #555;
    }
  `;
  document.head.append(style);

  // --- HTML Structure ---
  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");

  const title = document.createElement("h2");
  title.textContent = "New Year Countdown";

  const countdownWrapper = document.createElement("div");
  countdownWrapper.classList.add("countdown-wrapper");

  const countdown = document.createElement("div");
  countdown.classList.add("countdown");

  countdownWrapper.appendChild(countdown);
  wrapper.append(title, countdownWrapper);
  container.append(wrapper);

  // --- Countdown Logic ---
  function updateCountdown() {
    const now = new Date();

    // Target: next New Year
    let year = now.getFullYear();
    const newYear = new Date(`January 1, ${year + 1} 00:00:00`);

    const diff = newYear - now; // difference in ms

    if (diff <= 0) {
      countdown.textContent = "Happy New Year! 🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent = 
      `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }

  updateCountdown(); // run immediately
  const timer = setInterval(updateCountdown, 1000);
}
