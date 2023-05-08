import React from "react";
import {
  Text,
  UnorderedList,
  ListItem,
} from "evergreen-ui";
import { InfoBoxSTY } from "./style";
import Checkbox from "@components/CheckBox";

interface I_infoData {
  req?: boolean;
  value?: string;
  title?: string;
}

export interface I_InfoBoxProps {
  infoTitle?: string;
  infoData?: I_infoData[];
  infoType?: string;
  children?: React.ReactNode;
}

function InfoBox({ infoTitle, infoData, infoType, children }: I_InfoBoxProps) {

  const r_switch_info = (type?: string) => {
    switch (type) {
      case "label":
        return (
          <UnorderedList className="info_content type_label">
            {r_label()}
          </UnorderedList>
        )
        break;
      case "checkbox":
        return (
          <UnorderedList className="info_content type_checkbox">
            {r_checkbox()}
          </UnorderedList>
        )
        break;
      default:
        return (
          <UnorderedList className="info_content type_text">
            {r_text()}
          </UnorderedList>
        )
    }
  }
  //文字
  const r_text = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      const { req, value, title, key } = child
      return (
        <ListItem key={value + i}>
          <Text>
            {req && title !== "" && <span className="req">*</span>}
            {title}
          </Text>
          <Text>{value}</Text>
        </ListItem>
      )
    })
  }

  //標籤-編輯模式待處理
  const r_label = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      return (
        <ListItem key={child.value + i} >
          <Text>{child.value}</Text>
        </ListItem>
      )
    })
  }

  //傻逼一般的checkbox-編輯模式待處理
  const r_checkbox = () => {
    if (!infoData) {
      return false
    }
    return infoData.map((child: any, i: number) => {
      return (
        <ListItem key={child.value + i}>
          <Checkbox label={child.title} disabled={true} />
        </ListItem>
      )
    })
  }

  return (
    <InfoBoxSTY>
      <Text className="title">{infoTitle}</Text>
      {r_switch_info(infoType)}
    </InfoBoxSTY>
  );
}

export default InfoBox;
