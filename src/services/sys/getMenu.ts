export const getMenu = async (userId: string) => {
  return DUMMY_DATA;

  const apiName = "getMenu";
  const reqMethod = "POST";
  const reqHeaders = { UK: userId };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_ENDPOINT}/api/getData?url=${apiName}`,
    {
      method: reqMethod,
      headers: reqHeaders
    }
  );
  const result = await res.json();
  return result.data;
};

// ------- MOCK DATA ------- //
export const DUMMY_DATA = {
  StatusCode: "500",
  Message: "內部伺服器錯誤",
  DataList: [
    {
      userdefine: [],
      defaultMenu: [
        {
          menu_name: "首頁 DUMMY",
          path: "/"
        },
        {
          menu_no: "user",
          menu_name: "使用者管理",
          sub_menu: [
            {
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
              path: "/account"
            },
            {
              module_no: "sys",
              fg_no: "org",
              func_no: "orgAdd",
              func_name: "新增使用者",
              path: "/account/detail/create?editPage=edit"
            }
          ]
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "車輛管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "維保管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "駕駛管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "任務管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "訂單管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "客戶管理",
          sub_menu: []
        },
        {
          menu_no: "org",
          func_no: "orgAdd",
          menu_name: "供應商管理",
          sub_menu: []
        },
        {
          menu_no: "orgAdd",
          menu_name: "設定",
          sub_menu: []
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};
