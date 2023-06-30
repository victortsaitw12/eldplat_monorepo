import React from "react";
import { Textarea } from "evergreen-ui";
import { BodySTY } from "./style";
import { title } from "process";
import { UseFormRegister } from "react-hook-form";

interface I_Props {
  title?: string;
  description?: string;
  register: UseFormRegister<any>;
  inputName: string;
}

const VerticalTextArea = ({
  title = "備註",
  description = "此欄位可補充說明以上需求之細節，或提出您的其他需求。若有其他特殊需求，專人將會再提供報價。",
  register,
  inputName
}: I_Props) => {
  return (
    <BodySTY className="v_textarea">
      {title && <div className="v_textarea_title">{title}</div>}
      {description && <div className="v_textarea_desc">{description}</div>}
      <Textarea {...register(inputName)} />
    </BodySTY>
  );
};

export default VerticalTextArea;
