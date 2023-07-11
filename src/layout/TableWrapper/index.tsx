import {
  ChevronDownIcon,
  Icon,
  FullscreenIcon,
  CrossIcon,
  FloppyDiskIcon,
  EditIcon
} from "evergreen-ui";
import React from "react";
import { BodySTY, FilterItemSTY } from "./style";
interface Props {
  optionsEle?: React.ReactNode;
  children?: React.ReactNode;
  onChangeTab?: (value: string) => void;
  mainFilter?: string;
  mainFilterArray: {
    id: number;
    label: string;
    value: string;
    require?: boolean;
  }[];
  isEdit?: boolean;
  viewOnly?: boolean;
  onSave?: () => void;
  onEdit?: () => void;
  onClose?: () => void;
}

function TableWrapper({
  optionsEle,
  children,
  mainFilterArray,
  mainFilter,
  onChangeTab = (value: string) => {
    console.log(value);
  },
  isEdit,
  viewOnly,
  onSave,
  onEdit,
  onClose
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
                {item.require && <div className="require">*</div>}
                <span>{item.label}</span>
                {item.value === mainFilter && <ChevronDownIcon />}
              </FilterItemSTY>
            );
          })}
        </div>
        <div className="tab-options">
          {optionsEle}
          {!viewOnly && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
              }}
              onClick={() => {
                console.log("mode", isEdit);
                if (isEdit) {
                  console.log("save data");
                  onSave && onSave();
                } else {
                  onEdit && onEdit();
                }
              }}
            >
              <Icon
                icon={isEdit ? FloppyDiskIcon : EditIcon}
                size={16}
                marginY="auto"
                marginX="10px"
                color="#91A9C5"
              />
              <div>{isEdit ? "全部儲存" : "編輯"}</div>
            </div>
          )}
          <Icon
            icon={FullscreenIcon}
            style={{ cursor: "pointer" }}
            size={16}
            marginY="auto"
            marginX="10px"
            color="#91A9C5"
          />
          <Icon
            icon={CrossIcon}
            style={{ cursor: "pointer" }}
            size={18}
            marginY="auto"
            marginX="10px"
            color="#91A9C5"
            onClick={() => {
              onClose && onClose();
            }}
          />
        </div>
      </div>
      {children}
    </BodySTY>
  );
}

export default TableWrapper;
