import API_Path from "./apiPath";

// 取駕駛國家下拉式資料
export const getDriverCountryDDL = async (): Promise<any> => {
  const requestBody = {
    area_No: "",
    level_Num: "2",
    default_Needed: true
  };

  const res = await fetch(`${API_Path["getAreaDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
};

// 取執照地區下拉式資料
export const getLicenseAreaDDL = async (): Promise<any> => {
  const requestBody = {
    area_No: "20390100",
    level_Num: "4"
  };
  const res = await fetch(`${API_Path["getAreaDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
};
interface I_response {
  options: any[];
  defaultData: any[];
}

export interface I_AreaDDL {
  area_No: string; //"2039010001000000";
  area_Name_Tw: string; //"苗栗市";
  area_Name_Cn: string; //"";
  area_Name_En: string; //"Miaoli City";
  area_Name_Local: string; //"";
  abbr_Tw: string; //"";
  abbr_Cn: string; //"";
  abbr_En: string; //"";
  level_Num: string; //"4";
  is_Delete: string; // "0";
  cto_Id: string; //"";
  cto_Code: string; //"";
  creid: string; //"admin";
  credate: string; //"2023-03-25T12:07:08.953";
  updid: string; //"admin";
  upddate: string; //"2023-03-25T12:07:08.953";
  tel_Code: string; //"0";
}
