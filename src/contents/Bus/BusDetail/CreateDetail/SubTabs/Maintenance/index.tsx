import React, { useState } from "react";
import { Pane, Select } from "evergreen-ui";
import { DivSTY } from "./style";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import InfoCard from "@components/InfoCard";
import CustomTextInputField from "@components/CustomTextInputField";
interface Props {
  isEdit: boolean;
}

function MaintenanceDetail({ isEdit }: Props) {
  const MaintenanceInfo = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "時間條件",
        bold: true,
        value: "1 年",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "里程條件",
        bold: true,
        value: "12,000 公里",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "配合維修廠",
        bold: true,
        value: "Volove中壢廠",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              請選擇
            </option>
          </Select>
        )
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保養內容",
        bold: true,
        value: "全車檢修",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  return (
    <DivSTY>
      <InfoCard
        isEdit={isEdit}
        infoData={MaintenanceInfo}
        infoTitle="定期保養設定"
      />
    </DivSTY>
  );
}

export default MaintenanceDetail;
