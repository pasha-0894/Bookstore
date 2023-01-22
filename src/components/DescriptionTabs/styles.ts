import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const Description = styled.div`
  width: 1120px;
  margin-top: 72px;
`;

export const StyledTabs = styled(Tabs)`
  border-bottom: solid 1px #e7e7e7;
  .abc {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 40px 24px;
    gap: 10px;
    font-family: "Helios";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #313037;
  }
`;

export const StyledTab = styled(Tab)``;
