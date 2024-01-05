import React, { useId, useState } from "react";
import { Text, Pane, ChevronDownIcon } from "evergreen-ui";
import { InfoCardSTY } from "./style";
import Image from "next/image";
import InfoItem from "@components/InfoCard/InfoItem";
import { has } from "lodash";

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
  isEdit: boolean;
  infoTitle?: string | React.ReactNode;
  infoData: I_infoData[] | I_infoData[][];
  hasProfileCard?: boolean;
  hasCollapse?: boolean;
  height?: number | string;
}

function InfoCard({
  isEdit = false,
  infoTitle,
  infoData,
  hasProfileCard = false,
  hasCollapse = false,
  height = "fit-content"
}: I_InfoCardProps) {
  const InfoCardId = useId();
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleToggle = () => {
    if (hasCollapse) {
      setIsCardOpen((prev) => !prev);
    }
  };

  return (
    <InfoCardSTY className="InfoCard__container" height={height}>
      {infoTitle && (
        <div className="title-wrapper" onClick={handleToggle}>
          <Text className="title">{infoTitle}</Text>
          {hasCollapse && (
            <button className={`toggle-button ${isCardOpen ? "open" : ""}`}>
              <ChevronDownIcon />
            </button>
          )}
        </div>
      )}
      {isCardOpen && (
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
                <ul className="col" key={index}>
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
              );
            })
          ) : (
            <ul className="col">
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
          )}
        </div>
      )}
    </InfoCardSTY>
  );
}

export default InfoCard;
