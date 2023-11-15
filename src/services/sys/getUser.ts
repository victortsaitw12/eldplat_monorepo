import API_Path from "./apiPath";

export const getUser = async () => {
  console.log("called");
  return DUMMY_DATA;

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
export const DUMMY_DATA = {
  userID: "o-001",
  username: "王鈞樺 V2222",
  role: "最高管理員 V2",
  email: "atrain@example.com",
  menuData: {
    userdefine: [],
    defaultMenu: [
      {
        menu_no: "home",
        menu_name: "首頁",
        path: "/"
      },
      {
        menu_no: "user",
        menu_name: "使用者管理",
        sub_menu: [
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "組織設定",
            path: "/org"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "角色權限",
            path: "/role"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "使用者列表",
            path: "/user"
          },
          {
            module_no: "sys",
            fg_no: "org",
            func_no: "orgAdd",
            func_name: "新增使用者",
            path: "/user/create"
          }
        ]
      },
      {
        module_no: "sys",
        fg_no: "org",
        func_no: "orgAdd",
        menu_name: "車輛管理",
        sub_menu: []
      },
      {
        module_no: "sys",
        fg_no: "org",
        func_no: "orgAdd",
        menu_name: "維保管理",
        sub_menu: []
      },
      {
        module_no: "sys",
        fg_no: "org",
        func_no: "orgAdd",
        menu_name: "駕駛管理",
        sub_menu: []
      }
    ]
  }
};
