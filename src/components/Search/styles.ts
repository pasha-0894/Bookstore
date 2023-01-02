import { SearchIcon } from "assets/icons";
import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 486px;
  height: 56px;
  border: none;
  padding: 14px 0px 10px 20px;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

export const Form = styled.form`
  display: flex;
  width: 542px;
  height: 56px;
  margin-left: 151.49px;
  margin-right: 105px;
  border: 1px solid #e7e7e7;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: 56px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
`;
