export default function render(container, totalSteps = 7) {
  // State: tracks the current active step
  let currentStep = 1;

  // ----------------------------
  // 1. Create and inject styles
  // ----------------------------
  const style = document.createElement("style");

  // CSS for the progress bar component
  style.innerText = `
    .wrapper {
      font-family: Arial, sans-serif;
      width: 400px;
      margin: 40px auto;
      text-align: center;
    }

    .progress-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 20px;
    }

    .progress-container::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      height: 4px;
      width: 100%;
      background: #ddd;
      transform: translateY(-50%);
      z-index: 0;
    }

    .progress {
      position: absolute;
      top: 50%;
      left: 0;
      height: 4px;
      background: #3498db;
      transform: translateY(-50%);
      z-index: 1;
      width: 0%;
      transition: width 0.3s ease;
    }

    .circle {
      background: #ddd;
      color: #999;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      transition: 0.3s;
    }

    .circle.active {
      background: #3498db;
      color: #fff;
    }

    .status {
      margin-bottom: 15px;
      font-weight: bold;
    }

    button {
      padding: 8px 20px;
      margin: 0 5px;
      cursor: pointer;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;

  // NOTE: This will add styles every time render() is called
  document.head.appendChild(style);

  // ----------------------------
  // 2. Create root container
  // ----------------------------
  const root = document.createElement("div");
  root.innerHTML = `
    <h2>The Step Progress Bar</h2>

    <div class="wrapper">
      <div class="status" id="status"></div>

      <div class="progress-container">
        <div class="progress" id="progress"></div>
        ${Array.from({ length: totalSteps })
          .map((_, i) => `<div class="circle">${i + 1}</div>`)
          .join("")}
      </div>

      <button id="prev">Prev</button>
      <button id="next">Next</button>
    </div>
  `;

  // Append the component to the provided container
  container.appendChild(root);

  // ----------------------------
  // 3. Cache DOM elements
  // ----------------------------
  const circles = root.querySelectorAll(".circle");
  const progress = root.querySelector("#progress");
  const prevBtn = root.querySelector("#prev");
  const nextBtn = root.querySelector("#next");
  const status = root.querySelector("#status");

  // ----------------------------
  // 4. UI update function
  // ----------------------------
  function updateUI() {
    // Activate circles based on current step
    circles.forEach((circle, index) => {
      circle.classList.toggle("active", index < currentStep);
    });

    // Update progress bar width
    progress.style.width =
      ((currentStep - 1) / (totalSteps - 1)) * 100 + "%";

    // Enable / disable buttons
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === totalSteps;

    // Update status text
    if (currentStep === totalSteps) {
      status.textContent = `Step ${currentStep} of ${totalSteps} – Completed ✅`;
    } else {
      status.textContent = `Step ${currentStep} of ${totalSteps} – In progress`;
    }
  }

  // ----------------------------
  // 5. Event listeners
  // ----------------------------
  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateUI();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateUI();
    }
  });

  // Initial render
  updateUI();
}
