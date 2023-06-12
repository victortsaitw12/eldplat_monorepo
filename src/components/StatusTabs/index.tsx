import React from "react";
import { GroupSTY, DivSTY } from "./style";

interface Props {
  defaultTab?: number;
  tabsArray: { label: string; length: number; value: number }[];
  onTabChange: (val: number) => void;
  isLoading?: boolean;
}

const StatusTabs = ({ defaultTab = 1, tabsArray, onTabChange }: Props) => {
  const [currentTab, setCurrentTab] = React.useState(defaultTab);
  if (tabsArray.filter((item) => item.value === defaultTab).length === 0)
    defaultTab = tabsArray[0].value;

  const handleClick = (e: any) => {
    const dataVal = e.target.dataset.val;
    setCurrentTab(dataVal);
    onTabChange(dataVal);
  };
  return (
    <>
      <GroupSTY>
        {tabsArray &&
          tabsArray.map((item) => (
            <DivSTY
              key={`tab-${item.value}`}
              data-val={item.value}
              className={`${currentTab === item.value ? "isActive" : ""}`}
              onClick={handleClick}
            >
              {item.label}
              {item.length !== 0 && <span>{item.length} </span>}
            </DivSTY>
          ))}
      </GroupSTY>
    </>
  );
};

export default StatusTabs;
