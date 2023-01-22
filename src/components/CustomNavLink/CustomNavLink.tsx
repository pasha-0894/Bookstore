import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface IProp {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProp) => {
  const match = useMatch(to);
  return (
    <StyledNavLink $isActive={match} to={to}>
      {children}
    </StyledNavLink>
  );
};
