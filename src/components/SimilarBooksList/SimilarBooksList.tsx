import { BookItem } from "components";
import { BookList } from "./styles";

export const SimilarBooks = ({ books }: any) => {
  return (
    <BookList>
      {books.map((book: any) => {
        return <BookItem book={book} key={Math.random()} />;
      })}
    </BookList>
  );
};
