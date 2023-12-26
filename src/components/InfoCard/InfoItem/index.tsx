import React, { useId } from "react";
import { Text, UnorderedList, Pane } from "evergreen-ui";
import { ListItem } from "./style";
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
  direction?: string;
}

// export interface I_InfoCardProps {
//   style?: React.CSSProperties;
//   isEdit: boolean;
//   infoTitle?: string | React.ReactNode;
//   infoData: I_infoData[] | I_infoData[][];
//   infoType?: string;
//   hasProfileCard?: boolean;
// }

// const InfoItem = ({
//   item,
//   isEdit,
//   InfoCardId
// }: {
//   item: I_infoData;
//   isEdit: boolean;
//   InfoCardId: string;
// }) => (
//   <ListItem className={`item ${item.listClassName}`} key={InfoCardId}>
//     <Pane className={`label ${item.bold && isEdit ? "bold" : ""}`}>
//       {item.req && isEdit && <span className="req">*</span>}
//       <span>{item.label}</span>
//     </Pane>
//     <Pane className="value">
//       {isEdit && item.editEle ? item.editEle : item.value}
//     </Pane>
//   </ListItem>
// );

function InfoItem({
  item,
  isEdit,
  InfoCardId,
  direction = "column"
}: {
  item: I_infoData;
  isEdit: boolean;
  InfoCardId?: string;
  direction?: string;
}) {
  return (
    <ListItem
      className={`item ${item?.listClassName} ${direction}`}
      key={InfoCardId}
    >
      {direction === "row" && !item.label ? (
        ""
      ) : (
        <Pane className={`label ${item?.bold && isEdit ? "bold" : ""}`}>
          {item?.req && isEdit && <span className="req">*</span>}
          <span>{item?.label}</span>
        </Pane>
      )}
      <Pane className="value">
        {isEdit && item?.editEle ? item?.editEle : item?.value}
      </Pane>
    </ListItem>
  );
}

export default InfoItem;
