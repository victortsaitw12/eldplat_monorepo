import React from "react";
import { GroupSTY, DivSTY } from "./style";

interface Props {
  defaultTab?: number;
  tabsArray: { label: string | React.ReactNode; value: number }[];
  onTabChange: (val: number) => void;
}

const SimpleTabs = ({ defaultTab = 1, tabsArray, onTabChange }: Props) => {
  const [currentTab, setCurrentTab] = React.useState(defaultTab);
  if (tabsArray.filter((item) => item.value === defaultTab).length === 0)
    defaultTab = tabsArray[0].value;

  const handleClick = (e: any) => {
    const dataVal = e.currentTarget.dataset.val;
    setCurrentTab(dataVal);
    onTabChange(dataVal);
  };
  return (
    <>
      <GroupSTY className="tabs-wrap">
        {tabsArray &&
          tabsArray.map((item) => (
            <DivSTY
              key={`tab-${item.value}`}
              data-val={item.value}
              className={`${currentTab == item.value ? "isActive" : ""}`}
              onClick={handleClick}
            >
              {item.label}
            </DivSTY>
          ))}
      </GroupSTY>
    </>
  );
};

export default SimpleTabs;
