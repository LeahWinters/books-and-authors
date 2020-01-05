var Book = require('./book');

class Author {
  constructor(authorInfo) {
    this.first = authorInfo.first;
    this.last = authorInfo.last;
    this.books = [];
  }
  write(title, publicationYear) {
    var aNewBook = new Book(this.first, this.last, title, publicationYear);
    this.books.push(aNewBook);
    return aNewBook;
  }
}

module.exports = Author;
