import API_Path from "./apiPath";
// 檢視所有駕駛當月排休
export const getAllDriverScheduleListFiltered = async (
  dateStr: string,
  filter: { [key: string]: any } = {}
) => {
  const shiftFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      shiftFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(`${API_Path["getAllDriverScheduleListFiltered"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    // body: JSON.stringify(data),
    body: JSON.stringify({
      schedule_Filter: [
        {
          field_Name: "Short_Schd_Date",
          arrayConditions: "equal",
          value: dateStr,
          dataType: "string"
        }
      ],
      filter_Needed: true,
      pageInfo: {
        page_Index: 1,
        page_Size: 10,
        orderby: "driver_no",
        arrangement: "asc",
        total: 0,
        last_page: 0
      },
      default_Needed: true
    })
  });
  return await res.json();
};
