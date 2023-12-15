import React, { useEffect, useState } from "react";
import { TextareaFieldSTY } from "./style";
import { Textarea, Pane } from "evergreen-ui";

interface I_CustomTextArea {
  placeholder: string;
  data?: string;
}
const CustomTextArea = (props: I_CustomTextArea) => {
  const { placeholder = "請輸入內容", data } = props;
  const [value, setValue] = useState("");
  const hintLength = value.trim().length;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (hintLength < 50) {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    data && setValue(data);
  }, [data]);

  return (
    <TextareaFieldSTY>
      <Pane className="comment-textarea">
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
        />
        <p className="hint">{hintLength}/50</p>
      </Pane>
    </TextareaFieldSTY>
  );
};

export default CustomTextArea;
