const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      group: {span: 2, key: "bording_date"},
      id: 1,
      car_type: "中巴36客座",
      plate: "KAA‑0001",
      driver_name: "吳中華",
      boarding_time: "10：00",
      boarding_location: "台北車站",
      user_name: "韓智翰",
      bording_date: "2023 12/21",
    },
    {
      id: 2,
      car_type: "中巴36客座",
      plate: "KAA‑0003",
      driver_name: "曾怡婷",
      boarding_time: "10：00",
      boarding_location: "台北車站",
      user_name: "韓智翰",
      bording_date: "2023 12/21",
      group: {span: 0, key: "bording_date"},
    },
    {
      group: {span: 2, key: "bording_date"},
      id: 3,
      car_type: "中巴36客座",
      plate: "KAA‑0001",
      driver_name: "吳中華",
      boarding_time: "10：00",
      boarding_location: "台中長榮酒店",
      user_name: "韓智翰",
      bording_date: "2023 12/22",
    },
    {
      id: 4,
      car_type: "中巴36客座",
      plate: "KAA‑0003",
      driver_name: "曾怡婷",
      boarding_time: "10：00",
      boarding_location: "台中長榮酒店站",
      user_name: "韓智翰",
      bording_date: "2023 12/22",
      group: {span: 0, key: "bording_date"},
    },
  ],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 3,
    Last_Page: 1
  }
};

export const getOrderMissionData = () => {
  return DUMMY_DATA.ContentList;
}

export const getOrderMissionTitle = () => {
  const DUMMY_TITLES = [
    "",
    "車型",
    "車輛",
    "駕駛",
    "上車時間",
    "上車地點",
    "調度人員",
  ];
  return DUMMY_TITLES;
};

export const getConditionList = () => {
  return [{
    field_Name: "search",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "搜尋"
  }];
}