class Book {
  constructor(firstName, lastName, title, publicationYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.publicationYear = publicationYear;
    this.author = firstName + " " + lastName;
  }
}

module.exports = Book;
