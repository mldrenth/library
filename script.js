const newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", function (){
    createNewBook()
} )
const cardContainer = document.querySelector("#card-div");

let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
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
      createCard(newBook);
  }

  function createCard(newBook) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "gray";
    newDiv.style.margin ="10px 10px 10px 10px";
    newDiv.style.height ="200px";
    newDiv.style.width = "200px";
    let txt = ""
    for (let x in newBook) {
      txt += "<br>"+newBook[x]+"</br>";
    }
    newDiv.innerHTML = txt;
    document.getElementById("card-div").appendChild(newDiv);
  }