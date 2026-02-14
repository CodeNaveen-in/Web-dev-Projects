export default function render(container) {

    const style = document.createElement("style");
    style.textContent = `
        .searchbar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: width 0.4s ease;
        background: white;
        padding: 0 10px;
        }

        .searchbar.active {
        width: 700px;
        border-radius: 30px;
        }

        .searchbar i {
        min-width: 24px;
        font-size: 18px;
        cursor: pointer;
        }

        .searchbar input {
        width: 0;
        border: none;
        outline: none;
        background: transparent;
        transition: width 0.4s ease;
        }

        .searchbar.active input {
        width: 180px;
        }

    `;
    document.head.append(style);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "section", "row");
    wrapper.innerHTML = `<h2>Animated Search Bar</h2>`;

    const searchbar = document.createElement("div");
    searchbar.classList.add("searchbar");

    const search = document.createElement("i");
    search.classList.add("fa-solid", "fa-magnifying-glass");

    const input = document.createElement("input");
    input.placeholder = "Enter your search"

    const mic = document.createElement("i");
    mic.classList.add("fa-solid", "fa-microphone");


    search.addEventListener("click", () => {
        searchbar.classList.toggle("active");
    });

    searchbar.append(search, input, mic)
    wrapper.append(searchbar)
    container.append(wrapper);
}