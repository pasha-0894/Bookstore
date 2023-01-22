import { BookItem } from "components";
import { Header, Container, StyledBookList } from "./styles";

interface IProps {
  books: any[];
} // Будет изменено

export const BookList = ({ books }: IProps) => {
  return (
    <Container>
      <Header>New Releases Books</Header>
      <StyledBookList>
        {books.map((book: any) => {
          return <BookItem book={book} key={book.id} />;
        })}
      </StyledBookList>
    </Container>
  );
};
