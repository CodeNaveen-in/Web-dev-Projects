export default function render(container){
    let div = document.createElement("div");
    div.classList.add("card", "section", "row");
    div.innerHTML = `
    <h2>Stopwatch</h2>
    <p id="watch"></p>
    <div>
        <button id="start" class=" btn btn-primary">Start</button>
        <button id="stop" class=" btn btn-danger">Stop</button>
        <button id="restart" class=" btn btn-secondary">Restart</button>
    </div>`

    const watch = div.querySelector("#watch");
    const start = div.querySelector("#start");
    const restart = div.querySelector("#restart");
    const stop = div.querySelector("#stop");

    let time = 0;
    let intervalID = null;

    watch.innerText = inHours(time);
    watch.style.fontSize = "10rem";
    container.appendChild(div);

    function inHours(time) {
        let sec = time % 60;
        let min = Math.floor((time % 3600) / 60);
        let hour = Math.floor(time / 3600);
        
        return `${hour.toString().padStart(2, "0")} : ${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2, "0")}`
    }

    start.addEventListener("click", () => {
        if (intervalID !== null) return;

        intervalID = setInterval(() => {
            time = time + 1;
            watch.innerText = inHours(time);
        }, 1000);
    });

    stop.addEventListener("click", ()=> {
        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    });

    restart.addEventListener("click", ()=> {
        time = 0;
        watch.innerText = inHours(time);

        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    });
}