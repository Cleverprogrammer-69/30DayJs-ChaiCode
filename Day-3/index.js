// Task 1
let num1 = 9
if ( num1 === 0 ){
    console.log(`${num1}, it is zero!`)
} else if ( num1 > 0){
    console.log(`${num1}, it is positive number.`)
} else {
    console.log(`${num1}, it is negative number.`)
}

// Task 2
let age = 21
if ( age >= 18 ){
    console.log(`You're ${age}, eligible to vote.`)
} else {
    console.log(`You're ${age}, not eligible to vote.`);
}

// Task 3
let n1 = 300, n2 = 78, n3 = 98;
if( n1 > n2){
    if( n1 > n3 ){
        console.log(`${n1} is largest`)
    } else {
        console.log(`${n3} is largest`)
    }
} else {
    if( n2 > n3 ){
        console.log(`${n2} is largest`)
    }
    else {
        console.log(`${n3} is largest`)
    }
}

// Task 4
let day = 6
switch (day) {
  case 1:
    console.log("Its Monday.");
    break;
  case 2:
    console.log("Its Tuesday.");
    break;
  case 3:
    console.log("Its Wednesday.");
    break;
  case 4:
    console.log("Its Thursday.");
    break;
  case 5:
    console.log("Its Friday.");
    break;
  case 6:
    console.log("Its Saturday.");
    break;
  case 7:
    console.log("Its Sunday.");
    break;
  default:
    console.log("Invalid day.");
}

// Task 5
let score = 600;
let grade = ''
switch (true) {
  case score >= 90 && score <=100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score < 60:
    grade = "F";
    break;
  default:
    console.log("Score range is 0 to 100");
}
grade !== "" && console.log(`Your grade is ${grade}`)

// Task 6
let number = 100
number % 2 == 0 ? console.log(`${number} is Even`) : console.log(`${number} is Odd`)

// Task 7
let year = 2000;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

























