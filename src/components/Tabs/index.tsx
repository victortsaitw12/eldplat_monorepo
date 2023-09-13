import React, { useState } from "react";
import { ChevronDownIcon } from "evergreen-ui";
import { TabsSTY } from "./style";

interface I_Tabs {
  titleNames: string[] | React.ReactNode[];
  selectedIdx?: number;
  onSelectTab?: (arg: any) => void;
}
const Tabs = ({ titleNames, selectedIdx, onSelectTab }: I_Tabs) => {
  const [currentTab, setCurrentTab] = useState(selectedIdx || 0);

  const handleSelectTab = (index: number) => {
    setCurrentTab(index);
    onSelectTab && onSelectTab(index);
  };

  return (
    <TabsSTY className="tabs">
      {titleNames.map((item, index) => (
        <div
          className={`tab ${index === currentTab ? "current" : ""}`}
          key={`tab-${index}`}
          onClick={handleSelectTab.bind(null, index)}
        >
          {item}
          {index === currentTab && <ChevronDownIcon className="icon" />}
        </div>
      ))}
    </TabsSTY>
  );
};

export default Tabs;
