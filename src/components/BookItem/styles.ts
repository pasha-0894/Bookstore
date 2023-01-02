import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBookItem = styled.div`
  display: grid;
  grid-template-rows: 265px 84px 32px 72px;
  width: 352px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const BookItemBackgrond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7e4fd;
`;

export const BookItemTitle = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
  margin: 20px 0 8px 0;
`;

export const BookItemSubtitle = styled.h2`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
  margin: 0;
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const StyledPrice = styled.div`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
`;

export const StyledRating = styled.div`
  display: flex;
  justify-content: space-between;
`;
