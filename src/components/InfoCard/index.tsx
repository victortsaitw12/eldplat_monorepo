import React, { useId } from "react";
import {
  Text,
  UnorderedList,
  ListItem,
  Pane,
  FileCard,
  Group
} from "evergreen-ui";
import { InfoCardSTY } from "./style";
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

export interface I_InfoCardProps {
  style?: React.CSSProperties;
  isEdit: boolean;
  infoTitle?: string | React.ReactNode;
  infoData?: I_infoData[];
  infoType?: string;
}

function InfoCard({
  style,
  isEdit,
  infoTitle,
  infoData,
  infoType
}: I_InfoCardProps) {
  const InfoCardId = useId();

  return (
    <InfoCardSTY className="InfoCard__container" style={style}>
      {infoTitle && <Text className="title">{infoTitle}</Text>}
      <div className="content">
        <image />
        <Group className="row">
          <UnorderedList className="column">
            <ListItem className="item">
              <Pane className="label">
                <span className="req">*</span>
                <span>label</span>
              </Pane>
              <Pane className="value">value</Pane>
            </ListItem>
          </UnorderedList>
        </Group>
      </div>
    </InfoCardSTY>
  );
}

export default InfoCard;
