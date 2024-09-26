export interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    isBorrowed?: boolean;
  }
  
  export class Library {
    private books: Book[] = [];
  
    addBook(book: Book): void {
      this.books.push({ ...book, isBorrowed: false });
    }
  
    getAvailableBooks(): Book[] {
      return this.books.filter(book => !book.isBorrowed);
    }

    borrowBook(bookId: string): void {
        const book = this.books.find(b => b.id === bookId);
        if (!book || book.isBorrowed) {
          throw new Error("Book is already borrowed or not available");
        }
        book.isBorrowed = true;
      }

      returnBook(bookId: string): void {
        const book = this.books.find(b => b.id === bookId);
        if (!book || !book.isBorrowed) {
          throw new Error("Book not found or not borrowed");
        }
        book.isBorrowed = false;
      }
      
  }

  
  