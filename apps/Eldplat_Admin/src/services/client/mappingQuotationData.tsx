import dayjs from "dayjs";
import React from "react";
import { ArrowRightIcon } from "evergreen-ui";
import SpecialInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/SpecialInfo/SpecialInfoEdit";

const defaultContactInfo = [
  {
    name: "full_name",
    title: "姓名",
    value: "--"
  },
  {
    name: "nationality",
    title: "國籍",
    value: "--"
  },
  {
    name: "contact_tel",
    title: "電話",
    value: "--"
  },
  {
    name: "contact_email",
    title: "信箱",
    value: "--"
  },
];

export function mappingContactInfo(data: any) {
  const contactInfo: { title: string; value: string | null }[] = [];
  let updatedContactInfo = [...defaultContactInfo];

  if(!data.nationality) {
    updatedContactInfo = updatedContactInfo.filter(item => item.name !== "nationality");
  }

  updatedContactInfo.forEach((item) => {
    if (item.name === "contact_phone") {
      contactInfo.push({
        title: item.title,
        value: data["contact_phone"]
          ? data["contact_phone_code"] + "-" + data["contact_phone"]
          : item["value"]
      });
    } else if (item.name === "contact_tel") {
      contactInfo.push({
        title: item.title,
        value: data["contact_tel"]
          ? data["contact_tel_code"] + "-" + data["contact_tel"]
          : item["value"]
      });
    } else if (item.name === "social_media") {
      let socialMediaType = "";
      if (!data["social_media"]) {
        return;
      }
      if (data["social_media_type"] === "01") {
        socialMediaType = "Line";
      } else if (data["social_media_type"] === "02") {
        socialMediaType = "WeChat";
      }
      contactInfo.push({
        title: item.title,
        value: socialMediaType + ":" + data["social_media"]
      });
    } else {
      contactInfo.push({
        title: item.title,
        value: data[item["name"]]
      });
    }
  });
  return contactInfo;
}

const defaultSpecialInfo = [
  {
    name: "pickup_sign_check",
    title: "舉牌",
    value: "0"
  },
  {
    name: "driver_guide_check",
    title: "司導",
    value: "200"
  },
  {
    name: "bus_age_check",
    title: "指定車齡",
    value: "0"
  },
  {
    name: "special_luggage_check",
    title: "特殊行李",
    value: "0"
  },
  {
    name: "bring_pets_check",
    title: "攜帶寵物",
    value: "1000"
  },
  {
    name: "mineral_water_check",
    title: "杯水",
    value: "0"
  },
  {
    name: "bottled_water_check",
    title: "瓶裝水",
    value: "200"
  },
  {
    name: "child_seat_check",
    title: "兒童座椅",
    value: "200"
  },
  {
    name: "infant_seat_check",
    title: "嬰兒座椅",
    value: "200"
  }
];

export function mappingSpecailNeededsInfo(data: any) {
  const specailInfo: { type?: boolean; title: string; value: string | null; detail?: string | undefined }[] = [];
  defaultSpecialInfo.forEach((item) => {
    if (data[item.name] === "1") {
      switch (item.name) {
        case "pickup_sign_check":
          specailInfo.push({
            title: item.title,
            value: data["pickup_sign_charge"]
              ? "NT$" + data["pickup_sign_charge"]
              : "免費",
            detail: data["pickup_sign_remark"]
          });
          break;
        case "driver_guide_check":
          specailInfo.push({
            title: item.title,
            value: item.value
            ? "NT$" + item.value
            : "免費",
          })
          break
        case "bus_age_check":
          specailInfo.push({
            title: item.title,
            // title: item.title + ":" + data["bus_age"],
            value: data["bus_age_charge"]
              ? "NT$" + data["bus_age_charge"]
              : "免費"
          });
          break;
        case "bottled_water_check":
          specailInfo.push({
            title: item.title + " ",
            value: data["bottled_water_charge"]
              ? "NT$" + data["bottled_water_charge"]
              : "免費",
              detail: data["bottled_water_box"] + "箱"
          });
          break;
        case "bring_pets_check":
          specailInfo.push({
            title: item.title,
            value: data["bring_pets_charge"]
              ? "NT$" + data["bring_pets_charge"]
              : "免費",
            detail: data["bring_pets_radio"] === "1"
            ? "進籠"
            : "不進籠",
          });
          break;
        case "child_seat_check":
          const childSeat:any = {
            isMulti: true,
            title: item.title,
            seller: {},
            yourself: {},
          }

          if (data["child_seat_seller"]) {
            childSeat["seller"] = {
              title: "由店家提供" ,
              value: data["child_seat_charge"]
                ? "NT$" + data["child_seat_charge"]
                : "免費",
              detail: + data["child_seat_seller"] + "台"
            };
          }
          if (data["child_seat_yourself"]) {
            childSeat["yourself"] = {
              title: "自備" ,
              value: "免費",
              detail:data["child_seat_yourself"] + "台"
            };
          }

          specailInfo.push(childSeat);
          break;
        case "infant_seat_check":
          const infantSeat:any = {
            isMulti: true,
            title: item.title,
            seller: {},
            yourself: {},
          }

          if (data["infant_seat_seller"]) {
            infantSeat["seller"] = {
              title: "由店家提供",
              value:
                data["infant_seat_charge"] === 0
                  ? "NT$" + data["infant_seat_charge"]
                  : "免費",
              detail: data["infant_seat_seller"] + "台"
            };
          }
          if (data["infant_seat_yourself"]) {
            infantSeat["yourself"] = {
              title: "自備",
              value: "免費",
              detail: data["infant_seat_yourself"] + "台"
            };
          }

          specailInfo.push(infantSeat);
          break;
        default:
          specailInfo.push({
            title: item.title,
            value:
              data[item.name.replace("check", "charge")] === 0
                ? "NT$" + data[item.name.replace("check", "charge")]
                : "免費"
          });
      }
    }
  });
  return specailInfo;
}

const defaultShuttleInfo = [
  {
    name: "departure_time",
    title: "出發時間",
    value: "--"
  },
  {
    name: "pickup_location",
    title: "上車地點",
    value: "--"
  },
  {
    name: "stopover_address_list",
    title: "中途停靠點",
    value: ""
  },
  {
    name: "dropoff_location",
    title: "下車地點",
    value: "--"
  },
  {
    name: "arrive_time",
    title: "抵達時間",
    value: "--"
  },
]

function formatStopover(stopovers: any) {
  return stopovers.map((stopover:any, index:number) => (
    <React.Fragment key={index}>
      {index > 0 && <ArrowRightIcon />}
      {stopover.stopover_address}
    </React.Fragment>
  ));
}

export function mappingShuttleInfo(list: any[]) {
  return list.map(item => {
    const newItem = defaultShuttleInfo.map(info => {
      const key = info.name;
      const title = info.title;
      let value = "";

      if(key === "stopover_address_list" && item[key].length !== 0) {
        value = formatStopover(item[key]);
      } else if (key === "stopover_address_list" && item[key].length == 0){
        value = "--"
      } else {
        value = item[key] || "";
      }

      if ((key === "arrive_time" || key === "departure_time") && value === "") {
        return null;
      }

      return { name: key, title, value };
    }).filter(Boolean);

    return {
      day_date: item.day_date,
      data: newItem
    };
  });
}

export function mappingTakeBusInfo(orderData: any) {
  const passenger = [];
  const luggage = [];
  
  for(const [key, value] of Object.entries(orderData)) {
    switch (key) {
     case "adult":
      passenger.push({title: "成人",value: value})
      break
     case "child":
      passenger.push({title: "兒童",value: value})
      break
     case "infant":
      passenger.push({title: "嬰兒",value: value})
      break
     case "check_in_luggage":
      luggage.push({title: "托運行李 (21吋以上)",value: value})
      break
     case "carry_on_luggage":
      luggage.push({title: "手提行李 (20吋以下)",value: value})
      break
     case "bus_data":
      console.log(value)
      break;
     default:
      break;
   }
  }

  return [
    {
      title: "乘客",
      value: passenger,
    },
    {
      title: "行李",
      value: luggage,
    },
  ]
}

export function mappingProgressInfo(list: any[]) {
  return list.map((item) => ({
    label: item.name,
    status: item.status,
    date: item.date ? dayjs(item.date).format("MM/DD HH:mm") : ""
  }));
}

