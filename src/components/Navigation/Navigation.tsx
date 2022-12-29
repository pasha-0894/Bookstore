import { CustomNavLink } from "components/CustomNavLink";
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
      <StyledAccountIcon />
      <StyledBasketIcon />

      <CustomNavLink to={ROUTE.FAVORITES}>
        <StyledFavoritesIcon />
      </CustomNavLink>
    </StyledNavigation>
  );
};
