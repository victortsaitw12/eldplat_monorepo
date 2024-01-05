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
    require?: boolean;
  }[];
  isHide?: boolean;
}

function TabsWrapper({
  children,
  mainFilterArray,
  mainFilter,
  onChangeTab = (value: string) => {
    console.log(value);
  },
  isHide
}: Props) {
  return (
    <BodySTY isHide={isHide}>
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
              {item.require && <div className="require">*</div>}
              <span className={`${item.value === mainFilter ? "active" : ""}`}>
                {item.label}
              </span>
            </FilterItemSTY>
          );
        })}
      </div>
    </BodySTY>
  );
}

export default TabsWrapper;
