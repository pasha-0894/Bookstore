import { StyledHeader, StyledLogo } from "./styles";

import { Search } from "components/Search";
import { Navigation } from "components/Navigation";
import { CustomNavLink } from "components/CustomNavLink";
import { ROUTE } from "router";

export const Header = () => {
  return (
    <StyledHeader>
      <CustomNavLink to={ROUTE.MAIN}>
        <StyledLogo />
      </CustomNavLink>

      <Search />
      <Navigation />
    </StyledHeader>
  );
};
