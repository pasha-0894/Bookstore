import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
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
