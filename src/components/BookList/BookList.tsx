import { BookItem } from "components/BookItem";

interface IProps {
  books: any;
} // Будет изменено

export const BookList = ({ books }: IProps) => {
  return (
    <ul>
      {books.map((book: any) => {
        return <BookItem book={book} />;
      })}
    </ul>
  );
};
