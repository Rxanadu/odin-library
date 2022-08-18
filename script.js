let myLibrary = [];

var addModal = document.getElementById("add-modal");
var closeModalBtn = document.querySelector(".close");
var openModalBtn = document.querySelector("#open-modal");
var addBookBtn = document.getElementById("add-book");

//reference form elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

var tempBook = new Book("test", "hello", 55);
myLibrary.push(tempBook);
console.log(myLibrary);
console.log(tempBook.title);

displayBooks();

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here

  if (
    titleInput.value != "" &&
    authorInput.value != "" &&
    pagesInput.value != ""
  ) {
    newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);    
    myLibrary.push(newBook);

    displayBooks();
    closeAddBookForm();
  } else {
    alert("Please fill out all fields!");
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function displayBooks() {
  let libraryList = document.querySelector(".library-list");

  //clear list of books
  removeAllChildNodes(libraryList);

  for (let book in myLibrary) {
    // display book
    let libraryBook = document.createElement("li");
    libraryBook.classList.add("book");

    //create child elements for book
    let bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    let bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    let bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    let removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove");
    removeBookBtn.addEventListener("click", function(){
        myLibrary.splice(book, 1);
        displayBooks();
        console.log(myLibrary.length);
    });

    //  add elements to book    
    bookTitle.innerHTML = "Title: " + myLibrary[book].title;
    bookAuthor.innerHTML = "Author: " + myLibrary[book].author;
    bookPages.innerHTML = "Pages: " + myLibrary[book].pages;
    removeBookBtn.innerHTML = "Remove";

    libraryBook.appendChild(bookTitle);
    libraryBook.appendChild(bookAuthor);
    libraryBook.appendChild(bookPages);
    libraryBook.appendChild(removeBookBtn);

    libraryList.appendChild(libraryBook);
  }
}

function removeBook(){
    //TODO: get reference to 
    console.log("hi!");
    // remove book from list

    // re-draw library list
    // displayBooks();
}

function openAddBookForm() {
  addModal.style.display = "block";
}

function closeAddBookForm() {
  addModal.style.display = "none";
  clearAddBookFormFields();
}

function clearAddBookFormFields() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

window.addEventListener("load", displayBooks);

openModalBtn.addEventListener("click", openAddBookForm);

closeModalBtn.addEventListener("click", closeAddBookForm);

addBookBtn.addEventListener("click", addBookToLibrary);
