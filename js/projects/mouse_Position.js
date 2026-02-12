export default function render(container){
    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = `<h2> Mouse Position </h2>`

    const x = document.createElement("p");
    x.innerText = `Mouse location on X:`
    x.style.fontSize = "3rem";

    const y = document.createElement("p");
    y.innerText = `Mouse location on Y:`
    y.style.fontSize = "3rem";

    window.addEventListener("mousemove", (e)=> {
        let x_pos = e.clientX;
        let y_pos = e.clientY;

        x.innerText = `Mouse location on X : ${x_pos}`;
        y.innerText = `Mouse location on Y : ${y_pos}`;
    });

    div.appendChild(x);
    div.appendChild(y);
    container.appendChild(div);
};