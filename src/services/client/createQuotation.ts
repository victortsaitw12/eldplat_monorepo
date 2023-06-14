import { QuotationCreatePayload } from "@contents/Client/Enquiry/type";
export const createQuotation = async (quotationData: any) => {
  const filteredNullData: { [key: string]: any } = {};
  for (const key in quotationData) {
    if (key === "bus_data") {
      const flatternBusData: any[] = [];
      quotationData[key].forEach(
        (item: QuotationCreatePayload["bus_data"][0]) => {
          const busList = item.bus_list;
          for (const listData of busList) {
            if (listData.order_quantity !== 0) {
              flatternBusData.push({
                bus_type: item.type_name,
                bus_seat: listData.bus_seat,
                order_quantity: listData.order_quantity
              });
            }
          }
        }
      );
      filteredNullData[key] = flatternBusData;
    } else if (
      typeof quotationData[key] !== "string" ||
      quotationData[key].trim() !== ""
    ) {
      filteredNullData[key] = quotationData[key];
    }
  }
  console.log("originalData", quotationData);
  console.log("filteredNullData", filteredNullData);
  const res = await fetch("https://localhost:7088/ORD/CreateFEQuotation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  console.log("res", res);
  const result = await res.json();
  console.log("result", result);
  return result;
};
