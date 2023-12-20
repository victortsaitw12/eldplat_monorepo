import React from "react";
import { Select, Switch, Group, Radio, Pane, Checkbox } from "evergreen-ui";
import TagGenerator from "src/components/TagGenerator";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomDatePicker from "@components/CustomDatePicker";

interface InfoItem {
  listClassName: string;
  readonly: boolean;
  req: boolean;
  label: string;
  bold: boolean;
  value: string;
  editEle: React.ReactNode;
}

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

export const tagList = (
  <ul className="tag-wrapper">
    {DUMMY_TAG_DATA.map((tag) => (
      <li key={tag.value} className="tag">
        {tag.label}
      </li>
    ))}
  </ul>
);

type InfoArray = InfoItem[][];

export const IdentityInfo: InfoArray = [
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

export const CategoryInfo = [
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

export const CardInfo = [
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

export const TagInFo = [
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

export const MaintenanceInfo = [
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

export const FinanceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車輛採購供應商",
      bold: true,
      value: "Volove歐洲廠",
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
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "購買價格",
      bold: true,
      value: "NT 10000,000",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "購買當時的里程數",
      bold: true,
      value: "1,000 公里",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "保固截止日期",
      bold: true,
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "保固最大里程數",
      bold: true,
      value: "200,000 公里",
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
      bold: true,
      value: "台新",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "金額",
      bold: true,
      value: "NT 5000,000",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "年利率",
      bold: true,
      value: "2 %",
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
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "結束日期",
      bold: true,
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
      bold: true,
      value: "24",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "首期付款金額",
      bold: true,
      value: "NT 30,000",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "月付金額",
      bold: true,
      value: "NT 30,000",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "付款帳號",
      bold: true,
      value: "220056558988",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: "我是備註",
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

export const InsuranceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車險到期日",
      bold: true,
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "強制險到期日",
      bold: true,
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "聯保到期日",
      bold: true,
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
      bold: true,
      value: "保安心公司",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "保額",
      bold: true,
      value: "NT 10,000,000",
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
      value: "林心安",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "業務手機",
      bold: true,
      value: "0988222666",
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
      value: "22337766",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "業務信箱",
      bold: true,
      value: "lion@example.com",
      editEle: <CustomTextInputField />
    }
  ]
];

export const SpecificationInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "寬度",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "高度",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "長度",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "內部容積",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "載客量",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "貨物量",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "離地間隙",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "底盤長度",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    }
  ]
];

export const AppearanceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "顏色",
      bold: true,
      value: "白",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "符號",
      bold: true,
      value: "雄獅LOGO",
      editEle: <CustomTextInputField />
    }
  ]
];

export const WeightInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "空車重量",
      bold: true,
      value: "100 公斤",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車輛總重量",
      bold: true,
      value: "100 公斤",
      editEle: <CustomTextInputField />
    }
  ]
];

export const PerformanceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "空車重量",
      bold: true,
      value: "100 公斤",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車輛總重量",
      bold: true,
      value: "100 公斤",
      editEle: <CustomTextInputField />
    }
  ]
];

export const EngineInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎摘要",
      bold: true,
      value: "摘要",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎品牌",
      bold: true,
      value: "品牌",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "進氣系統",
      bold: true,
      value: "進氣系統",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎缸體類型",
      bold: true,
      value: "引擎缸體類型",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽缸孔徑",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "凸輪軸類型",
      bold: true,
      value: "凸輪軸類型",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "壓縮比",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽缸",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "排量大小",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "燃油進氣方式",
      bold: true,
      value: "燃油進氣方式",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大馬力",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大扭矩",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大轉速",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "衝程",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "每缸氣門數量",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ]
];

export const TireInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "驅動類型",
      bold: true,
      value: "驅動類型",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "煞車系統",
      bold: true,
      value: "煞車系統",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪輪距",
      bold: true,
      value: "前輪輪距",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪輪距",
      bold: true,
      value: "後輪輪距",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "軸距",
      bold: true,
      value: "100 公分",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪直徑",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪直徑",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後軸",
      bold: true,
      value: "後軸",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪輪胎類型",
      bold: true,
      value: "前輪輪胎類型",
      editEle: <CustomTextInputField />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪胎壓大小",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪輪胎類型",
      bold: true,
      value: "後輪輪胎類型",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪胎壓大小",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ]
];

export const TransmissionInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "摘要",
      bold: true,
      value: "摘要",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "品牌",
      bold: true,
      value: "品牌",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "類別",
      bold: true,
      value: "類別",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "檔位",
      bold: true,
      value: "檔位",
      editEle: <CustomTextInputField />
    }
  ]
];

export const EcoMileageInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "市區",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "高速公路",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "綜合",
      bold: true,
      value: "100",
      editEle: <CustomTextInputField />
    }
  ]
];

export const FuelInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽油質量",
      bold: true,
      value: "汽油質量",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "油箱1容量大小",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "油箱2容量大小",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    }
  ]
];

export const OilInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "機油容量",
      bold: true,
      value: "100 公升",
      editEle: <CustomTextInputField />
    }
  ]
];
