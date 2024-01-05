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
        bold: false,
        value: "Volove歐洲廠",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              Volove歐洲廠
            </option>
          </Select>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "購買日期",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "購買價格",
        bold: false,
        value: "NT 10000,000",
        editEle: <CustomTextInputField value={"NT 10000,000"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "購買當時的里程數",
        bold: false,
        value: "1,000 公里",
        editEle: <CustomTextInputField value={"1,000 公里"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保固截止日期",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保固最大里程數",
        bold: false,
        value: "200,000 公里",
        editEle: <CustomTextInputField value={"200,000 公里"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "融資",
        bold: false,
        value: "貸款",
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
        bold: false,
        value: "台新",
        editEle: <CustomTextInputField value={"台新"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "金額",
        bold: false,
        value: "NT 5000,000",
        editEle: <CustomTextInputField value={"NT 5000,000"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "年利率",
        bold: false,
        value: "2 %",
        editEle: <CustomTextInputField value={"2 %"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "開始日期",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "結束日期",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "分期期數",
        bold: false,
        value: "24",
        editEle: <CustomTextInputField value={"24"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "首期付款金額",
        bold: false,
        value: "NT 30,000",
        editEle: <CustomTextInputField value={"NT 30,000"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "月付金額",
        bold: false,
        value: "NT 30,000",
        editEle: <CustomTextInputField value={"NT 30,000"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "付款帳號",
        bold: false,
        value: "220056558988",
        editEle: <CustomTextInputField value={"220056558988"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "備註",
        bold: false,
        value: "我是備註",
        editEle: <CustomTextInputField value={"我是備註"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "是否加入計算報表",
        bold: false,
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
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "強制險到期日",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "聯保到期日",
        bold: false,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "承保公司",
        bold: false,
        value: "保安心公司",
        editEle: <CustomTextInputField value={"保安心公司"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "保額",
        bold: false,
        value: "NT 10,000,000",
        editEle: <CustomTextInputField value={"NT 10,000,000"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務姓名",
        bold: false,
        value: "林心安",
        editEle: <CustomTextInputField value={"林心安"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務手機",
        bold: false,
        value: "0988222666",
        editEle: <CustomTextInputField value={"0988222666"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務市話",
        bold: false,
        value: "22337766",
        editEle: <CustomTextInputField value={"22337766"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "業務信箱",
        bold: false,
        value: "lion@example.com",
        editEle: <CustomTextInputField value={"lion@example.com"} />
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
