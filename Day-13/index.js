// Task 1
import { Sum } from "./sum.js";
console.log(Sum(56, 23))

// Task 2
import { Person } from "./person.js";
console.log(`ID: ${Person.getId()}, Name: ${Person.getName()}, Hobbies: ${Person.getHobbies()}`)

// Task 3
import { createEmployee, getAllEmployees, getEmployeeById } from "./employee.js";
const employees = getAllEmployees()
employees.length !== 0 && console.log(employees)
try {
  const employee = getEmployeeById(100);
  console.log(employee.name);
} catch (error) {
  console.error(error.message);
}
try {
    const newEmployee = createEmployee({
        _id:"105",
        name: "James",
        designation: "Human Resource Intern",
        department: "Human Resource"
    })
    console.log(newEmployee)
} catch (error) {
    console.error(error.message)
}
// Task 4
import getFruits from "./fruits.js";
console.log(getFruits().find(fruit => fruit === "Banana"))

// Task 5
import * as LibraryModule from './library.js'
console.log(LibraryModule.getAllBooks())
console.log(`Top pick for you today: '${LibraryModule.getRandomBook()}'`)

// Task 6
import _ from "lodash";
const cities = ["Lahore", "Islamabad", "Mansehra", "Delhi", "Kabul", "Tashkent", "Lahore", "Delhi"]
const uniqueCities = _.uniq(cities)
console.log(uniqueCities)

// Task 7
import axios from "axios";
async function postGetter (id) {
  const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(post.data)
}
postGetter(2)













