type MENU = {
  no: string;
  menu_no: string;
  menu_name: string;
  main_category?: string;
  menu_url: string;
  menu_lvl: number;
  menu_sort?: number;
  menu_status: string;
  creid: string;
  credate: Date;
  updid?: string;
  upddate?: Date;
};
const homePageData = [
  {
    name: "公司設定",
    url: "/",
    subList: [
      {
        name: "公司清單",
        url: "/company",
        subList: null
      }
    ]
  },
  {
    name: "供應商",
    url: "/",
    subList: [
      {
        name: "外部車隊",
        url: "/vendor",
        subList: null
      },
      {
        name: "維修廠",
        url: "/vendor",
        subList: null
      },
      {
        name: "燃料",
        url: "/vendor",
        subList: null
      },
      {
        name: "Etag",
        url: "/vendor",
        subList: null
      },
      {
        name: "設備庫存",
        url: "/vendor",
        subList: null
      },
      {
        name: "保險",
        url: "/vendor",
        subList: null
      },
      {
        name: "其他",
        url: "/vendor",
        subList: null
      }
    ]
  },
  {
    name: "汽車",
    url: "/",
    subList: [
      {
        name: "車輛清單",
        url: "/bus",
        subList: null
      },
      {
        name: "車輛分配",
        url: "/bus",
        subList: null
      },
      {
        name: "儀表歷史",
        url: "/bus",
        subList: null
      },
      {
        name: "費用歷史",
        url: "/bus",
        subList: null
      },
      {
        name: "替代分析",
        url: "/bus",
        subList: null
      }
    ]
  },
  {
    name: "客戶",
    url: "/",
    subList: [
      {
        name: "客戶清單",
        url: "/customer",
        subList: null
      }
    ]
  },
  {
    name: "駕駛",
    url: "/",
    subList: [
      {
        name: "駕駛清單",
        url: "/driver",
        subList: null
      }
    ]
  },
  {
    name: "建立員工設定",
    url: "/",
    subList: [
      {
        name: "員工清單",
        url: "/employee",
        subList: null
      }
    ]
  },
  {
    name: "入門",
    url: "/"
  },
  {
    name: "儀錶板",
    url: "/"
  },
  {
    name: "設備",
    url: "/"
  },
  {
    name: "檢查",
    url: "/",
    subList: [
      {
        name: "檢查紀錄",
        url: "/",
        subList: null
      },
      {
        name: "項目失敗",
        url: "/",
        subList: null
      },
      {
        name: "時間表",
        url: "/",
        subList: null
      },
      {
        name: "形式",
        url: "/",
        subList: null
      }
    ]
  },
  {
    name: "問題",
    url: "/",
    subList: [
      {
        name: "問題清單",
        url: "/",
        subList: null
      },
      {
        name: "故障",
        url: "/",
        subList: null
      },
      {
        name: "召回",
        url: "/",
        subList: null
      }
    ]
  },
  {
    name: "提醒事項",
    url: "/",
    subList: [
      {
        name: "服務提示",
        url: "/",
        subList: null
      },
      {
        name: "車輛更新",
        url: "/",
        subList: null
      },
      {
        name: "聯繫人更新",
        url: "/",
        subList: null
      }
    ]
  },
  {
    name: "維保",
    url: "/",
    subList: [
      {
        name: "維保歷史",
        url: "/",
        subList: null
      },
      {
        name: "維保任務",
        url: "/",
        subList: null
      },
      {
        name: "維保項目",
        url: "/",
        subList: null
      },
      {
        name: "維修廠",
        url: "/",
        subList: null
      }
    ]
  },
  {
    name: "燃料歷史",
    url: "/",
    subList: null
  },
  {
    name: "車庫",
    url: "/",
    subList: null
  },
  {
    name: "文件",
    url: "/",
    subList: null
  },
  {
    name: "報告",
    url: "/",
    subList: null
  }
];

const fetchMenuData = () => {
  return homePageData;
};

type MenuDataType = typeof homePageData;

export { fetchMenuData, type MenuDataType };
