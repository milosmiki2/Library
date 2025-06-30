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
const input = document.querySelector("input");
const main = document.querySelector(".main");
const grid = document.querySelector(".grid");
const body = document.querySelector("body");

newBook.addEventListener("click", popup);
addBook.addEventListener("click", addBookToLibrary);

function popup() {
  form.style.display = "flex";
  grid.classList.add("blur");

  body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("exit")) {
      form.style.display = "none";
      grid.classList.remove("blur");
      form.reset();
    }
  });
}

function addBookToLibrary(event) {
  if (form.checkValidity() === true) {
    event.preventDefault();
    crypto.randomUUID();

    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read;
    if (bookRead.checked) {
      read = "true";
    } else read = "false";
    myLibrary.push(new Book(title, author, pages, read));

    const card = document.createElement("div");
    const cardAuthor = document.createElement("p");
    const cardTitle = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("button");
    const cardRemove = document.createElement("button");
    card.classList.add("card");
    cardRead.classList.add("read");
    cardRemove.classList.add("remove");
    cardRemove.textContent = "Remove";
    main.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    card.appendChild(cardRemove);

    cardRemove.addEventListener("click", () => {
      card.remove();
    });

    myLibrary.forEach((book) => {
      cardRead.addEventListener("click", () => {
        cardRead.classList.toggle("not-read");
        if (cardRead.textContent === "Not Read") {
          cardRead.textContent = "Read";
          book.read = "true";
        } else cardRead.textContent = "Not Read";
        book.read = "false";
      });

      let uuid = crypto.randomUUID();
      card.style.display = "flex";
      cardTitle.textContent = '" ' + book.title + ' "';
      cardAuthor.textContent = book.author;
      cardPages.textContent = book.pages;
      if (book.read === "false") {
        cardRead.classList.add("not-read");
        cardRead.textContent = "Not Read";
      } else {
        cardRead.classList.remove("not-read");
        cardRead.textContent = "Read";
      }
    });
    form.style.display = "none";
    grid.classList.remove("blur");

    form.reset();
  }
}
