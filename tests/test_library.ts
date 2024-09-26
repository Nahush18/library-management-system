import { Library } from "../src/library";

describe("Library Management System", () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it("should add a book to the library", () => {
    const book = { id: "123", title: "Test Book", author: "Author", year: 2021 };
    library.addBook(book);
    expect(library.getAvailableBooks()).toContain(book);
  });

  it("should allow a user to borrow a book if it's available", () => {
    const book = { id: "123", title: "Test Book", author: "Author", year: 2021 };
    library.addBook(book);
    library.borrowBook("123");
    expect(library.getAvailableBooks()).not.toContain(book);
  });
  
  it("should throw an error if the book is already borrowed", () => {
    const book = { id: "123", title: "Test Book", author: "Author", year: 2021 };
    library.addBook(book);
    library.borrowBook("123");
    expect(() => library.borrowBook("123")).toThrowError("Book is already borrowed");
  });

  it("should allow a user to return a borrowed book", () => {
    const book = { id: "123", title: "Test Book", author: "Author", year: 2021 };
    library.addBook(book);
    library.borrowBook("123");
    library.returnBook("123");
    expect(library.getAvailableBooks()).toContain(book);
  });
  
  it("should throw an error if the book was not borrowed", () => {
    expect(() => library.returnBook("999")).toThrowError("Book not found");
  });

  it("should list all available books in the library", () => {
    const book1 = { id: "123", title: "Test Book 1", author: "Author 1", year: 2021 };
    const book2 = { id: "456", title: "Test Book 2", author: "Author 2", year: 2022 };
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getAvailableBooks()).toEqual([book1, book2]);
  });
  
});


