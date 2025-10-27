const books = [
  {
    title: "Harry Potter and the Sorceror's Stone",
    authorName: "J.K Rowlings",
    releaseYear: 1997
  },
  {
    title: "Heroes of Olympus",
    authorName: "Rick Riordan",
    releaseYear: 2004
  },
  {
    title: "Rich Dad Poor Dad",
    authorName: "Robert Kiyosaki",
    releaseYear: 1990
  },
  {
    title: "Percy Jackson",
    authorName: "Rick Riordan",
    releaseYear: 2007
  }
];

console.log(books);
console.table(books)

function sortByYear(book1,book2){
  if (book1.releaseYear < book2.releaseYear ){
    return -1;
  }
  else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }
  else{
    return 0;
  }
};

let filteredBooks = books.filter((book)=>book.releaseYear > 2000);

filteredBooks.sort(sortByYear);
books.sort(sortByYear);
console.log(books);
console.log(filteredBooks)