import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html[theme='light']{
--primary: #313037;
--white: #FFFFFF;
}
html[theme='dark']{
--primary: #E5E5E5;
--white: red;
}`;
