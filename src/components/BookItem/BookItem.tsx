import { StarDarkIcon, StarWhiteIcon } from "assets/icons";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import {
  BookItemBackgrond,
  BookItemSubtitle,
  BookItemTitle,
  StyledBookItem,
  StyledDescription,
  StyledLink,
  StyledPrice,
  StyledRating,
} from "./styles";

interface IProps {
  book: any;
}

const positiveRating = 4; // временные переменные
const negativeRating = 1; // временные переменные

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledLink to={generatePath(ROUTE.DETAILS, { isbn: book.isbn13 })}>
      <StyledBookItem>
        <BookItemBackgrond>
          <img src={book.image} height="264px" width="226px" alt="" />
        </BookItemBackgrond>
        <BookItemTitle>{book.title}</BookItemTitle>
        <BookItemSubtitle>by Lentin Joseph, Apress 2018</BookItemSubtitle>
        <StyledDescription>
          <StyledPrice>{book.price}</StyledPrice>
          <StyledRating>
            {Array.from({ length: positiveRating }, () => (
              <StarDarkIcon key={Math.random()} />
            ))}
            {Array.from({ length: negativeRating }, () => (
              <StarWhiteIcon key={Math.random()} />
            ))}
          </StyledRating>
        </StyledDescription>
      </StyledBookItem>
    </StyledLink>
  ); //исправить BookItemSubtitle ТЕКСТ
};
