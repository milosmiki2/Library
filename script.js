function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const myLibrary = [];

const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const newBook = document.querySelector(".new-book-button");
const addBook = document.querySelector(".add-book-button");
const form = document.querySelector("form");

function addBookToLibrary(event) {
  if (form.checkValidity() === true) {
    event.preventDefault();
    crypto.randomUUID();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read;
    if (bookRead.checked) {
      read = "Read";
    } else read = "Not read";
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
  }
}

addBook.addEventListener("click", addBookToLibrary);
