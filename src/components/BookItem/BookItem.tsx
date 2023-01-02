import React from "react";
import { generatePath, Link } from "react-router-dom";
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

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledLink to={generatePath(ROUTE.DETAILS, { isbn: book.isbn13 })}>
      <StyledBookItem>
        <BookItemBackgrond>
          <img src={book.image} height="264px" width="226px" />
        </BookItemBackgrond>
        <BookItemTitle>{book.title}</BookItemTitle>
        <BookItemSubtitle>by Lentin Joseph, Apress 2018</BookItemSubtitle>
        <StyledDescription>
          <StyledPrice>{book.price}</StyledPrice>
          <StyledRating>sd</StyledRating>
        </StyledDescription>
      </StyledBookItem>
    </StyledLink>
  ); //исправить BookItemSubtitle ТЕКСТ
};
