const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      driver_name: "鍾俊儀",
      maintenance_date: "2024-01-22",
      kilometer: "11,026公里",
      maintenance_km: "12,845公里",
      classification: "定期保養",
      factory: "台北保養廠"
    },
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "--",
      driver_name: "鍾俊儀",
      maintenance_date: "2024-01-22",
      kilometer: "11,026公里",
      maintenance_km: "--",
      classification: "定期保養",
      factory: "台北保養廠"
    },
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      driver_name: "鍾俊儀",
      maintenance_date: "--",
      kilometer: "11,026公里",
      maintenance_km: "12,845公里",
      classification: "定期保養",
      factory: "台北保養廠"
    },
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      driver_name: "鍾俊儀",
      maintenance_date: "--",
      kilometer: "11,026公里",
      maintenance_km: "12,845公里",
      classification: "定期保養",
      factory: "台北保養廠"
    },
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      driver_name: "鍾俊儀",
      maintenance_date: "--",
      kilometer: "11,026公里",
      maintenance_km: "12,845公里",
      classification: "定期保養",
      factory: "台北保養廠"
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

export const getMaintenanceNoticeData = () => {
  return DUMMY_DATA.ContentList;
}

export const getMaintenanceNoticeTitle = () => {
  const DUMMY_TITLES = [
    "車牌",
    "車輛名稱",
    "主要駕駛",
    "保養截止日期",
    "當前里程數",
    "保養里程數",
    "分類",
    "維修廠",
  ];
  return DUMMY_TITLES;
};

export const getConditionList = () => {
  return [
    {
      field_Name: "search",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "搜尋"
    },
    {
      field_Name: "Short_Schd_Date",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "日期區間"
    },
    {
      field_Name: "Short_Schd_Category",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "分類"
    },
    {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "維修廠"
    }
  ];
}