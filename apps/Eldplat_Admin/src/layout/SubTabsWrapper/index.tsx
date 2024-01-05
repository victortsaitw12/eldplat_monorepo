import React from "react";
import { BodySTY, TagSTY } from "./style";
interface Props {
  onChangeTab?: (value: string) => void;
  currentTab?: string;
  tabsArray: {
    id: number;
    label: string;
    value: string;
  }[];
}

function SubTabsWrapper({
  currentTab,
  tabsArray,
  onChangeTab = (value: string) => {
    console.log(value);
  }
}: Props) {
  return (
    <BodySTY>
      <div className="tabs-wrapper">
        {tabsArray.map((item) => {
          return (
            <TagSTY
              key={item.id!}
              onClick={() => {
                onChangeTab(item.value);
              }}
              className={item.value === currentTab ? "active" : ""}
            >
              {item.label}
            </TagSTY>
          );
        })}
      </div>
    </BodySTY>
  );
}

export default SubTabsWrapper;
