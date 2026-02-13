export default function render(container) {
    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = `<h2>Loading Bar</h2>`;

    // 1. The Outer Track
    const progressContainer = document.createElement("div");
    progressContainer.style.width = "100%";
    progressContainer.style.border = "2px solid #643cef";
    progressContainer.style.borderRadius = "30px";
    progressContainer.style.overflow = "hidden";
    progressContainer.style.marginBottom = "20px";

    // 2. The Inner Bar
    const bar = document.createElement("div");
    bar.style.height = "30px";
    bar.style.width = "0%"; 
    bar.style.backgroundColor = "#643cef";
    bar.style.color = "white";
    bar.style.textAlign = "center";
    bar.style.lineHeight = "30px";
    bar.style.fontWeight = "bold";
    bar.style.transition = "width 0.4s linear"; // Smooths out the growth

    progressContainer.appendChild(bar);

    // 3. The Reset Button
    const resetBtn = document.createElement("button");
    resetBtn.className = "btn btn-primary";
    resetBtn.textContent = "Restart Loading";

    let percentage = 0;
    let animationId; // To keep track of the animation frame

    function animate() {
        if (percentage <= 101) {
            bar.style.width = percentage + "%";
            bar.innerText = Math.floor(percentage) + "%";
            percentage = percentage + 0.1;
            animationId = requestAnimationFrame(animate); 
            //requestAnimationFrame works better in rendering(if condition) rather then synchronous (for) loop 
        } else {
            cancelAnimationFrame(animationId);
        }
    }

    // Reset Functionality
    resetBtn.onclick = () => {
        cancelAnimationFrame(animationId); // Stop any current animation
        percentage = 0; // Reset count
        bar.style.width = "0%";
        bar.innerText = "0%";
        requestAnimationFrame(animate); // Start again
    };

    div.appendChild(progressContainer);
    div.appendChild(resetBtn);
    container.appendChild(div);

    // Auto-start on first load
    requestAnimationFrame(animate);
}