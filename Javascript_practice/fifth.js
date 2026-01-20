// Lecture 5 : Functions and Methods

function MyFunction () {
    console.log("Welcome to Apna College");
    console.log("WELCOME TO LEARNING JAVASCRIPT");
}

// MyFunction();

// Arrow Function - part of modern javascript
const PrinHello = () => {
    console.log("Hello from the Arrow FUNC")
}

// PrinHello()

// Takes a string and return number of vowel
let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//let word = prompt(" Enter your word: ");
let count = 0;

function WordCount (word) {
    for (let char of word) {
        if (vowel.includes(char)) {
            count += 1;
            console.log("Vowel Found : ", char)
        }
    }
    return count + " vowels are present"
}

// let test = WordCount(word);
// console.log(test);

// Arrowificaiton of the function

const VowelCount =  (word) => {
    for (let char of word) {
        if (vowel.includes(char)) {
            count += 1;
            console.log("Vowel Found : ", char)
        }
    }
    return count + " vowels are present"
}

// let test = VowelCount(word);
//console.log(test);

// Print Sq of each number
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.forEach( (val) => {
//     val *=val
//     console.log(val)
// })


// Asignment
// Filter studnets marks list to get the new list of 90% and above ones
let stu= [85, 75, 90, 81, 65, 62, 91, 97, 98]
let new_list = stu.filter ((val) => {
    if (val >= 90) {
        return val
    }
})
console.log("The total list is ", stu)
console.log("The toppers list is ", new_list)

// Take number n and then craft new array till that number and then give it's sum
let arr = [];
num = prompt("Enter the number to add till list : ")
for (let i = 0 ; i<= num ; i++) {
    arr[i] = i
}
console.log(arr)
let sum = arr.reduce ((res, cur) => {
    return res + cur
})
console.log(sum)