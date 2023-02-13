// import { useContext } from "react";
// import BooksContext from "../context/books";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

// function useBooksContext() {
//   return useContext(BooksContext);
// }
// use customized hooks
function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
