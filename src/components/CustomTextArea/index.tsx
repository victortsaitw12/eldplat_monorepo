import React, { useState } from "react";
import { TextareaFieldSTY } from "./style";
import { Textarea } from "evergreen-ui";

interface I_CustomTextArea {
  placeholder: string;
}
const CustomTextArea = (props: I_CustomTextArea) => {
  const { placeholder } = props;

  return (
    <TextareaFieldSTY>
      <Textarea placeholder={placeholder} />
    </TextareaFieldSTY>
  );
};

export default CustomTextArea;
