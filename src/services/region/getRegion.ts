import API_Path from "./apiPath";
export interface I_RegionsPayload {
  regionName: string;
  areaNo: string;
  countryCode?: string;
}

export interface I_RegionsData {
  area_No: string;
  area_Name_Tw: string;
  area_Name_Cn: string;
  area_Name_En: string;
  area_Name_Local: string;
  abbr_Tw: string;
  abbr_Cn: string;
  abbr_En: string;
  level_Num: string;
  is_Delete: string;
  cto_Id: string;
  cto_Code: string;
  creid: string;
  credate: string;
  updid: string;
  upddate: string;
  tel_Code: string;
}

export async function getAllRegions(
  area_no: string,
  level_num: string
): Promise<{ options: I_RegionsData[] }> {
  const res = await fetch(`${API_Path["GetAreaDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      area_No: area_no,
      level_Num: level_num,
      default_Needed: true
    })
  });
  return res.json();
}

export async function getRegion(area_no: string) {
  const res = await fetch(`${API_Path["GetAreaByAreaNo"]}?area_no=${area_no}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  // console.log("res", res);
  // const data = await res.json();
  // console.log("data", data);
  return res.json();
}
