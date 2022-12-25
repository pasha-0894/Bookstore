import { BookList } from "components/BookList";
import { useEffect } from "react";
import { useState } from "react";

export const MainPage = () => {
  const [books, setBooks] = useState([]); // Будет изменено на Redux
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.books;
      })
      .then(setBooks);
  }); // Будет изменено на Redux

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};
