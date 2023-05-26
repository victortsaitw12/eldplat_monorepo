import React, { useId } from "react";
import { Text, UnorderedList, ListItem, Pane } from "evergreen-ui";
import { InfoBoxSTY } from "./style";
import Checkbox from "@components/CheckBox";
//🕯️🕯️🕯️🕯️🕯️因跟InfoBox功能差不多，所以之後統一使用InfoBox
export interface I_infoData {
  editEle?: React.ReactNode;
  readonly?: boolean; //只讀
  req?: boolean; //必填
  value?: string | Array<string> | React.ReactNode; //值
  label?: string; //label文字
  subLabel?: string | React.ReactNode; //上下的label
  inputType?: string;
}

export interface I_InfoBoxProps {
  style?: React.CSSProperties;
  isEdit: boolean;
  infoTitle?: string;
  infoData?: I_infoData[];
  infoType?: string;
  children?: React.ReactNode;
}

function ArrayInfoBox({
  style,
  isEdit,
  infoTitle,
  infoData,
  infoType,
  children
}: I_InfoBoxProps) {
  const r_info = (type?: string) => {
    return <div>{r_text()}</div>;
  };

  //文字
  const r_text = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      const { req, value, label, editEle } = child;

      return (
        <div key={value + i} style={{ display: "flex" }}>
          {label && (
            <Text>
              {req && label !== "" && <span className="req">*</span>}
              {label}
            </Text>
          )}
          <Pane>{isEdit && editEle ? editEle : <Text>{value}</Text>}</Pane>
        </div>
      );
    });
  };

  return <div>{r_info(infoType)}</div>;
}

export default ArrayInfoBox;
