import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
interface I_Props {
  quote_type: string;
  purpose: string | number;
}

const CarInfoView = ({ quote_type, purpose }: I_Props) => {
  const purposeList: { [key: string]: string } = {
    "01": "學校/企業參訪",
    "02": "旅遊",
    "03": "戶外教學",
    "04": "企業教育訓練",
    "05": "員工旅遊",
    "06": "進香團",
    "07": "其他"
  };
  const r_purpose = () => {
    if (quote_type === "1") {
      return (purpose && purposeList[purpose]) || "--";
    } else if (quote_type === "2") {
      return "接機";
    } else {
      return "送機";
    }
  };
  const listArray = [
    {
      title: "用車目的",
      value: r_purpose()
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
