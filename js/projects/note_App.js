export default function render(container){
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section");
    wrapper.innerHTML = `<h2>Notes Application</h2>`;

    const notesContainer = document.createElement("div");
    notesContainer.style.display = "grid";
    notesContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    notesContainer.style.gap = "20px";

    function createNote() {
        let textarea = document.createElement("textarea");
        textarea.style.height = "200px";
        textarea.style.width = "100%";
        textarea.style.resize = "none";
        textarea.placeholder = "Enter your note";

        textarea.addEventListener("dblclick", ()=> {
            const isConfirmed = confirm("Are you sure you want to delete this note?");
            if (isConfirmed) {
                textarea.remove();
            }
        });


        return textarea;
    }

    const add = document.createElement("div");
    add.style.height = "200px";
    add.style.display = "flex";
    add.style.alignItems = "center";
    add.style.justifyContent = "center";
    add.style.fontSize = "5rem";
    add.style.border = "2px solid gray";
    add.style.borderRadius = "500px"
    add.style.cursor = "pointer";
    add.textContent = "+";

    add.addEventListener("mouseenter", () => {
        add.style.backgroundColor = "black";
        add.style.color = "white";
    });

    add.addEventListener("mouseleave", () => {
        add.style.backgroundColor = "";
        add.style.color = "";
    });

    add.addEventListener("click", ()=> {
        let notecard = createNote();
        notesContainer.prepend(notecard);
    });

    notesContainer.append(add);
    wrapper.appendChild(notesContainer);
    container.appendChild(wrapper);
}
