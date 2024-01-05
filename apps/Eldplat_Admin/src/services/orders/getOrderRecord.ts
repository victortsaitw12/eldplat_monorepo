const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      id: 1,
      description: "行程第1天上車地點改為台北車站",
      user_name: "林大明",
      updated_dt: "2024-01-22 10:30",
    },
    {
      id: 2,
      description: "乘客成人改為30位",
      user_name: "簡翰婷",
      updated_dt: "2022-11-13 14:00",
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

export const getOrderRecordData = () => {
  return DUMMY_DATA.ContentList;
}

export const getOrderRecordTitle = () => {
  const DUMMY_TITLES = [
    "修改說明",
    "修改人員",
    "修改時間",
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