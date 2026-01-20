const timer = document.getElementById("timer");
const buttonplace = document.getElementById("button-container");
let tvalue = 0;
let t = null;

function time_start() {
    return setInterval(() => {
        tvalue += 1;
        let sec = tvalue % 60;
        let min = Math.floor((tvalue / 60) % 60);
        let hor = Math.floor(tvalue / 3600);

        timer.innerText = `${hor} : ${min} : ${sec}`;
    }, 1000);
}

buttonplace.addEventListener("click", (event) => {
    switch(event.target.id){
        case "start":
            if (!t) t = time_start();
            break;
        case "stop":
            clearInterval(t);
            t = null;
            break;
        case "restart":
            tvalue = 0;
            timer.innerText = "00:00:00";
            break;
    }
});
