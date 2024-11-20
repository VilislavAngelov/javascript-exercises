function Book(bookName, author, pagesNum, isRead) {
    this.bookName = bookName;
    this.author = author;
    this.pagesNum = pagesNum;
    this.isRead = isRead;
    this.info = function() {
        return `${bookName} by ${author}, ${pagesNum}, ${isRead}`
    }
}

const book1 = new Book("Minecraft Book", "Notch", 327, "not yet...");

console.log(book1.info());
