import React from "react";
import { Text, UnorderedList, ListItem, Pane } from "evergreen-ui";
import { InfoBoxSTY } from "./style";
import Checkbox from "@components/CheckBox";

export interface I_infoData {
  editEle?: React.ReactNode;
  readonly?: boolean; //只讀
  req?: boolean; //必填
  value?: string | Array<string> | React.ReactNode; //值
  label?: string | React.ReactNode; //label文字
  subLabel?: string | React.ReactNode; //上下的label
  inputType?: string;
}

export interface I_InfoBoxProps {
  style?: React.CSSProperties;
  isEdit: boolean;
  infoTitle?: string;
  infoData?: I_infoData[];
  infoType?: string;
}

function InfoBox({
  style,
  isEdit,
  infoTitle,
  infoData,
  infoType
}: I_InfoBoxProps) {
  const r_switch_info = (type?: string) => {
    switch (type) {
      case "label":
        return (
          <UnorderedList className="info_content type_label">
            {r_label()}
          </UnorderedList>
        );
        break;
      case "checkbox":
        return (
          <UnorderedList className="info_content type_checkbox">
            {r_checkbox()}
          </UnorderedList>
        );
        break;
      default:
        return (
          <UnorderedList className="info_content type_text">
            {r_text()}
          </UnorderedList>
        );
    }
  };

  //文字
  const r_text = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      const { req, value, label, editEle, inputType } = child;
      if (!value && !editEle) {
        return;
      }
      if (inputType === "custom") {
        return editEle;
      }

      return (
        <ListItem key={value + i}>
          {label && (
            <Pane>
              {req && label !== "" && <span className="req">*</span>}
              {label}
            </Pane>
          )}
          <Pane>{isEdit && editEle ? editEle : <Text>{value}</Text>}</Pane>
        </ListItem>
      );
    });
  };

  //標籤-編輯模式待處理
  const r_label = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      return (
        <ListItem key={child.value + i}>
          <Text>{child.value}</Text>
        </ListItem>
      );
    });
  };

  //checkbox-編輯模式待處理
  const r_checkbox = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      return (
        <ListItem key={child.value + i}>
          <Checkbox
            disabled={isEdit ? false : true}
            name={child.value}
            label={child.label}
            defaultChecked={child.checked}
            onChange={child.onChange}
          />
        </ListItem>
      );
    });
  };

  return (
    <InfoBoxSTY style={style}>
      {infoTitle && <Text className="info-title">{infoTitle}</Text>}
      {r_switch_info(infoType)}
    </InfoBoxSTY>
  );
}

export default InfoBox;
