import { BookItem } from "components/BookItem";
import { BookList } from "components/BookList";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { fetchMain } from "store/main/mainSlice";
import { getBooksMain } from "store/selectors/mainSelector";

export const MainPage = () => {
  const { books, isLoading } = useAppSelector(getBooksMain);
  const result = books.books;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMain());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {result && result.length > 0 && <BookList books={result} />}
    </div>
  );
};
