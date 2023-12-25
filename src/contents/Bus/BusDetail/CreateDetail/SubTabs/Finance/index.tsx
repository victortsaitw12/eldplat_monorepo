import React, { useState } from "react";
import Image from "next/image";
import { Pane, Select, Radio, Checkbox } from "evergreen-ui";
import { DivSTY } from "./style";
import CustomTextInputField from "@components/CustomTextInputField";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import InfoCard from "@components/InfoCard";
import CustomDatePicker from "@components/CustomDatePicker";

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

function FinanceDetail({ isEdit }: Props) {
  const FinanceInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車輛採購供應商",
        bold: true,
        value: "",
        editEle: (
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
        req: false,
        label: "購買日期",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "購買價格",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "購買當時的里程數",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保固截止日期",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保固最大里程數",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "融資",
        bold: true,
        value: "",
        editEle: (
          <Pane className={"radio-wrapper"}>
            <Radio checked name="group" label="無" />
            <Radio checked name="group" label="貸款" />
            <Radio checked name="group" label="租賃" />
          </Pane>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "貸款銀行",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "金額",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "年利率",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "開始日期",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "結束日期",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "分期期數",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "首期付款金額",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "月付金額",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "付款帳號",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "備註",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "是否加入計算報表",
        bold: true,
        value: "是",
        editEle: <Checkbox label="加入計算報表" />
      }
    ]
  ];

  const InsuranceInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車險到期日",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "強制險到期日",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "聯保到期日",
        bold: true,
        value: "",
        editEle: <CustomDatePicker />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "承保公司",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保額",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務姓名",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務手機",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務市話",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務信箱",
        bold: true,
        value: "",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  return (
    <DivSTY>
      <Pane className={"finance"}>
        <InfoCard isEdit={isEdit} infoData={FinanceInfo} infoTitle="財務成本" />
        <InfoCard isEdit={isEdit} infoData={InsuranceInfo} infoTitle="保險" />
      </Pane>
    </DivSTY>
  );
}

export default FinanceDetail;
