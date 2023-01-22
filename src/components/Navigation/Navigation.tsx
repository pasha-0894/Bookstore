import { CustomNavLink } from "components";
import { ROUTE } from "router";
import {
  StyledAccountIcon,
  StyledBasketIcon,
  StyledFavoritesIcon,
  StyledNavigation,
} from "./styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <StyledFavoritesIcon />
      </CustomNavLink>
      <StyledBasketIcon />
      <CustomNavLink to={ROUTE.ACCOUNT}>
        <StyledAccountIcon />
      </CustomNavLink>
    </StyledNavigation>
  );
};
