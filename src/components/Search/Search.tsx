import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { useAppDispatch } from "store/hooks/hooks";
import { searchBooks } from "store/main/searchSlice";
import { ButtonSearch, Form, Input, StyledSearchIcon } from "./styles";

export const Search = () => {
  const dispatch = useAppDispatch();

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
