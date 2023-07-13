import { NextRouter } from "next/router";

interface I_routers {
  [index: string]: {
    label: string;
    url?: string | { pathname: string; query: any };
  }[];
}

const routers: I_routers = {
  "/": [{ label: "入門", url: "/" }],
  "/bus": [
    { label: "入門", url: "/" },
    { label: "汽車", url: "/bus" }
  ],
  "/bus/detail/[id]": [
    { label: "入門", url: "/" },
    { label: "汽車", url: "/bus" }
  ],
  "/bus?type=1": [
    { label: "入門", url: "/" },
    { label: "車輛清單", url: "/bus?type=1" }
  ],
  "/bus?type=2": [
    { label: "入門", url: "/" },
    { label: "車輛分配", url: "/bus?type=2" }
  ],
  "/bus?type=3": [
    { label: "入門", url: "/" },
    { label: "儀表歷史", url: "/bus?type=3" }
  ],
  "/bus?type=4": [
    { label: "入門", url: "/" },
    { label: "費用歷史", url: "/bus?type=4" }
  ],
  "/bus?type=5": [
    { label: "入門", url: "/" },
    { label: "替代分析", url: "/bus?type=5" }
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
  "/vendor?codeType=01": [
    { label: "入門", url: "/" },
    { label: "外部車隊", url: "/vendor?codeType=01" }
  ],
  "/vendor?codeType=03": [
    { label: "入門", url: "/" },
    { label: "維修廠", url: "/vendor?codeType=03" }
  ],
  "/vendor?codeType=05": [
    { label: "入門", url: "/" },
    { label: "燃料", url: "/vendor?codeType=05" }
  ],
  "/vendor?codeType=07": [
    { label: "入門", url: "/" },
    { label: "Etag", url: "/vendor?codeType=07" }
  ],
  "/vendor?codeType=02": [
    { label: "入門", url: "/" },
    { label: "設備庫存", url: "/vendor?codeType=02" }
  ],
  "/vendor?codeType=04": [
    { label: "入門", url: "/" },
    { label: "保險", url: "/vendor?codeType=04" }
  ],
  "/vendor?codeType=06": [
    { label: "入門", url: "/" },
    { label: "其他", url: "/vendor?codeType=04" }
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
  "/role": [
    { label: "入門", url: "/" },
    { label: "群組設定", url: "/role" }
  ],
  "/employee": [
    { label: "入門", url: "/" },
    { label: "員工設定", url: "/employee" }
  ],
  "/driver": [
    { label: "入門", url: "/" },
    { label: "駕駛設定", url: "/driver" }
  ]
};

const getPageBreadCrumbs = (router: NextRouter) => {
  // console.log("📃📃📃📃📃", router);
  // console.log(router?.query?.license_plate);
  let newRouters = routers[router.pathname] || routers[router.asPath] || [];
  //麵包屑要帶車牌哦
  if (
    (router?.query?.license_plate as string) &&
    (router.asPath === "/bus/detail/[id]" ||
      router.pathname === "/bus/detail/[id]")
  ) {
    newRouters = [
      ...newRouters,
      {
        label: router?.query?.license_plate as string,
        url: { pathname: router.pathname, query: router?.query }
      }
    ];
  }
  return newRouters;
};

export default getPageBreadCrumbs;
