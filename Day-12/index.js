// Task 1
function errorThrower(){
    throw new Error("Error fetching user details...")
}
function errorHandler(){
    try {
        errorThrower()
    } catch (error) {
        console.error("Error : ", error.message)
    }
}
errorHandler()

// Task 2
function calcQuotient (a, b){
   try {
    if(b === 0){
        throw new Error("Division by zero not possible.");
        
    }
     return a / b;
   } catch (error) {
     console.error("Something went wrong: ", error)
   }
}
console.log(calcQuotient(9, 0))

// Task 3
function calcRemainder (a, b){
    try {
        if(b === 0){
            throw new Error("Denominatore can not be zero.")
        }
        console.log(a % b)
    } catch (error) {
        console.error("Something went wrong: ", error);
    } finally{
        console.log("calcRemainder function is ended here.")
    }
}
calcRemainder(64, 0)

// Task 4
class myError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong."
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
    }
}
function loginUser(){
    throw new myError(401, "User is not authorized.")
}
try {
  loginUser();
} catch (error) {
  console.error(`Error: ${error.message}, Status Code: ${error.statusCode}`);
}

// Task 5
function createPatientValidator(data) {
    if(Object.values(data).some(field => field.trim() === "" || !field)){
        throw new myError(400,"All fields are required.")
    }
    return true
}
   
function createPatient(){
    try {
        createPatientValidator({
            _id: "1",
            name: "Belf",
            phone: ""
        })
} catch (error) {
    console.log(error.message)
}}
createPatient()

// Task 6

const myPromise1 = new Promise((resolve, reject)=>{
    if(Math.floor(Math.random()*10) <= 5){
        resolve("Promise1 has resolved")
    }
    reject("Promise1 has rejected") 
}
)
function callingPromise1() {
  myPromise1
    .then((response) => {
      console.log(response); 
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
callingPromise1();

// Task 7
const Promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(Math.floor(Math.random()*100) > 90){
            resolve("Promise2 has resolved.")
        }
        reject("Promise2 has rejected.")
    }, 3000);
})
async function callingPromise2() {
  try {
    const response = await Promise2
    console.log(response)
  } catch (error) {
    console.log("Error: ", error)
  }
}
callingPromise2()

// Task 8
function todoFetcher() {
   fetch("https://jsonplaceholder.typicode.com/tods/3")
     .then((response) =>{
        if(!response.ok){
            throw new Error("Invalid URL of todos.")
        }
        return response.json()
     })
     .then((json) => console.log(json))
     .catch((error)=> console.log("An error occurred: ", error));
}

todoFetcher();

// Task 9

async function albumFetcher() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albms/4")
    if(!response.ok){
      throw new Error("Invalid URL of albums.",)
    }
    return await response.json()
  } catch (error) {
    console.error("An error occurred: ", error)
  }
}
async function albumLogger(){
    const album = await albumFetcher()
    album && console.log(album)
}
albumLogger()