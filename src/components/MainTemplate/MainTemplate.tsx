import { CustomNavLink } from "components/CustomNavLink";
import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "router";

export const MainTemplate = () => {
  return (
    <div>
      <nav>
        <CustomNavLink to={ROUTE.MAIN}>Main</CustomNavLink>
        <CustomNavLink to={ROUTE.SEARCH}>Search</CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORITES}>Favorites</CustomNavLink>
      </nav>
      <p>Test</p>
      <Outlet />
      <p>Test</p>
    </div>
  );
};
