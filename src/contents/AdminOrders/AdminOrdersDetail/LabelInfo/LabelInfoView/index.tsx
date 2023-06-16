import React from "react";
import { Pane } from "evergreen-ui";
import LabelTag from "@components/LabelTag";
import { BodySTY } from "./style";

interface I_Props {
  label_list: [];
}

const LabelInfoView = ({ label_list }: I_Props) => {
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
