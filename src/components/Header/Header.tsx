import { StyledHeader, StyledLogo } from "./styles";

import { ROUTE } from "router";
import { CustomNavLink, Navigation, Search } from "components";

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
