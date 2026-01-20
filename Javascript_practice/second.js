// Lecture 2 : Opeartors  and conditions

let a = 2
let b = 5

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a + b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

//Unary operator
console.log("a++ = ", a++);
console.log("a-- = ", a--);

// Assignment Operator
a+= 4
console.log(a);
a-=3
console.log(a);

//Comparison Operator

a = 10
b = 10
console.log(a == b);
console.log(a === b);

a = 10
b = 15
console.log(a >= b);
console.log(a == b);

// Logical Operators
let cond1 = a > b;
let cond2 = a < b;

console.log("cond1 && cond2 = ", cond1 && cond2)
console.log("cond1 || cond2 = ", cond1 || cond2)
console.log("! Not work = ", 6 != 5)

// Conditional Statement

let num = 100;

if (num % 2 == 0) {
    console.log(num ," is even")
} else {
    console.log(num, " is odd")
}

// Questions

num = prompt("Enter a number: ")

if (num % 5 == 0) {
    console.log(num, " is a multiple of 5")
} else {
    console.log(num, " is not a multiple of 5")
}

// Assignment
let score = prompt("Enter your Marks: ");
let Grade;

if (score> 90) {
    Grade = "A"
    console.log("Your Grade is ", Grade)
} else if (score> 80) {
    Grade = "B"
    console.log("Your Grade is ", Grade)
} else if (score> 70) {
    Grade = "C"
    console.log("Your Grade is ", Grade)
} else if (score> 60) {
    Grade = "D"
    console.log("Your Grade is ", Grade)
} else if (score> 50) {
    Grade = "E"
    console.log("Your Grade is ", Grade)
} else {
    Grade = "F"
    console.log("Your Grade is ", Grade)
}
