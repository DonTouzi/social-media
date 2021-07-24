import React from "react";
import Book from "./Book";
import { BOOKS } from "../Data/data";

class BookList extends React.Component {
  render() {
    return (
      <>
        <h1>Book list:</h1>
        {BOOKS.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </>
    );
  }
}

export default BookList;
