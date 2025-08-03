import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "React Explained", author: "Zac Gordon" },
    { id: 2, title: "Learning React", author: "Alex Banks" },
    { id: 3, title: "The Road to React", author: "Robin Wieruch" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            "{book.title}" by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
