import React from "react";
import { ApprovalSTY } from "./style";
import timeUtil from "../schedule.timeUtil";
import EventBtn from "@contents/Schedule/EventBtn";
import { WKDAY_LABEL, EVENT_TYPE } from "../shift.data";
import InfoCard from "@components/InfoCard";
import NewUploader from "@components/NewUploader";
import FileCard from "@components/FileCard";


const ApprovalTable = () => {
  const BasicInFo = [

    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "時間",
      value: "2024-01-03 (三) 13:00 ～ 18:00",
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "類別",
      value: "病假",
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "說明",
      value: "這裡放置請假說明。",
    },
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      label: "證明文件",
      bold: true,
      value: <FileCard />
    }
  ];
  return (
    <ApprovalSTY>
      
      <InfoCard
        isEdit={false}
        infoData={BasicInFo}
        infoTitle="簽核內容"
        hasProfileCard={false}
      />
    </ApprovalSTY>
  );
};

export default ApprovalTable;
