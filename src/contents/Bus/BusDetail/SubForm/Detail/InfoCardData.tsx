import React from "react";
import { Select } from "evergreen-ui";
import TagGenerator from "src/components/TagGenerator";

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
      label: "車種",
      bold: false,
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
      req: false,
      label: "座位數",
      bold: false,
      value: "43",
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
      label: "行李數",
      bold: false,
      value: "43",
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
      label: "引擎號碼",
      bold: false,
      value: "100099884455",
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
      label: "車身號碼",
      bold: false,
      value: "203349556874",
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
      label: "行照號碼",
      bold: false,
      value: "1209384",
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
      label: "行照有效日期",
      bold: false,
      value: "2023-12-01",
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
      label: "領牌日期",
      bold: false,
      value: "2023-12-01",
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
      label: "領牌里程數",
      bold: false,
      value: "12,000 公里",
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
      label: "出廠日期",
      bold: false,
      value: "2023-12-01",
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
      label: "出廠里程數",
      bold: false,
      value: "12,000 公里",
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
      label: "車齡",
      bold: false,
      value: "1年",
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
      label: "名稱",
      bold: false,
      value: "雄雄獅頭號",
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
      label: "品牌",
      bold: false,
      value: "Volove",
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
      label: "車型",
      bold: false,
      value: "360",
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
      label: "國別",
      bold: false,
      value: "臺灣",
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
      label: "是否啟用",
      bold: false,
      value: "是",
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
      bold: false,
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
      req: false,
      label: "加油卡號",
      bold: false,
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
      label: "加油卡供應商",
      bold: false,
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
      bold: false,
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
      label: "尿素供應商",
      bold: false,
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
      bold: false,
      value: "BB1245676675",
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
      label: "ETC供應商",
      bold: false,
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
      bold: false,
      value: "1 年",
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
      label: "里程條件",
      bold: false,
      value: "12,000 公里",
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
      label: "配合維修廠",
      bold: false,
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
      bold: false,
      value: "全車檢修",
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
      bold: false,
      value: "2023-12-01",
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
      label: "購買價格",
      bold: false,
      value: "NT 10000,000",
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
      label: "購買當時的里程數",
      bold: false,
      value: "1,000 公里",
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
      label: "保固截止日期",
      bold: false,
      value: "2023-12-01",
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
      label: "保固最大里程數",
      bold: false,
      value: "200,000 公里",
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
      label: "融資",
      bold: false,
      value: "貸款",
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
      label: "貸款銀行",
      bold: false,
      value: "台新",
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
      label: "金額",
      bold: false,
      value: "NT 5000,000",
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
      label: "年利率",
      bold: false,
      value: "2 %",
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
      label: "開始日期",
      bold: false,
      value: "2023-12-01",
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
      label: "結束日期",
      bold: false,
      value: "2023-12-01",
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
      label: "分期期數",
      bold: false,
      value: "24",
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
      label: "首期付款金額",
      bold: false,
      value: "NT 30,000",
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
      label: "月付金額",
      bold: false,
      value: "NT 30,000",
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
      label: "付款帳號",
      bold: false,
      value: "220056558988",
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
      label: "備註",
      bold: false,
      value: "我是備註",
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
      label: "是否加入計算報表",
      bold: false,
      value: "是",
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

export const InsuranceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "車險到期日",
      bold: false,
      value: "2023-12-01",
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
      label: "強制險到期日",
      bold: false,
      value: "2023-12-01",
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
      label: "聯保到期日",
      bold: false,
      value: "2023-12-01",
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
      label: "承保公司",
      bold: false,
      value: "保安心公司",
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
      label: "保額",
      bold: false,
      value: "NT 10,000,000",
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
      label: "業務姓名",
      bold: false,
      value: "林心安",
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
      label: "業務手機",
      bold: false,
      value: "0988222666",
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
      label: "業務市話",
      bold: false,
      value: "22337766",
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
      label: "業務信箱",
      bold: false,
      value: "lion@example.com",
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

export const SpecificationInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "寬度",
      bold: false,
      value: "100 公分",
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
      label: "高度",
      bold: false,
      value: "100 公分",
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
      label: "長度",
      bold: false,
      value: "100 公分",
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
      label: "內部容積",
      bold: false,
      value: "100 公升",
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
      label: "載客量",
      bold: false,
      value: "100 公升",
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
      label: "貨物量",
      bold: false,
      value: "100 公升",
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
      label: "離地間隙",
      bold: false,
      value: "100 公分",
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
      label: "底盤長度",
      bold: false,
      value: "100 公分",
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

export const AppearanceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "顏色",
      bold: false,
      value: "白",
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
      label: "符號",
      bold: false,
      value: "雄獅LOGO",
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

export const WeightInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "空車重量",
      bold: false,
      value: "100 公斤",
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
      label: "車輛總重量",
      bold: false,
      value: "100 公斤",
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

export const PerformanceInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "空車重量",
      bold: false,
      value: "100 公斤",
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
      label: "車輛總重量",
      bold: false,
      value: "100 公斤",
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

export const EngineInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "引擎摘要",
      bold: false,
      value: "摘要",
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
      label: "引擎品牌",
      bold: false,
      value: "品牌",
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
      label: "進氣系統",
      bold: false,
      value: "進氣系統",
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
      label: "引擎缸體類型",
      bold: false,
      value: "引擎缸體類型",
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
      label: "汽缸孔徑",
      bold: false,
      value: "100 公分",
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
      label: "凸輪軸類型",
      bold: false,
      value: "凸輪軸類型",
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
      label: "壓縮比",
      bold: false,
      value: "100",
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
      label: "汽缸",
      bold: false,
      value: "100",
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
      label: "排量大小",
      bold: false,
      value: "100 公分",
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
      label: "燃油進氣方式",
      bold: false,
      value: "燃油進氣方式",
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
      label: "最大馬力",
      bold: false,
      value: "100",
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
      label: "最大扭矩",
      bold: false,
      value: "100",
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
      label: "最大轉速",
      bold: false,
      value: "100",
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
      label: "衝程",
      bold: false,
      value: "100",
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
      label: "每缸氣門數量",
      bold: false,
      value: "100",
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

export const TireInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "驅動類型",
      bold: false,
      value: "驅動類型",
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
      label: "煞車系統",
      bold: false,
      value: "煞車系統",
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
      label: "前輪輪距",
      bold: false,
      value: "前輪輪距",
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
      label: "後輪輪距",
      bold: false,
      value: "後輪輪距",
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
      label: "軸距",
      bold: false,
      value: "100 公分",
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
      label: "前輪直徑",
      bold: false,
      value: "100",
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
      label: "後輪直徑",
      bold: false,
      value: "100",
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
      label: "後軸",
      bold: false,
      value: "後軸",
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
      label: "前輪輪胎類型",
      bold: false,
      value: "前輪輪胎類型",
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
      label: "前輪胎壓大小",
      bold: false,
      value: "100",
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
      label: "後輪輪胎類型",
      bold: false,
      value: "後輪輪胎類型",
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
      label: "後輪胎壓大小",
      bold: false,
      value: "100",
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

export const TransmissionInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "摘要",
      bold: false,
      value: "摘要",
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
      label: "品牌",
      bold: false,
      value: "品牌",
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
      label: "類別",
      bold: false,
      value: "類別",
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
      label: "檔位",
      bold: false,
      value: "檔位",
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

export const EcoMileageInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "市區",
      bold: false,
      value: "100",
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
      label: "高速公路",
      bold: false,
      value: "100",
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
      label: "綜合",
      bold: false,
      value: "100",
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

export const FuelInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "汽油質量",
      bold: false,
      value: "汽油質量",
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
      label: "油箱1容量大小",
      bold: false,
      value: "100 公升",
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
      label: "油箱2容量大小",
      bold: false,
      value: "100 公升",
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

export const OilInfo: InfoArray = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "機油容量",
      bold: false,
      value: "100 公升",
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
