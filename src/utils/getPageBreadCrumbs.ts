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
    { label: "檢視角色" }
  ],
  "/account": [
    { label: "首頁", url: "/" },
    { label: "使用者列表", url: "/account" }
  ],
  "/account/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "使用者列表", url: "/account" },
    { label: "檢視使用者", url: "" }
  ],
  "/driver": [
    { label: "首頁", url: "/" },
    { label: "駕駛列表", url: "/driver" }
  ],
  // ----------------------------------------------------------------------- V2 above
  // ----------------------------------------------------------------------- V1 below
  "/bus": [
    { label: "首頁", url: "/" },
    { label: "車輛清單", url: "/bus" }
  ],
  "/bus/detail/[id]": [
    { label: "首頁", url: "/" },
    { label: "車輛清單", url: "/bus" },
    { label: "檢視", url: "" }
  ],

  "/shift": [
    { label: "入門", url: "/" },
    { label: "駕駛排班", url: "/shift" }
  ],
  "/shift/[id]": [
    { label: "入門", url: "/" },
    { label: "駕駛排班", url: "/shift" }
  ],
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
  "/maintenance/notice": [
    { label: "入門", url: "/" },
    { label: "維保通知", url: "/maintenance/notice" }
  ],
  "/maintenance/mission": [
    { label: "入門", url: "/" },
    { label: "維保任務", url: "/maintenance/mission" }
  ],
  "/maintenance/record": [
    { label: "入門", url: "/" },
    { label: "維保紀錄", url: "/maintenance/record" }
  ],
  "/maintenance/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "維保任務", url: "/maintenance/mission" },
    { label: "詳情", url: "" }
  ],
  "/admin_orders": [
    { label: "入門", url: "/" },
    { label: "訂單", url: "/admin_orders" }
  ],
  "/admin_orders/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "訂單", url: "/admin_orders" },
    { label: "詳情", url: "" }
  ],
  "/assignment": [
    { label: "入門", url: "/" },
    { label: "派單", url: "/assignment" }
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
  ],
  "/driver/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "駕駛設定", url: "/driver" },
    { label: "詳情", url: "/" }
  ],
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
