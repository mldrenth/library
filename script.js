const newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", function (){
    openForm();
} )
const undoButton = document.querySelector("#undo-button");
undoButton.addEventListener("click", function() {
  recoverLibrary()
})
const cardContainer = document.querySelector("#card-div");
const popupDiv = document.querySelector("#popup-div");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (){
  createNewBook(); closeForm(); document.querySelector("#new-book-form").reset();
} )

let myLibrary = [];
let mySavedLibrary = [];

function openForm() {
  popupDiv.style.display = "block";
}

function closeForm() {
  popupDiv.style.display = "none";
}

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
  }
 function createNewBook(){
     let newBookTitle = document.querySelector("#title-input").value;
     let newBookAuthor = document.querySelector("#author-input").value;
     let newBookPages = document.querySelector("#pages-input").value;
     let newBookRead = document.querySelector("#read-input").checked;
    //  if (newBookRead == true) {
    //    newBookRead = "Read";
    //  }
    //  else {
    //    newBookRead = "Not Read";
    //  }
     let newBook = new Book (newBookTitle, newBookAuthor, newBookPages, newBookRead);
     addBookToLibrary(newBook);
 }

  function addBookToLibrary (newBook) {
      myLibrary.push(newBook);
      mySavedLibrary.push(newBook);
      updateLibrary(myLibrary);
  }
  function updateLibrary(library) {
    resetLibraryDisplay();
    for (let part of library) {
      createCard(part);
    }}
   function resetLibraryDisplay() {
     cardContainer.innerHTML = "";
  }
  function createCard(newBook) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "gray";
    newDiv.style.margin ="10px 10px 10px 10px";
    newDiv.style.height ="200px";
    newDiv.style.width = "200px";
   
    for (let x in newBook) {
      if (x === "read") {
        if (newBook.read === true) {
        let newLine = document.createElement("p");
        newLine.innerHTML = "Read";
        newDiv.appendChild(newLine);}
        else {
        let newLine = document.createElement("p");
        newLine.innerHTML = "Not Read";
        newDiv.appendChild(newLine);}
        }
      
      else {
        
      let newLine = document.createElement("p");
      newLine.innerHTML = newBook[x];
      newDiv.appendChild(newLine);}
    }
    
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Book";
    removeButton.addEventListener("click", function (){
      removeEntry(newBook)
  } )
    newDiv.appendChild(removeButton);

    let changeButton = document.createElement("button");
    changeButton.innerHTML = "Change Read Status";
    changeButton.addEventListener("click", function () {
      changeReadStatus(newBook)
    })
    newDiv.appendChild(changeButton);

    document.getElementById("card-div").appendChild(newDiv);
  }

  function removeEntry(entry) {
    const index = myLibrary.indexOf(entry);
    if (index > -1) {
      myLibrary.splice(index,1);
    }
    updateLibrary(myLibrary);

  }
  function recoverLibrary() {
    updateLibrary(mySavedLibrary);
    myLibrary = [...mySavedLibrary];
  }
  function changeReadStatus(entry) {
    if (entry.read) {
      entry.read = false;
    }
    else {
      entry.read = true;
    }
    updateLibrary(myLibrary);}
    