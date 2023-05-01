// Create a function called getAvailableBooks that returns an array of all available
// books.
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

function getAvailableBooks(){
    let availableBooks= [];
    for (let x=0; x<books.length; x++){
        availableBooks.push(books[x].title)
    }
    return availableBooks
}
console.log(getAvailableBooks())



// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(){
   let getBooksByAuthor = [];
   for (let i=0; i<books.length; i++){
    if(books.author === books.title){
       return getBooksByAuthor.push(books.title)
    }
   }
   return getBooksByAuthor;
}
console.log(getBooksByAuthor())

// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(boooks){
    let library = [];
    let newbook=[{
        title: "Born a crime", author:"Trevor Noah", publicationYear: 2005, isAvailable:true
    }]
    for (let i=0; i<books.length; i++){
        library.push(newbook)
        library.push(books)
    }
    return library;

}
console.log(addNewBook());




// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(){
    let checkout = books.filter(book =>{
        if (books.isAvailable===true){
            return books.isAvailable === false
        }
        else{
            console.log("The books is not available")
        }
    })
}
checkoutBook();


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(){
    let checkout = books.filter(book =>{
        if (books.title===books.isAvailable){
            return books.isAvailable === true
        }
        else{
            console.log("That books does not belong to the library")
        }
    })
}
returnBook();

