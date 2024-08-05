// Task 1
let jsRegex = /JavaScript/g
let jsString = "JavaScript is web programming language, I love JavaScript, You can't fully discover the JavaScript"
let match = jsString.match(jsRegex)
console.log(match?.length)

// Task 2
const numbers = "I have 1 year experience and I know 3 programming languages.";
const digitRegex = /\d+/g; 
const digitMatches = numbers.match(digitRegex);
console.log(digitMatches);

// Task 3
let text = "Today is a Rainy day in Lahore.";
const capitalWordRegex = /\b[A-Z][a-z]*\b/g;
const capitalWordMatches = text.match(capitalWordRegex);
console.log(capitalWordMatches);

// Task 4
text = "There are 12 dozens of bananas and total 55 kilos of apples in that garage";
const digitSequenceRegex = /\d+/g;
const digitSequenceMatches = text.match(digitSequenceRegex);
console.log(digitSequenceMatches);

// Task 5
const phoneNumber = "sdfa(123) 456-7890";
const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const phoneMatch = phoneRegex.exec(phoneNumber);
console.log(`Area code: ${phoneMatch[1]}, Central office code: ${phoneMatch[2]}, Line number: ${phoneMatch[3]}`);

// Task 6
let myEmail = "abd123@gmail.com"
const emailRegex = /(\w+)@([\w.]+)/
const emailMatch = myEmail.match(emailRegex)
console.log(`Username: ${emailMatch[1]}, Domain: ${emailMatch[2]}`)

// Task 7
const greeting = "Hey, how are you?"
const wordRegex = /^Hey/
const wordMatch = greeting.match(wordRegex)
console.log(wordMatch?.slice(0))

// Task 8
const questionRegex = /([?])$/
const questionMatch = greeting.match(questionRegex)
console.log(questionMatch?.slice(1))

// Task 9
const password = "AabC@123$";
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const isPasswordValid = passwordRegex.test(password);
console.log(isPasswordValid); 

// Task 10
const url = "leetcode.com";
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
const isUrlValid = urlRegex.test(url);
console.log(isUrlValid);

