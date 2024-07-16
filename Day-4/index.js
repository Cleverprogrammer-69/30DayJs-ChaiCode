// Task 1
for( let i = 1; i <= 10; i++ ){
    console.log(i)
}

// Task 2
let num1 = 5
for( let i = 1; i<=10; i++ ){
    console.log(`${num1} X ${i} = ${num1 * i}`)
}

// Task 3
let w1 = 1
let sum = 0;
while( w1 <= 10 ){
    sum += w1;
    w1++;
}
console.log(`Sum is = ${sum}`)

// Task 4
let w2 = 10
while ( w2 >= 1 ){
    console.log(w2);
    w2--;
}

// Task 5
let d1 = 1
do{
    console.log(d1)
    d1++
} while ( d1 <= 5 );

// Task 6
let fact = 1
let num = 3
do{
    fact *= num
    num--
}while( num >= 1 );
console.log(`Factorial = ${fact}`)

// Task 7
for(let i = 0; i <= 4; i++ ){
    let stars = ""
    for(let j = 0; j<= i ; j++){
        stars += "*"
    }
    console.log(stars)
}





