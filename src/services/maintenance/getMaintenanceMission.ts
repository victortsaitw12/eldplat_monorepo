const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      id: 1,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      classification: "維修",
      factory: "台北保養廠",
      maintenance_no: "--",
      finish_dt: "--",
      driver_name: "--",
    },
    {
      id: 2,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      classification: "維修",
      factory: "台北保養廠",
      maintenance_no: "MTC202401220001",
      finish_dt: "2024-01-22(一)",
      driver_name: "林大明",
    },
    {
      id: 3,
      plate: "KKA-7885",
      car_name: "奶油獅號",
      classification: "定期保養",
      factory: "台北保養廠",
      maintenance_no: "MTC202401220002",
      finish_dt: "2024-01-22(一) 18:00~22:00",
      driver_name: "鍾俊儀",
    },
    {
      id: 4,
      plate: "KKA-7885",
      car_name: "--",
      classification: "定期保養",
      factory: "台北保養廠",
      maintenance_no: "MTC202401220002",
      finish_dt: "2024-01-22(一) 18:00~22:00",
      driver_name: "林大明",
    }
  ],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 3,
    Last_Page: 1
  }
};

export const getMaintenanceMissionData = () => {
  return DUMMY_DATA.ContentList;
}

export const getMaintenanceMissionTitle = () => {
  const DUMMY_TITLES = [
    "車牌",
    "車輛名稱",
    "分類",
    "維修廠",
    "維保單號",
    "維保日期",
    "派工駕駛",
    "",
  ];
  return DUMMY_TITLES;
};
