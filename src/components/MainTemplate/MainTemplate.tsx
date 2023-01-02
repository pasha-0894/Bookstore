import { CustomNavLink } from "components/CustomNavLink";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Container } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
