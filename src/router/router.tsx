import { MainTemplate, RequareAuth } from "components";
import { DetailsPage, FavoritesPage, MainPage, NotFoundPage, SearchPage } from "pages";
import { AccountPage } from "pages/AccountPage/AccountPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>,
  ),
);
