export default function render(container) {
  // ... (Keep your existing styles, but add this to .hand) ...
  const style = document.createElement("style");
  style.textContent = `
    .clock-wrapper { display: flex; justify-content: center; align-items: center; height: 300px; }
    .clock { position: relative; width: 250px; height: 250px; border: 8px solid black; border-radius: 50%; background: white; }
    .hand {
      position: absolute;
      width: 45%;
      height: 4px;
      background: black;
      top: 50%;
      left: 50%;
      transform-origin: 0% 50%; 
      /* Start them pointing UP (-90deg) */
      transform: rotate(-90deg); 
    }
    .hour { height: 6px; width: 30%; background: black; }
    .minute { height: 4px; width: 40%; background: gray; }
    .second { height: 2px; width: 45%; background: red; }
    .center-dot { position: absolute; width: 12px; height: 12px; background: black; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; }
  `;
  document.head.append(style);

  // ... (Keep your existing HTML structure creation) ...
  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");
  const clock = document.createElement("div");
  clock.classList.add("clock");
  const hourHand = document.createElement("div");
  hourHand.classList.add("hand", "hour");
  const minuteHand = document.createElement("div");
  minuteHand.classList.add("hand", "minute");
  const secondHand = document.createElement("div");
  secondHand.classList.add("hand", "second");
  const centerDot = document.createElement("div");
  centerDot.classList.add("center-dot");

  clock.append(hourHand, minuteHand, secondHand, centerDot);
  wrapper.append(clock);
  container.append(wrapper);

  // --- Fixed Clock Logic ---
  function updateClock() {
    const now = new Date(); // Automatically handles your local time zone

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // 1. Calculate degrees
    // 2. Subtract 90 to account for CSS 0deg being at 3 o'clock
    const secondDeg = (seconds / 60) * 360 - 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 - 90;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 - 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }

  // Use requestAnimationFrame for smoother movement if you use transitions
  setInterval(updateClock, 1000);
  updateClock();
}