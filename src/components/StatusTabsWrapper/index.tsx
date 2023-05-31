import React from "react";
import { Pane, Spinner } from "evergreen-ui";
import { GroupSTY, UlSTY, DivSTY } from "./style";

import StatusCard from "@components/StatusCard";
interface Props {
  tabsArray: { label: string; content: any[]; value: string }[];
  children: React.ReactNode;
  onTabChange: (val: string) => void;
  isLoading?: boolean;
}

const StatusTabsWrapper = ({
  tabsArray,
  children,
  onTabChange,
  isLoading = false
}: Props) => {
  const [currentTab, setCurrentTab] = React.useState("01");

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
              {item.content.length !== 0 && <span>{item.content.length} </span>}
            </DivSTY>
          ))}
      </GroupSTY>
      {isLoading ? (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={100}
        >
          <Spinner />
        </Pane>
      ) : (
        ""
      )}
      {!isLoading &&
        tabsArray.map((status) => (
          <UlSTY
            key={`${status.value}`}
            className={`${currentTab === status.value ? "isActive" : ""}`}
          >
            {status.content.length !== 0 ? (
              status.content
            ) : (
              <StatusCard data-val={status.value}>無訂單資料</StatusCard>
            )}
          </UlSTY>
        ))}
    </>
  );
};

export default StatusTabsWrapper;
