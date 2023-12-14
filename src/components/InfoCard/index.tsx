import React, { useId } from "react";
import { Text, Pane } from "evergreen-ui";
import { InfoCardSTY } from "./style";
import Image from "next/image";
import InfoItem from "@components/InfoCard/InfoItem";

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
  infoData: I_infoData[] | I_infoData[][];
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
        {Array.isArray(infoData[0]) ? (
          (infoData as I_infoData[][]).map((col, index) => {
            return (
              <Pane className="col" key={index}>
                <ul className="row">
                  {Array.isArray(col) &&
                    col.map((item, itemIndex) => {
                      return (
                        <InfoItem
                          key={InfoCardId + itemIndex}
                          item={item}
                          isEdit={isEdit}
                          InfoCardId={InfoCardId}
                        />
                      );
                    })}
                </ul>
              </Pane>
            );
          })
        ) : (
          <Pane className="col">
            <ul className="row">
              {(infoData as I_infoData[]).map((item: I_infoData, itemIndex) => {
                return (
                  <InfoItem
                    key={InfoCardId + itemIndex}
                    item={item}
                    isEdit={isEdit}
                    InfoCardId={InfoCardId}
                  />
                );
              })}
            </ul>
          </Pane>
        )}
      </div>
    </InfoCardSTY>
  );
}

export default InfoCard;
