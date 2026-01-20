// Lecture 3 : Loops 

for (let i = 1; i<=5; i++) {
    console.log("Apna College")
}

//  Even num printer
for (let i=1; i<=100; i++) {
    if ( i % 2 == 0 ){
        console.log("Even value is printed : ", i)
    }
}

// Given Sum Gusser
// let num = 20;
// let choice = prompt("Enter choice: ");
// while (choice != num) {
//     console.log("Wrong num ! choose again")
//     choice = prompt("Enter choice: ", choice , " is not right")
// }
// console.log(num, " was the right choice")

// Strings are sequence of characters. 
let str = "This is the String random."
console.log("length of the string is ", str.length)
console.log("The random index of string is ", str[0])

// Template literal
const student = {
    name : "Naveen",
    place: "Ghaziabad", 
    gender: "M"
}

let output = `The template string is here baby........ So the name is ${student.name} and is living at ${student.place} and seems to be a ${student.gender}`

// Assignment
let u_name = prompt("Enter your Name : ")
let username = `Hello \n ${u_name} your username is @${u_name}${u_name.length}`
console.log(username)