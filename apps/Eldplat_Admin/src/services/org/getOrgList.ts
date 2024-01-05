export const getOrgList = async (uk: string) => {
  const apiName = "getOrgList";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = {
    x: "",
    org_no: "o-0002",
    page_info: {
      Page_Index: 1,
      Page_Size: 100,
      Orderby: "org_no",
      Arrangement: "ASC",
      Total: 0,
      Last_Page: 0
    }
  };

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- TYPING ------- //
interface I_response {
  StatusCode: string;
  Message: string;
  ContentList: I_OrgList[];
  ConditionList: [];
  PageInfo: {
    Page_Index: number;
    Page_Size: number;
    Orderby: string; //"org_no";
    Arrangement: string; //"ASC";
    Total: number;
    Last_Page: number;
  };
}

export interface I_OrgList {
  org_no: string;
  org_name: string;
  org_tp: string;
  org_lvl: number;
  org_enb: boolean;
  sublayer: I_OrgList[];
}

// ------- DEFAULT ------- //
export const defaultPageInfo = {
  Page_Index: 1,
  Page_Size: 100,
  Orderby: "org_no",
  Arrangement: "ASC",
  Total: 20,
  Last_Page: 1
};

// ------- MOCK DATA ------- //
export const DUMMY_ORG_LIST = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      org_no: "o-0002",
      org_name: "雄獅通運",
      org_tp: "G",
      org_lvl: 1,
      org_enb: true,
      sublayer: [
        {
          org_no: "o-00020101",
          org_name: "交通事業處",
          org_tp: "D",
          org_lvl: 3,
          org_enb: true,
          sublayer: [
            {
              org_no: "o-000201010101",
              org_name: "大中巴業務組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: false,
              sublayer: []
            },
            {
              org_no: "o-000201010102",
              org_name: "大車駕駛組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            },
            {
              org_no: "o-000201010103",
              org_name: "中車駕駛組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            },
            {
              org_no: "o-000201010104",
              org_name: "機動駕駛組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            },
            {
              org_no: "o-000201010105",
              org_name: "廠務組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            },
            {
              org_no: "o-000201010106",
              org_name: "車管組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            },
            {
              org_no: "o-000201010107",
              org_name: "調度組",
              org_tp: "D",
              org_lvl: 5,
              org_enb: true,
              sublayer: []
            }
          ]
        },
        {
          org_no: "o-00020102",
          org_name: "交通經營企劃處",
          org_tp: "D",
          org_lvl: 3,
          org_enb: true,
          sublayer: [
            {
              org_no: "o-0002010201",
              org_name: "交通經營企劃部",
              org_tp: "D",
              org_lvl: 4,
              org_enb: true,
              sublayer: [
                {
                  org_no: "o-000201020101",
                  org_name: "大中巴業務組",
                  org_tp: "D",
                  org_lvl: 5,
                  org_enb: true,
                  sublayer: []
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  ConditionList: [],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 100,
    Orderby: "org_no",
    Arrangement: "ASC",
    Total: 20,
    Last_Page: 1
  }
};
