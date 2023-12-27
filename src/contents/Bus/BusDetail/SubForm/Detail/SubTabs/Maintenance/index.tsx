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
interface Props {
  isEdit: boolean;
}

interface InfoItem {
  listClassName: string;
  readonly: boolean;
  req: boolean;
  label: string;
  bold: boolean;
  value: string;
  editEle: React.ReactNode;
}

type InfoArray = InfoItem[][];

function MaintenanceDetail({ isEdit }: Props) {
  const MaintenanceInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "時間條件",
        bold: false,
        value: "1 年",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              1 年
            </option>
          </Select>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "里程條件",
        bold: false,
        value: "12,000 公里",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              12,000 公里
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
        label: "配合維修廠",
        bold: false,
        value: "Volove中壢廠",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              Volove中壢廠
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
        bold: false,
        value: "全車檢修",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              全車檢修
            </option>
          </Select>
        )
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
