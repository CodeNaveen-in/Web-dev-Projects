export default function render(container){
    const div = document.createElement("div");
    div.classList.add("card", "section", "row");
    div.innerHTML = `
    <h2>Pomodoro Timer</h2>
    <p id="timer"><p>
    <button id="start" class="btn btn-primary"> Start </button>
    <button id="stop" class="btn btn-danger"> Stop </button>
    <button id="restart" class="btn btn-secondary"> Restart </button>`;

    const timer = div.querySelector("#timer");
    const button_start = div.querySelector("#start");
    const button_stop = div.querySelector("#stop");
    const button_restart = div.querySelector("#restart");

    let time = 25*60;
    let intervalID = null; // store interval

    timer.innerText = inMinutes(time);
    timer.style.fontSize = "10rem";

    function inMinutes(time) {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        return `${min} : ${sec.toString().padStart(2, "0")}`;
    }

    button_start.addEventListener("click", () => {
        // prevent multiple intervals
        if (intervalID !== null) return;

        intervalID = setInterval(() => {
            time = time - 1;
            timer.innerText = inMinutes(time);

            if (time <= 0) {
                clearInterval(intervalID);
                intervalID = null;
            }
        }, 1000);
    });

    button_stop.addEventListener("click", () => {
        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    });

    button_restart.addEventListener("click", () => {
        time = 25 * 60;
        timer.innerText = inMinutes(time);
        
        // stop any running interval
        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    });


    container.appendChild(div);
};