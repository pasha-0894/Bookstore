import { CustomNavLink } from "components/CustomNavLink";
import { Header } from "components/Header";
import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Container } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <nav>
        <CustomNavLink to={ROUTE.SEARCH}>Search</CustomNavLink>
      </nav>
      <p>Test</p>
      <Outlet />
      <p>Test</p>
    </Container>
  );
};
