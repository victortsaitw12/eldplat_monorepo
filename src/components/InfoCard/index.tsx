import React, { useId } from "react";
import {
  Text,
  UnorderedList,
  ListItem,
  Pane,
  FileCard,
  Group,
  TextInput,
  Select
} from "evergreen-ui";
import { InfoCardSTY } from "./style";
import Checkbox from "@components/CheckBox";
import Image from "next/image";

export interface I_infoData {
  editEle?: React.ReactNode;
  readonly?: boolean; //只讀
  req?: boolean; //必填
  value?: string | Array<string> | React.ReactNode; //值
  label?: string | React.ReactNode; //label文字
  inputType?: string;
  listClassName?: string;
  bold?: boolean;
}

export interface I_InfoCardProps {
  style?: React.CSSProperties;
  isEdit: boolean;
  infoTitle?: string | React.ReactNode;
  infoData?: I_infoData[];
  infoType?: string;
  hasProfileCard?: boolean;
}

function InfoCard({
  style,
  isEdit = false,
  infoTitle,
  infoData,
  infoType,
  hasProfileCard = false
}: I_InfoCardProps) {
  const InfoCardId = useId();

  return (
    <InfoCardSTY className="InfoCard__container" style={style}>
      {infoTitle && <Text className="title">{infoTitle}</Text>}
      <div className="content">
        {hasProfileCard && (
          <Image
            src="/image/Photo.jpg"
            alt="user"
            width={120}
            height={150}
            className="user__photo"
          />
        )}
        <Group className="col">
          <UnorderedList className="row">
            {infoData &&
              infoData.map((item) => (
                <ListItem
                  className={`item ${item.listClassName}`}
                  key={InfoCardId}
                >
                  <Pane className={`label ${item.bold ? "bold" : ""}`}>
                    {item.req && isEdit && <span className="req">*</span>}
                    <span>{item.label}</span>
                  </Pane>
                  <Pane className="value">{item.value}</Pane>
                </ListItem>
              ))}
          </UnorderedList>
        </Group>
      </div>
    </InfoCardSTY>
  );
}

export default InfoCard;
