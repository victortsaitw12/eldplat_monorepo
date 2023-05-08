import React from "react";
import { BtnSTY } from "./style";

const EventTag = ({ value, className }: { value: any; className?: string }) => {
  return (
    <BtnSTY key={value.label} color={value.color} className={className}>
      {
        <>
          {value.icon}
          <span>{value.label}</span>
        </>
      }
    </BtnSTY>
  );
};

export default EventTag;
