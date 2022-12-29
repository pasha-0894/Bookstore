import { Logo } from "assets/icons";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px 24px 0px;
  border-bottom: 1px solid #e7e7e7;
`;

export const StyledLogo = styled(Logo)`
  @media (min-width: 320px) {
    width: 122px;
    height: 25px;
  }

  @media (min-width: 768px) {
    width: 137.51px;
    height: 28.64px;
  }
`;
