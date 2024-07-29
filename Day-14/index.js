// Task 1
class Person{
    constructor(name, age){
        this._name = name
        this._age = age
        this._firstName = name
        this._lastName = ""
    }
    greet(){
        return `Hello ${this._name}, you are ${this._age} Years old!`
    }

// Task 2 method
    set age(value){
        this._age = value
    }

// Task 5 method
    static greet(name, age){
        return `Hey ${name}, of age ${age}`
    }

// Task 7 method
    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }

// Task 8 method
    set updateFullname(value){
        const [firstName, lastName] = value.split(" ")
        this._firstName = firstName
        this._lastName = lastName
    }

}

const person1 = new Person("Stalin", 45)
console.log(person1.greet())

// Task 2
person1.age = 2
console.log(person1.greet())

// Task 3
class Student extends Person{
// Task 6 property
    static noOfStudents = 0

    constructor(name, age, studentId){
        super(name, age)
        this._studentId = studentId

// Task 6 property increment
        Student.noOfStudents += 1
    }
    get studentId(){
        return this._studentId
    }

// Task 4 method
    greet(){
        return `${super.greet()}, your StudentId: ${this.studentId}`;
    }

}
const student1 = new Student("Farhan", 21, "2203")

// Task 4
console.log(student1.greet())

// Task 5
console.log(Person.greet("Huma", 22))

// Task 6
console.log(Student.noOfStudents)

// Task 7
console.log(person1.fullName)

// Task 8
person1.updateFullname = "Stalin Ramchov"
console.log(person1.fullName)

