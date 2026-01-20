// Use document.getElementById for unique elements as it's more specific and performant.
const timerInput = document.getElementById("timer-input");
const timerDisplay = document.getElementById("timer-display");
const buttonWrapper = document.getElementById("button-wrapper");

// Use 'let' for variables that will change.
let interval;
let timeLeft;
let initialTimeInSeconds; // Store the user's initial time to reset to it.

/*
 * Converts a MM:SS string to total seconds.
 * @param {string} timeString The time in MM:SS format.
 * @returns {number} The total time in seconds.
 */
function parseTimeStringToSeconds(timeString) {
    const parts = timeString.split(':');
    if (parts.length !== 2) {
        return 1500; // Default to 25 minutes if format is incorrect.
    }
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return (minutes * 60) + seconds;
}

/**
 * Updates the timer display with the current timeLeft value.
 * Formats seconds into a MM:SS string.
 */
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    // padStart adds a leading '0' if the number is less than 10.
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Update the text content of the timer display element.
    timerDisplay.innerText = formattedTime;
}

/**
 * Starts the countdown timer.
 * Uses setInterval to decrement the time every second.
 */
function startTimer() {
    // Check if a timer is already running to prevent multiple intervals.
    if (interval) {
        return;
    }

    // Get the user's input and parse it to set the timer's initial state.
    // This is done on start, so the user can change the value and restart.
    initialTimeInSeconds = parseTimeStringToSeconds(timerInput.value);
    timeLeft = initialTimeInSeconds;

    // Hide the input and show the timer display.
    timerInput.style.display = 'none';
    timerDisplay.style.display = 'block';

    // Set up an interval that runs a function every 1000ms (1 second).
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        // Check for timer expiration.
        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null; // Clear the interval variable to allow starting a new one.
            alert("Time's up!"); // Note: In a real app, use a custom modal instead of alert().
            timeLeft = initialTimeInSeconds; // Reset for the next session.
            updateTimer();
            timerInput.style.display = 'block';
            timerDisplay.style.display = 'none';
        }
    }, 1000);
}

/**
 * Stops the countdown timer.
 */
function stopTimer() {
    clearInterval(interval);
    interval = null; // Clear the interval variable.
}

/**
 * Resets the timer to its initial value.
 */
function resetTimer() {
    stopTimer(); // Always stop the timer first.
    timeLeft = initialTimeInSeconds;
    updateTimer();
    timerInput.style.display = 'block';
    timerDisplay.style.display = 'none';
}

// --- Event Handling using Event Delegation ---

/**
 * This is your proposed method, done correctly.
 * We add a single event listener to the parent container.
 * The 'event' object is passed automatically to this function.
 */
buttonWrapper.addEventListener("click", (event) => {
    // event.target is the specific button that was clicked.
    // event.target.id gets the id of the button (e.g., "start", "stop", "reset").
    switch (event.target.id) {
        case "start":
            startTimer();
            break;
        case "stop":
            stopTimer();
            break;
        case "reset":
            resetTimer();
            break;
    }
});

// Initialize the display with the default value from the input field.
window.onload = function() {
    timerInput.value = "25:00";
    timerDisplay.style.display = 'none';
}