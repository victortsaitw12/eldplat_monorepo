import React, { useEffect, useState } from "react";
import { TextareaFieldSTY } from "./style";
import { TextareaField, Pane } from "evergreen-ui";

interface I_CustomTextArea {
  placeholder: string;
  data?: string;
  rows?: number;
}
const CustomTextArea = (props: I_CustomTextArea) => {
  const { placeholder = "請輸入內容", data, rows=100 } = props;
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const TextareaRef = React.useRef<HTMLTextAreaElement>(null);
  const hintLength = TextareaRef.current?.value.trim().length ?? 0;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
    if (hintLength > 51) {
      setInvalid(true);
    }else{
      setInvalid(false);
    }
  };

  useEffect(() => {
    data && setValue(data);
  }, [data]);

  return (
    <TextareaFieldSTY rows={rows}>
      <Pane className="comment-textarea">
        <TextareaField
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
          isInvalid={invalid}
          ref={TextareaRef}
        />
        <p className="hint">{hintLength}/50</p>
      </Pane>
    </TextareaFieldSTY>
  );
};

export default CustomTextArea;
