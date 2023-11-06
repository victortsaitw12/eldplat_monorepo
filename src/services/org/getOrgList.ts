import API_Path from "./apiPath";
import { preRequest } from "@utils/preRequest";

export const getOrgList = async () => {
  return ContentList;
  const userID = "admin";
  const TK = preRequest();
  const requestBody = {
    x: "",
    org_no: "o-0002",
    page_info: {
      page_Index: 1,
      page_Size: 100,
      orderby: "org_no",
      arrangement: "ASC",
      total: 0,
      last_Page: 0
    }
  };
  const res = await fetch(`${API_Path["getOrgList"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      UK: userID
      // TK: TK
    },
    body: JSON.stringify(requestBody)
  });
  return await res.json();
};

export const getTest = async () => {
  const TK = preRequest();

  const res = await fetch("https://ueldplat.api.liontravel.com/sys/api/chk", {
    method: "GET",
    headers: {
      Authorization: `basic ${TK}`
    }
  });
  return await res.json();
};

export const getTests = async () => {
  const TK = preRequest();
  const reqBody = {
    x: "",
    filter_needed: true,
    //,"filter_custom": [
    //    {
    //        "customField": "module_name",
    //        "customSQLColumn": "1"
    //    }
    //]
    page_info: {
      page_Index: 1,
      page_Size: 10
    }
  };
  const res = await fetch(
    "https://ueldplat.api.liontravel.com/sys/api/V2/Account/GetAccountInfo",
    {
      method: "POST",
      headers: {
        Authorization: `basic ${TK}`
      },
      body: JSON.stringify(reqBody)
    }
  );
  return await res.json();
};

// ------- MOCK DATA ------- //
const ContentList = [
  {
    org_no: "o-0002", //id
    org_name: "雄獅集團 with correct backend format", //label
    org_tp: "G",
    org_lvl: 1,
    org_enb: true,
    sublayer: [
      {
        org_no: "o-000201",
        org_name: "雄獅通運",
        org_tp: "C",
        org_lvl: 2,
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
                org_no: "o-0002010101",
                org_name: "交通事業部",
                org_tp: "D",
                org_lvl: 4,
                org_enb: true,
                sublayer: [
                  {
                    org_no: "o-000201010101",
                    org_name: "大中巴業務組",
                    org_tp: "D",
                    org_lvl: 5,
                    org_enb: true,
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
                sublayer: []
              }
            ]
          }
        ]
      }
    ]
  }
];
