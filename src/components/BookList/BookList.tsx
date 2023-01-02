import { BookItem } from "components/BookItem";
import { BookListHeader, Container, StyledBookList } from "./styles";

interface IProps {
  books: any[];
} // Будет изменено

export const BookList = ({ books }: IProps) => {
  return (
    <Container>
      <BookListHeader>New Releases Books</BookListHeader>
      <StyledBookList>
        {books.map((book: any) => {
          return <BookItem book={book} />;
        })}
      </StyledBookList>
    </Container>
  );
};
