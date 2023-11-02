import API_Path from "./apiPath";

export const getOrgList = async () => {
  return DUMMY_DATALIST;

  //   const res = await fetch(`${API_Path["getOrg"]}?driver_no=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     }
  //   });
  //   return await res.json();
};

// ------- MOCK DATA ------- //
const DUMMY_DATALIST = [
  {
    userdefine: [],
    defaultMenu: [
      {
        menu_name: "首頁",
        path: "/"
      },
      {
        menu_name: "使用者管理",
        sub_menu: [
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "組織設定",
            path: "path/pathList"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "角色權限",
            path: "path/pathList"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "使用者列表",
            path: "path/pathList"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "新增使用者",
            path: "path/pathList"
          }
        ]
      },
      {
        menu_name: "車輛管理",
        sub_menu: []
      },
      {
        menu_name: "維保管理",
        sub_menu: []
      },
      {
        menu_name: "駕駛管理",
        sub_menu: []
      }
    ]
  }
];
