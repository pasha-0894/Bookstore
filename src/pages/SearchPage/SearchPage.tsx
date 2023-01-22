import { BookList } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { fetchSearch } from "store/main/searchSlice";
import { getBooksBySearch } from "store/selectors/searchSelector";

export const SearchPage = () => {
  const { books, isLoading, inputValue } = useAppSelector(getBooksBySearch);
  const result = books.books;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSearch(inputValue));
  }, [dispatch, inputValue]);

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {result && result.length > 0 && <BookList books={result} />}
    </div>
  );
};
//
