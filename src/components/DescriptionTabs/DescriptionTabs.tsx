import React, { useState } from "react";
import { TabPanel } from "components/TabPanel/TabPanel";
import { Description, StyledTab, StyledTabs } from "./styles";

export const DescriptionTabs = ({ info }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Description>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Description" className="abc" />
        <StyledTab label="Authors" className="abc" />
        <StyledTab label="Subtitle" className="abc" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        {info.desc}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {info.authors}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {info.subtitle}
      </TabPanel>
    </Description>
  );
};
