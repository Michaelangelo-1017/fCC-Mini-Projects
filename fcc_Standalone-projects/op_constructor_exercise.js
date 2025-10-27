function Book(array){
    if(!new.target){
        throw Error('You have to declare this with the "new" keyword.')
    }
    
    this.info = function(){
        const booksSentenceArr = array.map((book,index) => {
        const {title, author, pages, haveRead} = book;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead
        return `Book ${++index} : ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? 'have read' : 'not read yet'}`;
    })
    return booksSentenceArr.join('\n')}
}

const richDadPoorDad = new Book([{title: 'Rich Dad Poor Dad',author:'Robert Kiyosaki',pages: 259,haveRead: true}, {title: 'Harry Potter',author:'J.K Rowling',pages: 45,haveRead: false},{title: 'The Lean Startup',author:'Eric Ries',pages: 190,haveRead: false},{title: 'How to win friends',author:'Dale Carnegie',pages: 178,haveRead: true}]);
console.log(richDadPoorDad.info());