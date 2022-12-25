import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";

interface IProps {
  book: any;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <div>
      <Link to={generatePath(ROUTE.DETAILS, { isbn: book.isbn13 })}>{book.title}</Link>
    </div>
  );
};
