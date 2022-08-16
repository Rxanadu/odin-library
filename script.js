let myLibrary = [];

var addModal = document.getElementById("add-modal");
var closeModalBtn = document.querySelector(".close");
var addBookBtn = document.getElementById("add-btn");

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  newBook = new Book();
  myLibrary.push(newBook);
}

function displayBooks(){
    for(let book in myLibrary){
        // display book
        console.log(book);
    }
}

function openAddBookForm(){
    addModal.style.display = "block";
}

function closeAddBookForm(){
    addModal.style.display = "none";
}

addBookBtn.addEventListener("click", openAddBookForm);

closeModalBtn.addEventListener("click", closeAddBookForm);