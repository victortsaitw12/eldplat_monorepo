export const useSession = () => {
    return {
        data: {user: {
            account_no: "USR202302020002",
            account_name: "王鈞樺",
            role: "--role--",
            org_no: "o-00020101",
            menuData: {
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
                        fg_no: "account",
                        func_no: "org",
                        func_name: "組織設定",
                        path: "/org"
                      },
                      {
                        module_no: "sys",
                        fg_no: "account",
                        func_no: "role",
                        func_name: "角色設定",
                        path: ["/role", "/role/detail/[id]", "/role/detail/create"]
                      },
                      {
                        module_no: "sys",
                        fg_no: "account",
                        func_no: "accountList",
                        func_name: "使用者列表",
                        path: ["/account", "/account/detail/[id]"]
                      },
                      {
                        module_no: "sys",
                        fg_no: "account",
                        func_no: "accountList",
                        func_name: "新增使用者",
                        path: "/account/detail/create"
                      }
                    ]
                  },
                  {
                    menu_name: "車輛管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "bus",
                        func_no: "busList",
                        func_name: "車輛列表",
                        path: ["/bus", "/bus/detail/[id]"]
                      },
                      {
                        module_no: "bus",
                        fg_no: "bus",
                        func_no: "bus",
                        func_name: "新增車輛明細",
                        path: "/bus/detail/create"
                      },
                      {
                        module_no: "bus",
                        fg_no: "bus",
                        func_no: "bus",
                        func_name: "車輛管理設定",
                        path: "/bus_management"
                      }
                    ]
                  },
                  {
                    menu_name: "維保管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "maintenance",
                        func_no: "notice",
                        func_name: "維保通知",
                        path: "/maintenance/notice"
                      },
                      {
                        module_no: "bus",
                        fg_no: "maintenance",
                        func_no: "mission",
                        func_name: "維保任務列表",
                        path: ["/maintenance/mission", "/maintenance/detail/[id]"]
                      },
                      // {
                      //   module_no: "bus",
                      //   fg_no: "maintenance",
                      //   func_no: "mission",
                      //   func_name: "維保任務列表",
                      //   path: "/mission"
                      // },
                      {
                        module_no: "bus",
                        fg_no: "maintenance",
                        func_no: "maintenance",
                        func_name: "新增維保任務",
                        path: "/maintenance/detail/create"
                      }
                    ]
                  },
                  {
                    menu_name: "駕駛管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "driver",
                        func_no: "driver",
                        func_name: "駕駛列表",
                        path: ["/driver", "/driver/training/[id]", "/driver/detail/[id]"]
                      },
                      {
                        module_no: "bus",
                        fg_no: "driver",
                        func_no: "driver",
                        func_name: "新增駕駛",
                        path: "/driver/detail/create"
                      },
                      {
                        module_no: "bus",
                        fg_no: "driver",
                        func_no: "driver",
                        func_name: "駕駛管理設定",
                        path: "/driver_management"
                      }
                    ]
                  },
                  {
                    menu_name: "任務管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "task",
                        func_no: "assignment",
                        func_name: "任務指派",
                        path: "/assignment"
                      },
                      {
                        module_no: "bus",
                        fg_no: "task",
                        func_no: "schedule",
                        func_name: "駕駛出勤管理",
                        path: ["/schedule", "/schedule/approval", "/schedule/detail/[id]"]
                      }
                      // {
                      //   module_no: "bus",
                      //   fg_no: "task",
                      //   func_no: "setting",
                      //   func_name: "出勤管理設定",
                      //   path: "/schedule/setting"
                      // }
                    ]
                  },
                  {
                    menu_name: "訂單管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "order",
                        func_no: "orderList",
                        func_name: "訂單列表",
                        path: "/orders"
                      },
                      {
                        module_no: "bus",
                        fg_no: "order",
                        func_no: "orderList",
                        func_name: "新增訂單",
                        path: "/orders/detail/create"
                      }
                    ]
                  },
                  {
                    menu_name: "供應商管理",
                    sub_menu: [
                      {
                        module_no: "bus",
                        fg_no: "vendor",
                        func_no: "car",
                        func_name: "外部車隊"
                      },
                      {
                        module_no: "bus",
                        fg_no: "vendor",
                        func_no: "repairer",
                        func_name: "維修廠"
                      },
                      {
                        module_no: "bus",
                        fg_no: "vendor",
                        func_no: "repairer",
                        func_name: "其他供應商"
                      },
                      {
                        module_no: "bus",
                        fg_no: "vendor",
                        func_no: "repairer",
                        func_name: "新增供應商"
                      }
                    ]
                  }
                ]
              }
        }},
        status: "authenticated"
    }
}

export const signIn = async (category: string, data: any) => {
  return {message: "success", error: undefined};
}