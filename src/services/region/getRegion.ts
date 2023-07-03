import API_Path from "./apiPath";
export const getAllRegions = async (area_no: string, level_num: string) => {
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
};
