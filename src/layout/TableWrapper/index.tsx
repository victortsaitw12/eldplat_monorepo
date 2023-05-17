import {
  ChevronDownIcon,
  Icon,
  FullscreenIcon,
  CrossIcon,
  FloppyDiskIcon
} from "evergreen-ui";
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
  onSave?: () => void;
  onClose?: () => void;
}

function TableWrapper({
  children,
  mainFilterArray,
  mainFilter,
  onChangeTab = (value: string) => {
    console.log(value);
  },
  onSave
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
                {item.value === mainFilter && <ChevronDownIcon />}
              </FilterItemSTY>
            );
          })}
        </div>
        <div className="tab-options">
          {onSave && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
              }}
              onClick={() => {
                onSave();
              }}
            >
              <Icon
                icon={FloppyDiskIcon}
                size={16}
                marginY="auto"
                marginX="10px"
                color="#91A9C5"
              />
              <div>全部儲存</div>
            </div>
          )}
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
