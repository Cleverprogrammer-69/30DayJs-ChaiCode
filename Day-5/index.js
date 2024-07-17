// Task 1
const isEvenOrOdd = (number) => {
    if(number % 2 == 0){
        return "Even"
    }
    return "Odd"
}
let num1 = 98
console.log(`${num1} is ${isEvenOrOdd(num1)}`)

// Task 2 
const square = (number) => number * number
let num2 = 9
console.log(`Square of ${num2} is ${square(num2)}`)

// Task 3
const findMax = function(num1, num2) {
    return Math.max(num1, num2)
}
console.log(findMax(45, 197) + " is Maximum")

// Task 4 
const stringJoiner = function (str1, str2) {
  return str1.concat(str2);
};
let str1 = "Today's wether is too hot.";
let str2 = " But we're Asians 😎";
console.log(stringJoiner(str1, str2));

// Task 5 
const Sum = (n1, n2) => n1 + n2;
let num3 = 7, num4 = 89
console.log(`${num3} + ${num4} = ${Sum(num1, num2)}`)

// Task 6
const hasChar =  (str, char) => {
  return str.includes(char);
};
let str3 = "Be a Programmer, not a frameworker";
console.log(hasChar(str3, "B"));

// Task 7
const getProduct = (num1, num2 = 1) => num1 * num2
let num5 = 56, num6 = 10
console.log(`Product of ${num5} = ${getProduct(num5)}`)
console.log(`Product of ${num5} and ${num6} = ${getProduct(num5, num6)}`);
 
// Task 8 
const greeting = (person_name, person_age = 20) => `Hello ${person_name} of ${person_age}`
console.log(greeting("John"))
console.log(greeting("Max", 28))

// Task 9
const functionCaller = (fn, number) => {
    if(number <= 0) return
    let result = []
    for(let i = 0; i < number; i++){
        result.push(fn())
    }
    return result
}
let result = functionCaller(()=>greeting("Mario",30),3)
result.forEach(res=>console.log(res))

// Task 10
const factorial = (number) =>{
    let fact = 1;
    for(let i = number; i >= 1; i--){
        fact *= i
    }
    return fact
}
const factorialOfSquare = (fn1, fn2, n) => {
    return fn2(fn1(n))
}
console.log(factorialOfSquare(square, factorial, 2)); // output 24 in this case