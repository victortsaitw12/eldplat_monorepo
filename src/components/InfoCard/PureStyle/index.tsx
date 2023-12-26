import React from "react";
import { Text } from "evergreen-ui";
import { InfoCardSTY } from "./style";

export interface I_InfoCardProps {
  style?: React.CSSProperties;
  isEdit: boolean;
  infoTitle?: string | React.ReactNode;
  children: any;
  className?: string;
}

function InfoCard({ style, infoTitle, children, className }: I_InfoCardProps) {
  return (
    <InfoCardSTY
      className={`${className ? className : ""} InfoCard__container`}
      style={style}
    >
      {infoTitle && <Text className="title">{infoTitle}</Text>}
      <div className="content">{children}</div>
    </InfoCardSTY>
  );
}

export default InfoCard;
