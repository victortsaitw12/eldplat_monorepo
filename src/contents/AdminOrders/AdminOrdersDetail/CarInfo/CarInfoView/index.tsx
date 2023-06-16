import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
interface I_Props {
  purpose?: string | number;
}
const CarInfoView = ({ purpose }: I_Props) => {
  const listArray = [
    {
      title: "用車目的",
      value: purpose || "-"
    },
    {
      title: "訂車注意事項",
      value: "客戶同意"
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={listArray} />
    </Pane>
  );
};
export default CarInfoView;
