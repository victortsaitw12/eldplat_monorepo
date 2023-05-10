import React from "react";
import {
  Text,
  UnorderedList,
  ListItem,
} from "evergreen-ui";
import { InfoBoxSTY } from "./style";
import Checkbox from "@components/CheckBox";
import { useFormContext } from "react-hook-form";
import { Pane, TextInputField, SelectField, TagInput } from "evergreen-ui";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";

interface I_infoData {
  readonly?: boolean;//只讀
  req?: boolean;//必填
  value?: string;//值
  label?: string;//label文字
  subLabel?: string | React.ReactNode;//上下的label
  inputType?: string;
}

export interface I_InfoBoxProps {
  isEdit: Boolean;
  infoTitle?: string;
  infoData?: I_infoData[];
  infoType?: string;
  children?: React.ReactNode;
}

function InfoBox({ isEdit, infoTitle, infoData, infoType, children }: I_InfoBoxProps) {
  const { register } = useFormContext(); // retrieve all hook methods

  console.log("🎶🎶🎶🎶🎶🎶這些是InfoBox裡面的props", {
    isEdit: isEdit,
    infoTitle: infoTitle,
    infoData: infoData,
    infoType: infoType
  });

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

  const r_edit = (type: string, name: string, subLabel: any,) => {
    switch (type) {
      case "null":
        return (
          <></>
        )
        break;

      default:
        return (
          <TextInputField label={subLabel} {...register(name)} />
        )

        break;
    }
  }
  //文字
  const r_text = () => {
    if (!infoData) {
      return false;
    }
    return infoData.map((child: any, i: number) => {
      const { subLabel, readonly, req, value, label, name } = child
      return (
        <ListItem key={value + i}>
          <Text>
            {req && label !== "" && <span className="req">*</span>}
            {label}
          </Text>
          {isEdit && name && !readonly ? <TextInputField label={<span>{subLabel}</span>} {...register(name)} /> : <Text>{value}</Text>}
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
          <Checkbox label={child.label} disabled={isEdit ? false : true} />
        </ListItem>
      )
    })
  }

  return (
    <InfoBoxSTY>
      <Text className="label">{infoTitle}</Text>
      {r_switch_info(infoType)}
    </InfoBoxSTY>
  );
}

export default InfoBox;
