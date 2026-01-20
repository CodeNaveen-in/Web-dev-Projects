const Button = document.getElementById("button");
const resu = document.getElementById("Result");
const dice = document.getElementById("dice")
let arr = [];

function get_roll() {
    let num = Math.floor(Math.random() * 6) + 1;
    arr.push(num);
    console.log(num);
    add_el(num);
    dice.innerText=dice_face(num);
}

// Function to add a new list item
function add_el(num) {
    const item = document.createElement("li");
    const temp = ` The number recieved is ${num}, ${dice_face(num)}`;
    item.innerText = temp;
    resu.appendChild(item);
}

function dice_face(num) {
  switch (num) {
    case 1:
      return "⚀";
    case 2:
      return "⚁";
    case 3:
      return "⚂";
    case 4:
      return "⚃";
    case 5:
      return "⚄";
    case 6:
      return "⚅";
    default:
      return "";
  }
}

Button.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout( () => {
        dice.classList.remove("roll-animation");
        get_roll();
    }, 1000); 
});