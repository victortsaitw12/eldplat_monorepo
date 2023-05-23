import React from "react";
import { BtnSTY } from "./style";

const EventTag = ({ value, className }: { value: any; className?: string }) => {
  return (
    <BtnSTY key={value?.label} color={value?.color} className={className}>
      {
        <>
          {value?.icon || null}
          <span>{value?.label || null}</span>
        </>
      }
    </BtnSTY>
  );
};

export default EventTag;
