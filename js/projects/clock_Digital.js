export default function render(container) {

  const style = document.createElement("style");
  style.textContent = `
    .clock-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }

    .clock {
      font-size: 48px;
      font-weight: bold;
      padding: 20px 40px;
      border-radius: 10px;
      background: black;
      color: lime;
      letter-spacing: 3px;
      font-family: monospace;
    }
  `;
  document.head.append(style);

  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");

  const title = document.createElement("h2");
  title.textContent = "Digital Clock";

  const clockWrapper = document.createElement("div");
  clockWrapper.classList.add("clock-wrapper");

  const clock = document.createElement("div");
  clock.classList.add("clock");

  clockWrapper.appendChild(clock);
  wrapper.append(title, clockWrapper);
  container.append(wrapper);

  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock(); // run once immediately
  setInterval(updateClock, 1000);
}
