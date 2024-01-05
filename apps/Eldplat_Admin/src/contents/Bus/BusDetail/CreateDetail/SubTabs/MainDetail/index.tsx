import React, { useState } from "react";
import Image from "next/image";
import { Pane, Select, Switch } from "evergreen-ui";
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
import CustomDatePicker from "@components/CustomDatePicker";
import TagGenerator from "@components/TagGenerator";

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

export const DUMMY_TAG_DATA = [
  {
    label: "接受跨夜行程",
    value: "01"
  },
  {
    label: "擅長跑山路",
    value: "02"
  },
  {
    label: "老家在台東",
    value: "03"
  }
];

function MainDetail({ isEdit }: Props) {
  const tagList = (
    <ul className="tag-wrapper">
      {DUMMY_TAG_DATA.map((tag) => (
        <li key={tag.value} className="tag">
          {tag.label}
        </li>
      ))}
    </ul>
  );

  const IdentityInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "車牌",
        bold: true,
        value: "KAA-001",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "車種",
        bold: true,
        value: "大巴",
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
        req: true,
        label: "座位數",
        bold: true,
        value: "43",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "行李數",
        bold: true,
        value: "43",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎號碼",
        bold: true,
        value: "100099884455",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "車身號碼",
        bold: true,
        value: "203349556874",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "行照號碼",
        bold: true,
        value: "1209384",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "行照有效日期",
        bold: true,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "領牌日期",
        bold: true,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "領牌里程數",
        bold: true,
        value: "12,000 公里",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "出廠日期",
        bold: true,
        value: "2023-12-01",
        editEle: <CustomDatePicker />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "出廠里程數",
        bold: true,
        value: "12,000 公里",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車齡",
        bold: true,
        value: "1年",
        editEle: <CustomTextInputField disabled value={"1年"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "名稱",
        bold: true,
        value: "雄雄獅頭號",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "品牌",
        bold: true,
        value: "Volvo",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              Volvo
            </option>
          </Select>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車型",
        bold: true,
        value: "360",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              360
            </option>
          </Select>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "國別",
        bold: true,
        value: "臺灣",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              臺灣
            </option>
          </Select>
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "是否啟用",
        bold: true,
        value: "是",
        editEle: (
          <div className="switch-wrapper">
            <Switch checked />
            <span>啟用</span>
          </div>
        )
      }
    ]
  ];

  const CategoryInfo = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "所有權",
        bold: true,
        value: "高級柴油",
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
        req: true,
        label: "主要駕駛",
        bold: true,
        value: "AA1245676675",
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
        label: "支援駕駛",
        bold: true,
        value: "中油",
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
        label: "派駐地",
        bold: true,
        value: "CC124472814675",
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
        label: "車隊",
        bold: true,
        value: "遠通電收",
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
        label: "目前派遣",
        bold: true,
        value: "遠通電收",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              請選擇
            </option>
          </Select>
        )
      }
    ]
  ];

  const CardInfo = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "油品",
        bold: true,
        value: "高級柴油",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "加油卡號",
        bold: true,
        value: "AA1245676675",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "加油卡供應商",
        bold: true,
        value: "中油",
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
        label: "尿素卡號",
        bold: true,
        value: "CC124472814675",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "尿素供應商",
        bold: true,
        value: "遠通電收",
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
        label: "ETC卡號",
        bold: true,
        value: "BB1245676675",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "ETC供應商",
        bold: true,
        value: "遠通電收",
        editEle: (
          <Select className={"select-wrapper"}>
            <option value="foo" selected>
              請選擇
            </option>
          </Select>
        )
      }
    ]
  ];

  const TagInFo = [
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: tagList,
      editEle: <TagGenerator data={DUMMY_TAG_DATA} />
    }
  ];

  return (
    <DivSTY>
      <InfoCard isEdit={isEdit} infoData={IdentityInfo} infoTitle="基本資料" />
      <Pane className={"col-wrapper"}>
        <InfoCard
          isEdit={isEdit}
          infoData={CategoryInfo}
          infoTitle="分類"
          height={365}
        />
        <InfoCard
          isEdit={isEdit}
          infoData={CardInfo}
          infoTitle="相關卡號"
          height={365}
        />
      </Pane>
      <Pane className={"w-50"}>
        <InfoCard isEdit={isEdit} infoData={TagInFo} infoTitle="標籤" />
      </Pane>
    </DivSTY>
  );
}

export default MainDetail;
