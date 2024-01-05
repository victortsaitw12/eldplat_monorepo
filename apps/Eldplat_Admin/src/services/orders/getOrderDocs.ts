const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      id: 1,
      file_name: "檔案1",
      description: "說明說明說明",
      updated_user: "簡翰婷",
      updated_dt: "2024-01-22 10:30",
    },
    {
      id: 3,
      file_name: "檔案1",
      description: "說明說明說明",
      updated_user: "簡翰婷",
      updated_dt: "2024-01-22 10:30",
    },
    {
      id: 3,
      file_name: "檔案1",
      description: "說明說明說明",
      updated_user: "簡翰婷",
      updated_dt: "2024-01-22 10:30",
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

export const getOrderDocsData = () => {
  return DUMMY_DATA.ContentList;
}

export const getOrderDocsTitle = () => {
  const DUMMY_TITLES = [
    "檔案",
    "說明",
    "異動人員",
    "異動時間",
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