import React from "react";
import { Select, Switch, Pane, Radio, Checkbox } from "evergreen-ui";
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
      req: false,
      label: "車牌",
      bold: false,
      value: "KAA-001",
      editEle: <CustomTextInputField value={"KAA-001"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車種",
      bold: false,
      value: "大巴",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            大巴
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "座位數",
      bold: false,
      value: "43",
      editEle: <CustomTextInputField value={"43"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "行李數",
      bold: false,
      value: "43",
      editEle: <CustomTextInputField value={"43"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎號碼",
      bold: false,
      value: "100099884455",
      editEle: <CustomTextInputField value={"100099884455"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車身號碼",
      bold: false,
      value: "203349556874",
      editEle: <CustomTextInputField value={"203349556874"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "行照號碼",
      bold: false,
      value: "1209384",
      editEle: <CustomTextInputField value={"1209384"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "行照有效日期",
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
      label: "領牌日期",
      bold: false,
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "領牌里程數",
      bold: false,
      value: "12,000 公里",
      editEle: <CustomTextInputField value={"12,000 公里"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "出廠日期",
      bold: false,
      value: "2023-12-01",
      editEle: <CustomDatePicker />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "出廠里程數",
      bold: false,
      value: "12,000 公里",
      editEle: <CustomTextInputField value={"12,000 公里"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車齡",
      bold: false,
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
      bold: false,
      value: "雄雄獅頭號",
      editEle: <CustomTextInputField value={"雄雄獅頭號"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "品牌",
      bold: false,
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
      bold: false,
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
      bold: false,
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
      bold: false,
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
      req: false,
      label: "所有權",
      bold: false,
      value: "高級柴油",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            高級柴油
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "主要駕駛",
      bold: false,
      value: "AA1245676675",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            AA1245676675
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "支援駕駛",
      bold: false,
      value: "中油",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            中油
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
      bold: false,
      value: "CC124472814675",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            CC124472814675
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車隊",
      bold: false,
      value: "遠通電收",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            遠通電收
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "目前派遣",
      bold: false,
      value: "遠通電收",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            遠通電收
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
      bold: false,
      value: "高級柴油",
      editEle: <CustomTextInputField value={"高級柴油"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "加油卡號",
      bold: false,
      value: "AA1245676675",
      editEle: <CustomTextInputField value={"AA1245676675"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "加油卡供應商",
      bold: false,
      value: "中油",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            中油
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
      bold: false,
      value: "CC124472814675",
      editEle: <CustomTextInputField value={"CC124472814675"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "尿素供應商",
      bold: false,
      value: "遠通電收",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            遠通電收
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "ETC卡號",
      bold: false,
      value: "BB1245676675",
      editEle: <CustomTextInputField value={"BB1245676675"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "ETC供應商",
      bold: false,
      value: "遠通電收",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            遠通電收
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

export const FinanceInfo: InfoArray = [
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

export const InsuranceInfo: InfoArray = [
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

export const SpecificationInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "寬度",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "高度",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "長度",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "內部容積",
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "載客量",
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "貨物量",
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "離地間隙",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "底盤長度",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
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
      bold: false,
      value: "白",
      editEle: <CustomTextInputField value={"白"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "符號",
      bold: false,
      value: "雄獅LOGO",
      editEle: <CustomTextInputField value={"雄獅LOGO"} />
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
      bold: false,
      value: "100 公斤",
      editEle: <CustomTextInputField value={"100 公斤"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車輛總重量",
      bold: false,
      value: "100 公斤",
      editEle: <CustomTextInputField value={"100 公斤"} />
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
      bold: false,
      value: "100 公斤",
      editEle: <CustomTextInputField value={"100 公斤"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車輛總重量",
      bold: false,
      value: "100 公斤",
      editEle: <CustomTextInputField value={"100 公斤"} />
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
      bold: false,
      value: "摘要",
      editEle: <CustomTextInputField value={"摘要"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎品牌",
      bold: false,
      value: "品牌",
      editEle: <CustomTextInputField value={"品牌"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "進氣系統",
      bold: false,
      value: "進氣系統",
      editEle: <CustomTextInputField value={"進氣系統"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎缸體類型",
      bold: false,
      value: "引擎缸體類型",
      editEle: <CustomTextInputField value={"引擎缸體類型"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽缸孔徑",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "凸輪軸類型",
      bold: false,
      value: "凸輪軸類型",
      editEle: <CustomTextInputField value={"凸輪軸類型"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "壓縮比",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽缸",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "排量大小",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "燃油進氣方式",
      bold: false,
      value: "燃油進氣方式",
      editEle: <CustomTextInputField value={"燃油進氣方式"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大馬力",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大扭矩",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "最大轉速",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "衝程",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "每缸氣門數量",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
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
      bold: false,
      value: "驅動類型",
      editEle: <CustomTextInputField value={"驅動類型"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "煞車系統",
      bold: false,
      value: "煞車系統",
      editEle: <CustomTextInputField value={"煞車系統"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪輪距",
      bold: false,
      value: "前輪輪距",
      editEle: <CustomTextInputField value={"前輪輪距"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪輪距",
      bold: false,
      value: "後輪輪距",
      editEle: <CustomTextInputField value={"後輪輪距"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "軸距",
      bold: false,
      value: "100 公分",
      editEle: <CustomTextInputField value={"100 公分"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪直徑",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪直徑",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後軸",
      bold: false,
      value: "後軸",
      editEle: <CustomTextInputField value={"後軸"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪輪胎類型",
      bold: false,
      value: "前輪輪胎類型",
      editEle: <CustomTextInputField value={"前輪輪胎類型"} />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "前輪胎壓大小",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪輪胎類型",
      bold: false,
      value: "後輪輪胎類型",
      editEle: <CustomTextInputField value={"後輪輪胎類型"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "後輪胎壓大小",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
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
      bold: false,
      value: "摘要",
      editEle: <CustomTextInputField value={"摘要"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "品牌",
      bold: false,
      value: "品牌",
      editEle: <CustomTextInputField value={"品牌"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "類別",
      bold: false,
      value: "類別",
      editEle: <CustomTextInputField value={"類別"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "檔位",
      bold: false,
      value: "檔位",
      editEle: <CustomTextInputField value={"檔位"} />
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
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "高速公路",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "綜合",
      bold: false,
      value: "100",
      editEle: <CustomTextInputField value={"100"} />
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
      bold: false,
      value: "汽油質量",
      editEle: <CustomTextInputField value={"汽油質量"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "油箱1容量大小",
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "油箱2容量大小",
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
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
      bold: false,
      value: "100 公升",
      editEle: <CustomTextInputField value={"100 公升"} />
    }
  ]
];
