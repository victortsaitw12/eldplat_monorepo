import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
interface I_Props {
  purpose?: string | number;
  listArray: { title: string; value: string | number }[];
}
const SummaryInfoView = ({ purpose, listArray }: I_Props) => {
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={listArray} />
    </Pane>
  );
};
export default SummaryInfoView;
