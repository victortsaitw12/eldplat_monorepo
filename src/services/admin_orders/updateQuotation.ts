import API_Path from "./apiPath";
// 編輯詢價/報價單

export const updateQuotation = async (data: any) => {
  console.log("😊😊😊😊😊😊😊😊data", data);
  const filteredNullData: { [key: string]: any } = {};
  for (const key in data) {
    if (key === "bus_data") {
      const flatternBusData: any[] = [];
      data[key].forEach((item: any) => {
        const busList = item.bus_list;
        for (const listData of busList) {
          if (listData.order_quantity !== 0) {
            flatternBusData.push({
              quote_no: data.quote_no,
              bus_type: item.type_name,
              bus_seat: listData.bus_seat,
              order_quantity: listData.order_quantity
            });
          }
        }
      });
      filteredNullData[key] = flatternBusData;
    } else if (key === "order_contact_list") {
      filteredNullData[key] = data[key].map((child: any) => {
        return {
          ...child,
          quote_no: data.quote_no
        };
      });
    } else if (key === "order_status_list") {
      //update訂單的時候不用帶order_status_list欄位
      continue;
    } else if (typeof data[key] !== "string" || data[key].trim() !== "") {
      filteredNullData[key] = data[key];
    }
  }

  const res = await fetch(API_Path["UpdateQuotation"], {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
