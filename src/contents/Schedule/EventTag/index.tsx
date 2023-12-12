import React from "react";
import { BtnSTY } from "./style";

const EventTag = ({ value, className, onClick }: { value: any; className?: string; onClick?: React.MouseEventHandler<HTMLButtonElement>; }) => {
  return (
    <BtnSTY key={value?.label} color={value?.color} className={className}
      onClick={(onClick)}
    >
      {
        <>
          {value?.icon}
          <span className={`${value?.label=== "待排班" ? "empty" : ""}`}>{value?.label}</span>
        </>
      }
    </BtnSTY>
  );
};

export default EventTag;
