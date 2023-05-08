import { ChevronDownIcon, Icon, FullscreenIcon, CrossIcon } from "evergreen-ui";
import React from "react";
import { BodySTY, FilterItemSTY } from "./style";
interface Props {
  children?: React.ReactNode;
  onChangeTab?: (value: string) => void;
  mainFilter?: string;
  mainFilterArray: {
    id: number;
    label: string;
    value: string;
  }[];
}

function TableWrapper({
  children,
  mainFilterArray,
  mainFilter,
  onChangeTab = (value: string) => {
    console.log(value);
  }
}: Props) {
  return (
    <BodySTY>
      <div className="filter-header">
        <div className="tab-container">
          {mainFilterArray.map((item) => {
            return (
              <FilterItemSTY
                key={item.id!}
                onClick={() => {
                  onChangeTab(item.value);
                }}
                isActive={item.value === mainFilter}
              >
                <span>{item.label}</span>
                <ChevronDownIcon />
              </FilterItemSTY>
            );
          })}
        </div>
        <div className="tab-options">
          <Icon
            icon={FullscreenIcon}
            size={16}
            marginY="auto"
            marginX="10px"
            color="#91A9C5"
          />
          <Icon
            icon={CrossIcon}
            size={18}
            marginY="auto"
            marginX="10px"
            color="#91A9C5"
          />
        </div>
      </div>
      {children}
    </BodySTY>
  );
}

export default TableWrapper;
