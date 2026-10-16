import Display from "./components/Display";
import "./App.css";

const books = [
  {
    bookname: "The Alchemist",
    authorname: "Paulo Coelho",
    pages: 208,
    price: 299,
    img: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
  },
  {
    bookname: "Atomic Habits",
    authorname: "James Clear",
    pages: 320,
    price: 499,
    img: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    bookname: "Rich Dad Poor Dad",
    authorname: "Robert T. Kiyosaki",
    pages: 336,
    price: 399,
    img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    bookname: "The Psychology of Money",
    authorname: "Morgan Housel",
    pages: 256,
    price: 399,
    img: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    bookname: "Ikigai",
    authorname: "Hector Garcia",
    pages: 208,
    price: 299,
    img: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    bookname: "Think and Grow Rich",
    authorname: "Napoleon Hill",
    pages: 320,
    price: 249,
    img: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
  },
  {
    bookname: "The Power of Now",
    authorname: "Eckhart Tolle",
    pages: 236,
    price: 349,
    img: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"
  },
  {
    bookname: "The 7 Habits of Highly Effective People",
    authorname: "Stephen R. Covey",
    pages: 464,
    price: 599,
    img: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg"
  },
  {
    bookname: "Do Epic Shit",
    authorname: "Ankur Warikoo",
    pages: 224,
    price: 299,
    img: "https://covers.openlibrary.org/b/isbn/9789391165482-L.jpg"
  },
  {
    bookname: "Wings of Fire",
    authorname: "A. P. J. Abdul Kalam",
    pages: 180,
    price: 250,
    img: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg"
  }
];

function App() {

  return (
    <Display books={books}/>
  )
}

export default App
