
let catelog = []
let totalBooks = prompt("Enter the no.of books to be entered")

for (let i=1;i<=totalBooks;i++){
    let book = prompt(`Enter ${i} book`)
    let author = prompt(`Enter ${i} author`)
    let genre = prompt(`Enter ${i} genre`)    
    addbook(book,author, genre) 
if(i==totalBooks)
 {
    console.log("Entered required no. of books")
    break;
 }   

}


addbook( "book3", "author3", "Adventure");
checkoutBook("book1")
returnBook("book2")
listBooks()


//addBook(title, author, genre): Adds a new book to the catalog.
//To marks a book as unavailable, I have added a boolean variable 'available' = true at the first instance

function addbook(title, author, genre){
    let newbooks= [];
    newbooks[0] = title;
    newbooks[1] = author;
    newbooks[2] = genre;
    newbooks[3] = true;
   catelog.push(newbooks)
}

//checkOutBook(title): Marks a book as unavailable. 
function checkoutBook(title){
    for (let i=0;i<catelog.length;i++){
        if (catelog[i][0]==title){
            catelog[i][3]=false
            console.log(`Henceforth ${title} is unavailable`)   
            break; 
        }        
    }
    
}

//returnBook(title): Marks a book as available.
function returnBook(title){
    for (let i=0;i<catelog.length;i++){
        if (catelog[i][0]==title){
            catelog[i][3]=true
            console.log(`Henceforth ${title} is available`)
            break;
        }        
    }
   
    
}


//listBooks(): Lists all the books in the catalog with their details
function listBooks(){   
console.log(catelog)
}