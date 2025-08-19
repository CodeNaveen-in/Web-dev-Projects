// Lecture 4 : Array


// Of is used because In will take indices rather than value
let marks = [85, 97, 44, 37, 76, 60];
let marks_len = marks.length;
let sum = 0;
for (let mark of marks) {
    console.log("mark is :", mark)
    sum += mark
    console.log("sum is :", sum)
}

let avg_mark = sum/marks_len
console.log(`The marks sum is ${sum} and the length is ${marks_len}`)
console.log(`The no of students is ${marks_len} and the average marks are ${avg_mark}`)

// Offer update
let price = [250, 645, 300, 900, 50];
let price_len = price.length;
let i = 0;

console.log (`Original price is ${price}`)
for (let p of price) {
    console.log("price is :", p)
    let disc = 0.9 * p
    price[i] = disc
    i++
    console.log(" new price is :", p)
}

console.log (`Discounted price is ${price}`)

// Using splice
let arr = [0, 2, 3 ,4 ,5 ,6 ,7, 8]
arr.splice(2, 2, 101, 102) // (start index, delete count, new replacement) - REPLACE
console.log(arr)
arr.splice(2, 0, 666) // (start index, delete count, new replacement) - ADD
console.log(arr)
arr.splice(5) // (start index, delete count, new replacement) - DELETE
console.log(arr)

// Assignment 
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comp);
comp.shift();
comp.splice(1, 1, "Ola");
comp.push("Amazon");
console.log(comp)