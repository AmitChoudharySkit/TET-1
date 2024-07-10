import React from 'react';

const Book = ({ book, onDelete }) => (
  <div className="book">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <button onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

export default Book;
