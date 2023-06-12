const defaultContactInfo = [
  {
    name: "family_name",
    title: "姓",
    value: "---"
  },
  {
    name: "name",
    title: "名",
    value: "---"
  },
  {
    name: "contact_phone",
    title: "手機",
    value: "---"
  },
  {
    name: "contact_tel",
    title: "電話",
    value: "---"
  },
  {
    name: "contact_email",
    title: "信箱",
    value: "---"
  },
  {
    name: "social_media",
    title: "通訊軟體",
    value: null
  }
];
export function mappingContactInfo(data: any) {
  const contactInfo: { title: string; value: string | null }[] = [];
  console.log("socail_media", data["socail_media"]);
  defaultContactInfo.forEach((item) => {
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
      console.log("social_media", data["social_media"]);
      if (data["social_media_type"] === "01") {
        socialMediaType = "Line";
      } else if (data["social_media_type"] === "02") {
        socialMediaType = "WeChat";
      }
      console.log(
        "socialMediaType",
        socialMediaType + ":" + data["social_media"]
      );
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
    value: "0"
  },
  {
    name: "bus_age_check",
    title: "指定車齡",
    value: "0"
  },
  {
    name: "special_luggage_check",
    title: "攜帶特大/特殊行李",
    value: "0"
  },
  {
    name: "bring_pets_check",
    title: "攜帶寵物",
    value: "0"
  },
  {
    name: "mineral_water_check",
    title: "杯水",
    value: "0"
  },
  {
    name: "bottled_water_check",
    title: "瓶裝水",
    value: "0"
  },
  {
    name: "child_seat_check",
    title: "兒童座椅",
    value: "0"
  },
  {
    name: "infant_seat_check",
    title: "嬰兒座椅",
    value: "0"
  }
];

export function mappingSpecailNeededsInfo(data: any) {
  const specailInfo: { title: string; value: string | null }[] = [];
  defaultSpecialInfo.forEach((item) => {
    if (data[item.name] === "1") {
      switch (item.name) {
        case "pickup_sign_check":
          specailInfo.push({
            title: item.title + ": " + data["pickup_sign_remark"],
            value: data["pickup_sign_charge"]
              ? "NT$" + data["pickup_sign_charge"]
              : "免費"
          });
          break;
        case "bus_age_check":
          specailInfo.push({
            title: item.title + ":" + data["bus_age"],
            value: data["bus_age_charge"]
              ? "NT$" + data["bus_age_charge"]
              : "免費"
          });
          break;
        case "bottled_water_check":
          specailInfo.push({
            title: item.title + " " + data["bottled_water_box"] + "箱",
            value: data["bottled_water_charge"]
              ? "NT$" + data["bottled_water_charge"]
              : "免費"
          });
          break;
        case "bring_pets_check":
          specailInfo.push({
            title:
              item.title + " " + data["bring_pets_radio"] === "01"
                ? "進籠"
                : "不進籠",
            value: data["bring_pets_charge"]
              ? "NT$" + data["bring_pets_charge"]
              : "免費"
          });
          break;
        case "child_seat_check":
          if (data["child_seat_seller"]) {
            specailInfo.push({
              title:
                item.title + " 由店家提供" + data["child_seat_seller"] + "台",
              value: data["child_seat_charge"]
                ? "NT$" + data["child_seat_charge"]
                : "免費"
            });
          }
          if (data["child_seat_yourself"]) {
            specailInfo.push({
              title: item.title + " 自備" + data["child_seat_yourself"] + "台",
              value: "免費"
            });
          }
          break;
        case "infant_seat_check":
          if (data["infant_seat_seller"]) {
            specailInfo.push({
              title:
                item.title + " 由店家提供" + data["infant_seat_seller"] + "台",
              value:
                data["infant_seat_charge"] === 0
                  ? "NT$" + data["infant_seat_charge"]
                  : "免費"
            });
          }
          if (data["infant_seat_yourself"]) {
            specailInfo.push({
              title: item.title + " 自備" + data["infant_seat_yourself"] + "台",
              value: "免費"
            });
          }
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
