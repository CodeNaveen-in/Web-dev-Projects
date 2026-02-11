export default function render(container){
    const allKeyboardChars = Array.from({ length: 95 }, (_, i) =>
        String.fromCharCode(i + 32)
    );

    function createPassword(la){
        let str = '';
        for (let i = 0; i < la; i++){
            let num = Math.floor(Math.random() * allKeyboardChars.length);
            str += allKeyboardChars[num];
        }
        return str;
    }
    
    const div = document.createElement("div");
    div.classList.add("card", "section");
    div.innerHTML = `
    <h2>Random Password Generator</h2>

    <div>
        <label>Enter Required Password Length</label>
        <input type="number" id="need" placeholder="Give a number" min="1" max="50"> 
    </div>

    <div style="display: flex; gap:10px; margin-top:10px;">
        <input id="input" type="text" placeholder="Create your password" readonly>
        <i id="icon" class="fa-regular fa-copy btn"></i>
    </div>

    <button id="button" class="btn btn-primary" style="margin-top:10px;">
        Create Password
    </button>`;

    const need = div.querySelector("#need");
    const input = div.querySelector("#input");
    const icon = div.querySelector("#icon");
    const button = div.querySelector("#button");

    function showNotification(message) {
        const note = document.createElement("div");
        note.textContent = message;
        note.style.position = "fixed";
        note.style.bottom = "20px";
        note.style.right = "20px";
        note.style.background = "#333";
        note.style.color = "#fff";
        note.style.padding = "10px 20px";
        note.style.borderRadius = "8px";
        note.style.opacity = "0";
        note.style.transition = "opacity 0.3s ease";
        document.body.appendChild(note);

        setTimeout(() => note.style.opacity = "1", 10);

        setTimeout(() => {
            note.style.opacity = "0";
            setTimeout(() => note.remove(), 300);
        }, 2000);
    }

    button.addEventListener("click", ()=> {
        let length = Number(need.value);

        if (!length || length < 1) length = 1;
        if (length > 50) length = 50;

        need.value = length;

        let pass = createPassword(length);
        input.value = pass;
    });

    icon.addEventListener("click", async () => {
        if (!input.value) return;
        await navigator.clipboard.writeText(input.value);
        showNotification("Password copied!");
    });

    container.appendChild(div);
}
