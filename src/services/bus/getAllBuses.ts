export const getAllBuses = async (filter: { [key: string]: any } = {}) => {
  console.log("getAllBuses", filter);
  const busFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      busFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  console.log("bus_Filter", busFilter);
  const res = await fetch(
    "https://localhost:7188/Gateway_BusStream/QueryResolver/GetBusList/api/GetBus/1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bus_Filter: busFilter,
        filter_Needed: true
      })
    }
  );
  return res.json();
};

export const getBusTitle = () => {
  const DUMMY_TITLES = [
    "車輛系統編號",
    "車種",
    "廠牌",
    "車型",
    "車牌",
    "車齡",
    "車輛群組",
    "駕駛",
    "狀態",
    "標籤"
  ];
  return DUMMY_TITLES;
};
