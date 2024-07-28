const Library = {
  name: "Whispering pages",
  books: [
    {
      _id: "001",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      _id: "002",
      title: "The Power of Now",
      author: "Eckhart Tolle",
    },
    {
      _id: "003",
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
    },
  ],
};

const getAllBooks = () => {
    return Library.books
}

const getRandomBook = () => {
    const randomIndex = Math.floor(Math.random()*3)
    console.log(randomIndex)
    return Library.books[randomIndex].title;
}

export {Library, getAllBooks, getRandomBook}