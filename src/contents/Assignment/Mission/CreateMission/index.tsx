import React from "react";
import { ApprovalSTY } from "./style";
import { Pane, Select } from "evergreen-ui";
import EventBtn from "@contents/Schedule/EventBtn";
import InfoCard from "@components/InfoCard";
import CustomDatePicker from "@components/CustomDatePicker";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomTextArea from "@components/CustomTextArea";
import CustomSelect from "@components/CustomTextArea";
import NewUploader from "@components/NewUploader";
import FileCard from "@components/FileCard";

const CreateMission = () => {
  const missionInfo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "日期區間",
      bold: true,
      value: <CustomDatePicker placeholder="請選取時間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "時間",
      bold: true,
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "起點",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "迄點",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    }
  ];
  const dispatchInfo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "車輛",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "駕駛",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: <CustomTextArea placeholder="請輸入說明" />
    }
  ];
  return (
    <ApprovalSTY>
      <Pane className="info_wrapper">
        <InfoCard
          isEdit={false}
          infoData={missionInfo}
          infoTitle="新增任務"
          hasProfileCard={false}
        />
      </Pane>
      <Pane className="info_wrapper">
        <InfoCard
          isEdit={false}
          infoData={dispatchInfo}
          infoTitle="任務指派"
          hasProfileCard={false}
        />
      </Pane>
    </ApprovalSTY>
  );
};

export default CreateMission;
