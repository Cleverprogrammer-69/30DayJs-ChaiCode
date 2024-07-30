// Task 1
function outerFunc (){
    const message = "Hey, how are you ?"
    function innerFunc(){
        console.log(message)
    }
    return innerFunc
}
const result1 = outerFunc()
result1()

// Task 2
function incrementCounter(){
    let count = 0
    return function(){
        return console.log(++count)
    }
}
const myCounter = incrementCounter()
myCounter()
myCounter()
myCounter()

// Task 3
const uniqueIdsGenerator = () => {
    const sample = '0123456789'
    let generatedId = ''
    for (let i = 0; i <= 4; i++) {
        generatedId += sample[Math.floor(Math.random() * 9)]
    }
    return function(){
        return console.log(generatedId++)
    }
}
let uniqueId1 = uniqueIdsGenerator()
uniqueId1()
uniqueId1()
uniqueId1()

// Task 4
function greet(){
    let name = "Jordan"
    return function(){
        return console.log(`Hello, ${name}. Where are you from ?`)
    }
}
let greeting1 = greet()
greeting1()

// Task 5
function functionGenerator(num){
    let functions = []
    for (let i = 0; i < num; i++) {
        functions.push(() => console.log(`Function no ${i}, index is ${i}`))
    }
    return functions
}
const myFuncs = functionGenerator(6)
myFuncs.forEach((fn)=>fn())

// Task 6
const itemModule = () => {
    let items = ["Korma", "Biryani"]
    return{
        add: (item) => items.push(item),       
        remove: (item) => items = items.filter(_item => item !== _item),
        list: () => items.forEach(item => console.log(item))
    }
}
const foodCollection1 = itemModule()
foodCollection1.add("Kulfa")
foodCollection1.list()
foodCollection1.remove("Korma")
foodCollection1.list()

// Task 7

function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

// Task 8
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(20))