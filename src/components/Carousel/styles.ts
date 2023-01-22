import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(Carousel)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 48px;
  margin-bottom: 72px;
  .carousel-control-prev {
    height: 30px;
    width: 50px;
    left: 1050px;
  }
  .carousel-control-next {
    height: 30px;
    width: 50px;
    left: 1100px;
  }
`;

export const WindowContainer = styled.div``;
