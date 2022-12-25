import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  color: ${({ $isActive }) => ($isActive ? "yellow" : "red")};
`;
