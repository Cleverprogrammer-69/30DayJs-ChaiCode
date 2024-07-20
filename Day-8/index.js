// Task 1
let person_name = "Abdullah"
let person_age = 21
console.log(`My name is ${person_name} and I'm ${person_age}.`)

// Task 2
let about = `My name is ${person_name} and I'm ${person_age}.\nI'm full-stack developer (MERN).\nI'm currently enrolled in 30-day js challenge by "chai aur code"`;
console.log(about)

// Task 3
let numbers = [23, 31, 9, 5, 7, 0, -1]
const [ num1 , num2 ] = numbers
console.log(`First and Second numbers are ${num1}, ${num2}`)

// Task 4 
let book = {
  title: "The Secret",
  author: "Rhonda Byrne",
  year: 2006,
};
const { title, author } = book
console.log(`'${title}' is written by '${author}'`)

// Task 5
let extendedArray = [...numbers, 100, 1000, 10000]
console.log(extendedArray) 

// Task 6
const sum = (...numbers) => {
    let sum = numbers.reduce((prev, curr) => prev + curr);
    return sum
}
console.log(`Sum = ${sum(3, 4, 2, 1, 100, -11)}`)

// Task 7 
const product = (n1, n2 = 1) => n1 * n2
console.log(`Product = ${product(4)}`)
console.log(`Product = ${product(4, 12)}`);

// Task 8
let isAdmin = true
let password = "abd1234@A"
let email = "abdullah2910@gmail.com"

let user1 = {
    username: person_name,
    email,
    password,
    isAdmin,
    adminStatus: function(){
        return this.isAdmin
    }
}
console.log(user1)
console.log(`Admin Status: ${user1.adminStatus()}`)

// Task 9
let prop1 = "phone"
let prop2 = "permissions"
 isAdmin = false;
 password = "jon341#@A";
 email = "johnathan342@gmail.com";
let user2 = {
    username: "Johnathan",
    email,
    password,
    isAdmin,
    [prop1]: 3418100090,
    [prop2]: !isAdmin ? ["Enter data", "Delete data"] : "Can do All functions"
}
console.log(user2)