export default function render(container) {

  const style = document.createElement("style");
  style.textContent = `
    .calculator {
      width: 260px;
      padding: 20px;
      border-radius: 10px;
      background: #222;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .display {
      height: 50px;
      font-size: 20px;
      text-align: right;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .buttons button {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .operator {
      background: orange;
      color: white;
    }

    .equal {
      background: green;
      color: white;
      grid-column: span 2;
    }

    .clear {
      background: red;
      color: white;
    }
  `;
  document.head.append(style);

  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section", "row");

  const title = document.createElement("h2");
  title.textContent = "Basic Calculator";

  const calculator = document.createElement("div");
  calculator.classList.add("calculator");

  const display = document.createElement("input");
  display.classList.add("display");
  display.type = "text";
  display.disabled = true;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","C","+",
    "="
  ];

  buttons.forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;

    if (["/","*","-","+"].includes(text)) {
      btn.classList.add("operator");
    }

    if (text === "=") {
      btn.classList.add("equal");
    }

    if (text === "C") {
      btn.classList.add("clear");
    }

    btn.addEventListener("click", () => {
      if (text === "C") {
        display.value = "";
      } 
      else if (text === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } 
      else {
        display.value += text;
      }
    });

    buttonsContainer.appendChild(btn);
  });

  calculator.append(display, buttonsContainer);
  wrapper.append(title, calculator);
  container.append(wrapper);
}
