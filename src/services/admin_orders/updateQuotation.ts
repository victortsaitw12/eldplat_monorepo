import API_Path from "./apiPath";
// 編輯詢價/報價單
const calcExtraChargeTotal = (data: any) => {
  let subTotal = 0;
  const option = [
    { check: "pickup_sign_check", charge: "pickup_sign_charge" }, //舉牌
    { check: "driver_guide_check", charge: "driver_guide_charge" }, //司導
    { check: "bus_age_check", charge: "bus_age_charge" }, //指定車齡
    { check: "special_luggage_check", charge: "special_luggage_charge" }, //攜帶特大行李
    { check: "bring_pets_check", charge: "bring_pets_charge" }, //攜帶寵物
    { check: "mineral_water_check", charge: "mineral_water_charge" }, //杯水
    { check: "bottled_water_check", charge: "bottled_water_charge" }, //瓶裝水
    { check: "child_seat_check", charge: "child_seat_charge" }, //兒童座椅
    { check: "infant_seat_check", charge: "infant_seat_charge" } //嬰兒座椅
  ];
  option.forEach((item) => {
    if (data[item.check] === "1") subTotal += data[item.charge];
  });
  console.log(subTotal);
  return subTotal;
};

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
    } else if (typeof data[key] !== "string" || data[key].trim() !== "") {
      filteredNullData[key] = data[key];
    }
  }

  filteredNullData.extra_charge = calcExtraChargeTotal(data);
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
