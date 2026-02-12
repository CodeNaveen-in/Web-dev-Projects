export default function render(container){
    
    const today = new Date();
    const month = today.toLocaleString("default", {month: "long"});
    const date = today.getDate();
    const day = today.toLocaleDateString("default", {weekday: "long"});
    const year = today.getFullYear(); 

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section", "row");
    wrapper.innerHTML = `<h2>Month Calendar<h2>`;
    
    const subhead = document.createElement("h4");
    subhead.style.fontSize = "2.5rem";
    subhead.style.backgroundColor = "green";
    subhead.style.color = "white";
    subhead.style.padding = "20px";
    subhead.style.borderRadius = "30px";
    subhead.style.textAlign = "center";
    subhead.textContent = ` ${day} : ${date} :  ${month} : ${year}`;


    const cale = document.createElement("div");
    cale.style.width = "700px";
    cale.style.display = "grid";
    cale.style.backgroundColor = "black";
    cale.style.color = "white";
    cale.style.borderRadius = "30px"
    cale.style.gridTemplateColumns = " repeat(auto-fill, minmax(100px, 1fr))";
    for (let i=1; i<31; i++){
        let p = document.createElement("p");
        p.style.textAlign = "center";
        p.style.justifyItems = "center";
        p.style.height="100px";
        p.style.fontSize = "3rem";
        p.style.padding = "20px";
        p.style.borderRadius = "30px";
        p.innerText = i;

        if (i == date) {
            p.style.backgroundColor = "green"
            p.style.color = "white"
        }
        cale.append(p);
    }

    wrapper.append(subhead);
    wrapper.appendChild(cale);
    container.appendChild(wrapper);
};