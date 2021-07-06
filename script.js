const newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", function (){
    createNewBook()
} )


let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(read) {
      if (this.read == true) {
        console.log(title + " by " + author + ", " + pages + " pages, read.")
      }
      else {
        console.log( title + " by " + author + ", " + pages + " pages, not read yet.")
      }
      
    }
  }
 function createNewBook(){
     let newBookTitle = window.prompt("Enter the book's title:")
     let newBookAuthor = window.prompt("Enter the book's author:")
     let newBookPages = window.prompt("Enter the book's pages:")
     let newBookRead = true;
     let newBook = new Book (newBookTitle, newBookAuthor, newBookPages, newBookRead);
     addBookToLibrary(newBook);
 }

  function addBookToLibrary (newBook) {
      myLibrary.push(newBook);
  }