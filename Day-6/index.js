// Task 1
let numbers = [1, 2, 3, 4, 5]
console.log( numbers )

//Task 2
console.log(`First element is ${ numbers[0] }`) // first element of array
console.log(`Last element is ${ numbers[numbers.length - 1] }`) // last element of array

// Task 3
numbers.push(6)
console.log( `After push ${numbers}` )

// Task 4
numbers.pop()
console.log( `After pop ${numbers}` )

// Task 5
numbers.shift()
console.log( `After shift ${numbers}` )
 
// Task 6 
numbers.unshift(1)
console.log( `After unshift ${numbers}` )

// Task 7
let doubledNumbers = numbers.map( num => 2*num)
console.log( `Double numbers are ${doubledNumbers}` )

// Task 8
let evenNumbers = numbers.filter( num => num % 2 == 0)
console.log( `Even numbers are ${evenNumbers}` )

// Task 9
let sum = numbers.reduce(( previousNumber, currentNumber ) => {
    return previousNumber + currentNumber;
})
console.log(`Sum of numbers is ${ sum }`)

// Task 10 
for (const num of numbers) {
    console.log( num )
}

// Task 11
doubledNumbers.forEach( num => {
    console.log( num )
})

// Task 12
const matrix = [
    [4, 4, 2],
    [2, 5, 8],
    [8, 78]
]
console.log( matrix )

// Task 13 
console.log( matrix [2] [1] ) // 78