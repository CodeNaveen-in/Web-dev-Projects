const val = document.getElementById("age_val");
const button = document.getElementById("button");
const result = document.getElementById("real_age")
const today = new Date();

function age_reveal() {
    let op_age = new Date(val.value);
    console.log(op_age);
    console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
    let user_date = today.getDate() - op_age.getDate();
    let user_month = today.getMonth() - op_age.getMonth();
    let user_year = today.getFullYear() - op_age.getFullYear()

    if (user_year < 1) {
        alert("User may not be human because age less than 1 not possible")
    }

    result.innerText = `Your age is ${user_date} days , ${user_month} months and ${user_year} years old`
    console.log(`Your age is ${user_date} days , ${user_month} months and ${user_year} years old`)
}

button.addEventListener("click", age_reveal);
