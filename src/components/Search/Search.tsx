import { CustomNavLink } from "components/CustomNavLink";
import { useEffect, useState } from "react";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { fetchSearch, searchBooks } from "store/main/searchSlice";
import { getBooksBySearch } from "store/selectors/searchSelector";
import { ButtonSearch, Form, Input, StyledSearchIcon } from "./styles";

export const Search = () => {
  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector(getBooksBySearch);

  const handlerChange = (event: any) => {
    dispatch(searchBooks(event.target.value));
  };

  return (
    <Form>
      <Input type="search" placeholder="Search" onChange={handlerChange} />
      <ButtonSearch>
        <CustomNavLink to={ROUTE.SEARCH}>
          <StyledSearchIcon />
        </CustomNavLink>
      </ButtonSearch>
    </Form>
  );
};
