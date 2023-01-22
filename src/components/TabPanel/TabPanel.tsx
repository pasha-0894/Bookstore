import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return <div>{value === index && <Typography>{children}</Typography>}</div>;
};
