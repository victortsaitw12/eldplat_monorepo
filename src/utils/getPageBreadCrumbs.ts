import { NextRouter } from "next/router";

interface I_routers {
  [index: string]: {
    label: string;
    url?: string | { pathname: string; query: any };
  }[];
}

const breadcrumbs: I_routers = {
  "/": [{ label: "首頁", url: "/" }],
  "/org": [
    { label: "首頁", url: "/" },
    { label: "組織設定", url: "/org" }
  ],
  "/role": [
    { label: "首頁", url: "/" },
    { label: "角色權限", url: "/role" }
  ],
  "/role/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "角色權限", url: "/role" },
    { label: "新增、檢視、編輯角色" }
  ],
  "/account": [
    { label: "首頁", url: "/" },
    { label: "使用者列表", url: "/account" }
  ],
  "/account/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "使用者", url: "/account" },
    { label: "檢視、編輯使用者", url: "" }
  ],

  "/account/setting/[id]": [
    { label: "首頁", url: "/" },
    { label: "個人設定", url: "/account/setting" },
    { label: "修改密碼", url: "" }
  ],
  "/driver": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" }
  ],
  "/driver/detail/create": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" },
    { label: "新增駕駛", url: "" }
  ],
  "/driver/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" },
    { label: "檢視駕駛", url: "" }
  ],
  "/driver/training/[id]": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" },
    { label: "檢視駕駛", url: "/driver/detail/[id]" },
    { label: "教育訓練", url: "" }
  ],
  "/driver/management": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" },
    { label: "駕駛管理設定", url: "" }
  ],
  "/schedule": [
    { label: "首頁", url: "/" },
    { label: "駕駛出勤管理", url: "/" }
  ],
  "/schedule/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "駕駛出勤管理", url: "/schedule" },
    { label: "個人班表", url: "" }
  ],
  "/schedule/approval": [
    { label: "首頁", url: "/" },
    { label: "駕駛出勤管理", url: "/schedule" },
    { label: "個人班表", url: "/schedule/detail/[id]" },
    { label: "簽核", url: "/approval" }
  ],
  "/assignment": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" }
  ],
  "/assignment/detail/create": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" },
    { label: "新增任務", url: "" }
  ],
  "/assignment/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" },
    { label: "修改任務", url: "" }
  ],
  "/assignment/dispatch": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" },
    { label: "新增派單", url: "" }
  ],
  "/assignment/dispatch/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" },
    { label: "修改派單", url: "" }
  ],
  "/assignment/dispatch/create": [
    { label: "首頁", url: "/" },
    { label: "任務指派", url: "/assignment" },
    { label: "手動派單", url: "" }
  ],
  "/orders": [
    { label: "首頁", url: "/" },
    { label: "訂單列表", url: "/orders" }
  ],
  "/orders/detail/create": [
    { label: "首頁", url: "/" },
    { label: "訂單列表", url: "/orders" },
    { label: "檢視訂單", url: "" }
  ],
  "/orders/doc/create": [
    { label: "首頁", url: "/" },
    { label: "訂單列表", url: "/orders" },
    { label: "檢視訂單", url: "/orders/detail/create" },
    { label: "新增文件", url: "" }
  ],
  // ----------------------------------------------------------------------- V2 above
  // ----------------------------------------------------------------------- V1 below
  "/bus": [
    { label: "首頁", url: "/" },
    { label: "車輛列表", url: "/bus" }
  ],
  "/bus/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "車輛列表", url: "/bus" },
    { label: "檢視車輛", url: "" }
  ],
  "/bus/detail/create": [
    { label: "首頁", url: "/" },
    { label: "車輛列表", url: "/bus" },
    { label: "新增車輛", url: "" }
  ],
  "/bus_management": [
    { label: "首頁", url: "/" },
    { label: "車輛列表", url: "/bus" },
    { label: "車輛管理設定", url: "" }
  ],
  // ----------------------------------------------------------------------- V2 above
  // ----------------------------------------------------------------------- V1 below
  // "/bus": [
  //   { label: "首頁", url: "/" },
  //   { label: "車輛清單", url: "/bus" }
  // ],
  // "/bus/detail/[id]": [
  //   { label: "首頁", url: "/" },
  //   { label: "車輛清單", url: "/bus" },
  //   { label: "檢視", url: "" }
  // ],
  "/customer": [
    { label: "入門", url: "/" },
    { label: "客戶", url: "/customer" }
  ],
  "/customer/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "客戶", url: "/customer" },
    { label: "詳情", url: "" }
  ],
  "/vendor/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "供應商", url: "/vendor" },
    { label: "詳情", url: "" }
  ],
  // "/maintenance/notice": [
  //   { label: "入門", url: "/" },
  //   { label: "維保通知", url: "/maintenance/notice" }
  // ],
  // "/maintenance/mission": [
  //   { label: "入門", url: "/" },
  //   { label: "維保任務", url: "/maintenance/mission" }
  // ],
  // "/maintenance/record": [
  //   { label: "入門", url: "/" },
  //   { label: "維保紀錄", url: "/maintenance/record" }
  // ],
  // "/maintenance/detail/[id]": [
  //   { label: "入門", url: "/" },
  //   { label: "維保任務", url: "/maintenance/mission" },
  //   { label: "詳情", url: "" }
  // ],
  // ====== maintenance =====
  "/maintenance": [
    { label: "首頁", url: "/" },
    { label: "維保列表", url: "/maintenance/notice" }
  ],
  "/maintenance/notice": [
    { label: "首頁", url: "/" },
    { label: "維保通知", url: "/maintenance/notice" }
  ],
  "/maintenance/mission": [
    { label: "首頁", url: "/" },
    { label: "維保任務列表", url: "/maintenance/mission" }
  ],
  "/maintenance/record": [
    { label: "首頁", url: "/" },
    { label: "維保任務列表", url: "/maintenance/mission" }
  ],
  "/maintenance/detail/create": [
    { label: "首頁", url: "/" },
    { label: "維保任務列表", url: "/maintenance/mission" },
    { label: "新增任務", url: "" }
  ],
  "/maintenance/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "維保任務列表", url: "/maintenance/mission" },
    { label: "檢視任務", url: "" }
  ],
  // ====== maintenance =====
  "/admin_orders": [
    { label: "入門", url: "/" },
    { label: "訂單", url: "/admin_orders" }
  ],
  "/admin_orders/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "訂單", url: "/admin_orders" },
    { label: "詳情", url: "" }
  ],
  "/company": [
    { label: "入門", url: "/" },
    { label: "公司設定", url: "/company" }
  ],
  "/company/edit": [
    { label: "入門", url: "/" },
    { label: "公司設定", url: "/company" },
    { label: "編輯", url: "" }
  ],
  // "/role": [
  //   { label: "入門", url: "/" },
  //   { label: "群組設定", url: "/role" }
  // ],
  "/role/edit/[id]": [
    { label: "入門", url: "/" },
    { label: "群組設定", url: "/role" },
    { label: "群組編輯", url: "/" }
  ],
  "/employee": [
    { label: "入門", url: "/" },
    { label: "員工設定", url: "/employee" }
  ],
  "/employee/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "員工設定", url: "/employee" },
    { label: "詳情", url: "/" }
  ],
  "/employee/edit/[id]": [
    { label: "入門", url: "/" },
    { label: "員工設定", url: "/employee" },
    { label: "詳情", url: "/" }
  ]
  // "/driver/detail/[id]": [
  //   { label: "入門", url: "/" },
  //   { label: "駕駛設定", url: "/driver" },
  //   { label: "詳情", url: "/" }
  // ],
  // "/driver": [
  //   { label: "入門", url: "/" },
  //   { label: "駕駛設定", url: "/driver" }
  // ]
};

const vendorsBreadcrumbs: I_routers = {
  "01": [
    { label: "入門", url: "/" },
    { label: "外部車隊", url: "/vendor?codeType=01" }
  ],
  "03": [
    { label: "入門", url: "/" },
    { label: "維修廠", url: "/vendor?codeType=03" }
  ],
  "05": [
    { label: "入門", url: "/" },
    { label: "燃料", url: "/vendor?codeType=05" }
  ],
  "07": [
    { label: "入門", url: "/" },
    { label: "Etag", url: "/vendor?codeType=07" }
  ],
  "02": [
    { label: "入門", url: "/" },
    { label: "設備庫存", url: "/vendor?codeType=02" }
  ],
  "04": [
    { label: "入門", url: "/" },
    { label: "保險", url: "/vendor?codeType=04" }
  ],
  "06": [
    { label: "入門", url: "/" },
    { label: "其他", url: "/vendor?codeType=04" }
  ]
};

const busListBreadcrumbs: I_routers = {
  "1": [
    { label: "汽車", url: "/" },
    { label: "車輛清單", url: "/bus?type=1" }
  ],
  "2": [
    { label: "汽車", url: "/" },
    { label: "車輛分配", url: "/bus?type=2" }
  ],
  "3": [
    { label: "汽車", url: "/" },
    { label: "儀表歷史", url: "/bus?type=3" }
  ],
  "4": [
    { label: "汽車", url: "/" },
    { label: "費用歷史", url: "/bus?type=4" }
  ],
  "5": [
    { label: "汽車", url: "/" },
    { label: "替代分析", url: "/bus?type=5" }
  ]
};

const getPageBreadCrumbs = (router: NextRouter) => {
  // console.log("router.pathname", router.pathname);
  // console.log("router.asPath", router.asPath);
  // console.log("router.query", router.query);
  const newBreadcrumbs =
    breadcrumbs[router.pathname] ||
    breadcrumbs[router.asPath] ||
    vendorsBreadcrumbs[router?.query?.codeType as string] ||
    busListBreadcrumbs[router?.query?.type as string] ||
    [];
  return newBreadcrumbs;
};

export default getPageBreadCrumbs;
