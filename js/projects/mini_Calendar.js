export default function render(container){

    const today = new Date();
    const month_is = today.toLocaleString("default", {month:"long" });
    const day_is = today.toLocaleDateString("default", {weekday: "long"});
    const date = today.getDate();

    const wrapper = document.createElement("div");
    wrapper.classList.add("row", "card", "section");
    wrapper.innerHTML = `<h2>Mini Calendar</h2>`
    wrapper.style.transition = "background-color 2s ease-in-out, color 2s ease-in-out";

    const subhead = document.createElement("h3");
    subhead.style.borderRadius = "20px";
    subhead.style.backgroundColor = "red";
    subhead.style.fontSize = "2.5rem";
    subhead.style.color = "white";
    subhead.style.padding = "30px"
    subhead.style.margin = "0px"
    subhead.textContent = month_is;
    subhead.style.transition = "color 2s ease-in-out";


    const main = document.createElement("p");
    main.style.fontSize = "7rem";
    main.textContent = date;

    const extra = document.createElement("p");
    extra.textContent = day_is + " " + today.getFullYear()

    wrapper.addEventListener("mouseenter", ()=> {
        wrapper.style.backgroundColor = "black";
        wrapper.style.color = "white";
        subhead.style.color = "white";
    });

    wrapper.addEventListener("mouseleave", ()=> {
        wrapper.style.backgroundColor ="white";
        wrapper.style.color = "black";
        subhead.style.color = "black";
    });

    wrapper.appendChild(subhead);
    wrapper.appendChild(main);
    wrapper.appendChild(extra);
    container.appendChild(wrapper);
};