import API_Path from "./apiPath";

// 取ddl下拉式資料
export const getCreateDdl = async (
  bus_group?: string,
  dsph_group?: string
): Promise<any> => {
  const url =
    !bus_group && !dsph_group
      ? `${API_Path["GetCreateDDL"]}`
      : bus_group && dsph_group
      ? `${API_Path["GetCreateDDL"]}?bus_group=${bus_group}&dsph_group=${dsph_group}`
      : `${API_Path["GetCreateDDL"]}?${
          (bus_group && "bus_group") || (dsph_group && "dsph_group")
        }=${bus_group || dsph_group}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
