import React from "react";
import { Pane } from "evergreen-ui";
import LabelTag from "@components/LabelTag";
import { BodySTY } from "./style";
import { useFormContext, useWatch } from "react-hook-form";

const LabelInfoView = () => {
  const { control } = useFormContext();
  const { label_list } = useWatch({
    control,
    name: "label_list"
  });
  return (
    <BodySTY>
      <Pane className="label_list">
        {label_list &&
          label_list.map((child: { label_name: string }, i: number) => {
            return <LabelTag key={i} text={child.label_name} />;
          })}
      </Pane>
    </BodySTY>
  );
};
export default LabelInfoView;
