// Task 1
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
}

// Task 2
console.log(book.title)
console.log(book.author)

// Task 3
book.get = function() {
    return `${this.title} is written by ${this.author}`
} 
console.log(book.get())

// Task 4
book.updateYear = function (year) {
    this.year = year
    return this.year
}
console.log(book.updateYear(2018))

// Task 5 
let library = {
  name: "Whispering Pages",
  books: [
    {
      title: "Rich Dad's Guide To Investing",
      author: "Robert T. Kiyosaki",
      year: 2000
    },
    {
      title: "Eat That Frog",
      author: "Brian Tracy",
      year: 2001,
    },
    {
      title: "The Secret",
      author: "Rhonda Byrne",
      year: 2006
    },
  ],
};
console.log(`Library name is ${library.name}`)

// Task 6
console.log(library.name)
library.books.forEach((book, index) => {
    console.log(`${index + 1}: ${book.title}`)
})

// Task 7
book.getAuthorAndYear = function () {
    return `${this.title} Published in ${this.year}`
}
console.log(book.getAuthorAndYear());

// Task 8
for (const key in book) {
    console.log(`${key}: ${book[key]}`)
}

// Task 9
console.log(Object.keys(book))
console.log(Object.values(book))