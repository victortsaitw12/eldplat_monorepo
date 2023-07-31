export const convertMap: { [key: string]: { [key: string]: any } } = {
  customer_typ: {
    "01": {
      ch: "公司",
      en: "Company"
    },
    "02": {
      ch: "個人",
      en: "Individual"
    }
  },
  customer_city: {
    LA: {
      ch: "洛杉磯",
      en: "Los Angeles"
    },
    TP: {
      ch: "台北",
      en: "Taipei"
    },
    TTP: {
      ch: "新北",
      en: "New Taipei"
    },
    TY: {
      ch: "桃園",
      en: "Taoyuan"
    }
  },
  customer_country: {
    TW: {
      ch: "台灣",
      en: "TTaiwan"
    },
    JP: {
      ch: "日本",
      en: "Japan"
    },
    US: {
      ch: "美國",
      en: "United States"
    }
  },
  type: {
    "01": {
      ch: "沙灘車",
      en: "ATV"
    },
    "02": {
      ch: "船",
      en: "Boat"
    },
    "03": {
      ch: "巴士",
      en: "Bus"
    },
    "04": {
      ch: "車",
      en: "Car"
    },
    "05": {
      ch: "堆高機",
      en: "Forklift"
    },
    "06": {
      ch: "發電機",
      en: "Generator"
    },
    "07": {
      ch: "裝載機",
      en: "Loader"
    },
    "08": {
      ch: "機車",
      en: "Motorcycle"
    },
    "09": {
      ch: "割草機",
      en: "Mower"
    },
    "10": {
      ch: "其他",
      en: "Other"
    },
    "11": {
      ch: "皮卡車",
      en: "Pickup Truck"
    },
    "12": {
      ch: "半卡車",
      en: "Semi Truck"
    },
    "13": {
      ch: "越野車",
      en: "SUV"
    },
    "14": {
      ch: "聯結車",
      en: "Trailer"
    },
    "15": {
      ch: "貨車",
      en: "Van"
    }
  },
  status: {
    "01": {
      ch: "活躍中",
      en: "Active"
    },
    "02": {
      ch: "已售出",
      en: "Inactive"
    },
    "03": {
      ch: "終止服務",
      en: "In Shop"
    },
    "04": {
      ch: "在維修廠",
      en: "Out of Service"
    },
    "05": {
      ch: "閒置中",
      en: "Sold"
    }
  },
  ownership: {
    "01": {
      ch: "自有的",
      en: "Owned"
    },
    "02": {
      ch: "長期租借",
      en: "Leased"
    },
    "03": {
      ch: "短期租借",
      en: "Rented"
    },
    "04": {
      ch: "企業客戶",
      en: "Customer"
    }
  },
  body_type: {
    "01": {
      ch: "傳統的",
      en: "Conventional"
    },
    "02": {
      ch: "中大型",
      en: "Full-Size"
    },
    "03": {
      ch: "掀背",
      en: "Hatchback"
    },
    "04": {
      ch: "皮卡",
      en: "Pickup"
    },
    "05": {
      ch: "越野車",
      en: "SUV"
    }
  },
  body_subtype: {
    "01": {
      ch: "貨物",
      en: "Cargo"
    },
    "02": {
      ch: "雙排坐駕駛室",
      en: "Crew Cab"
    },
    "03": {
      ch: "臥鋪行駕駛室",
      en: "Sleeper Cab"
    }
  },
  aspiration: {
    "01": {
      ch: "自然進氣",
      en: "Naturally Aspirated"
    },
    "02": {
      ch: "渦輪增壓",
      en: "Turbocharged"
    },
    "03": {
      ch: "雙渦輪增壓",
      en: "Twin Turbocharger"
    }
  },
  block_type: {
    "01": {
      ch: "I",
      en: "I"
    },
    "02": {
      ch: "V",
      en: "V"
    }
  },
  fuel_induction: {
    "01": {
      en: "Common Rail Direct Injection",
      ch: "高壓共軌"
    },
    "02": {
      en: "Sequential Multiport Fuel Injection",
      ch: "順序多點燃油噴射"
    },
    "03": {
      en: "Sequential Port Fuel Injection",
      ch: "順序燃油噴射"
    }
  },
  transmission_type: {
    "01": {
      ch: "自動",
      en: "Automatic"
    },
    "02": {
      en: "Continuously Variable",
      ch: "無段變速"
    }
  },
  drive_type: {
    "01": {
      ch: "4X4",
      en: "4X4"
    },
    "02": {
      ch: "6X4",
      en: "6X4"
    },
    "03": {
      ch: "FWD",
      en: "FWD"
    },
    "04": {
      ch: "RWD",
      en: "RWD"
    }
  },
  brake_system: {
    "01": {
      en: "Air",
      ch: "氣壓"
    },
    "02": {
      en: "Hydraulic",
      ch: "液壓"
    }
  },
  cam_type: {
    "01": {
      en: "凸輪軸",
      ch: "凸輪軸"
    },
    "02": {
      en: "蝸輪",
      ch: "蝸輪"
    }
  },
  fuel_type: {
    "01": {
      en: "BioDiesel",
      ch: "生質柴油"
    },
    "02": {
      en: "Compressed Natural Gas (CNG)",
      ch: "壓縮天然氣 (CNG)"
    },
    "03": {
      en: "DEF (Diesel Exhaust Fluid)",
      ch: "DEF (車用尿素)"
    },
    "04": {
      en: "Diesel",
      ch: "柴油"
    },
    "05": {
      en: "Diesel/Electric Hybrid",
      ch: "柴油/電動混合"
    },
    "06": {
      en: "Electric",
      ch: "電動"
    },
    "07": {
      en: "Flex Fuel",
      ch: "彈性燃料"
    },
    "08": {
      en: "Gas/Electric Hybrid",
      ch: "汽油/電動混合"
    },
    "09": {
      en: "Gasoline",
      ch: "汽油"
    },
    "10": {
      en: "Plug-in Hybrid",
      ch: "插電式油電複合"
    },
    "11": {
      en: "Propane",
      ch: "液化石油氣"
    }
  },
  expense_typ: {
    "01": {
      ch: "年檢費",
      en: "Annual Inspection Fee"
    },
    "02": {
      ch: "折舊",
      en: "Depreciation"
    },
    "03": {
      ch: "首付",
      en: "Down Payment"
    },
    "04": {
      ch: "設備",
      en: "Equipment"
    },
    "05": {
      ch: "罰款",
      en: "Fine"
    },
    "06": {
      ch: "保險",
      en: "Insurance"
    },
    "07": {
      ch: "租",
      en: "Lease"
    },
    "08": {
      ch: "法律/法庭費用",
      en: "Legal/Trial Fees"
    },
    "09": {
      ch: "貸款",
      en: "Loan"
    },
    "10": {
      ch: "貸款支付",
      en: "Loan Payment"
    },
    "11": {
      ch: "雜項",
      en: "Others"
    },
    "12": {
      ch: "移動違規",
      en: "Parking Violation"
    },
    "13": {
      ch: "安全技術",
      en: "Safety Technology"
    },
    "14": {
      ch: "遠程信息處理設備",
      en: "Telematics"
    },
    "15": {
      ch: "通行費",
      en: "Toll"
    },
    "16": {
      ch: "車輛處置費用",
      en: "Vehicle Disposal Fee"
    },
    "17": {
      ch: "車輛登記和稅收",
      en: "Vehicle Registration and Taxes"
    }
  },
  make: {
    "01": {
      ch: "Toyota",
      en: "Toyota"
    },
    "02": {
      ch: "Mercedes-Benz",
      en: "Mercedes-Benz"
    },
    "03": {
      ch: "Volkswagen",
      en: "Volkswagen"
    },
    "04": {
      ch: "BMW",
      en: "BMW"
    },
    "05": {
      ch: "Tesla",
      en: "Tesla"
    }
  },
  model: {
    "01": {
      ch: "model-1",
      en: "model-1"
    },
    "02": {
      ch: "model-2",
      en: "model-2"
    },
    "03": {
      ch: "model-3",
      en: "model-3"
    }
  },
  bus_group: {
    "01": {
      ch: "群組1",
      en: "群組1"
    },
    "02": {
      ch: "群組2",
      en: "群組2"
    },
    "03": {
      ch: "群組3",
      en: "群組3"
    },
    "04": {
      ch: "群組4",
      en: "群組4"
    }
  },
  vendorNo: {
    "01": {
      ch: "大大國際",
      en: "大大國際"
    },
    "02": {
      ch: "雄獅車隊",
      en: "雄獅車隊"
    },
    "03": {
      ch: "王牌出租",
      en: "王牌出租"
    },
    "04": {
      ch: "特級車行",
      en: "特級車行"
    }
  },
  vendorNoLoanLease: {
    "01": {
      ch: "大大國際",
      en: "大大國際"
    },
    "02": {
      ch: "雄獅車隊",
      en: "雄獅車隊"
    },
    "03": {
      ch: "王牌出租",
      en: "王牌出租"
    },
    "04": {
      ch: "特級車行",
      en: "特級車行"
    }
  },
  purpose: {
    "01": {
      ch: "學校/企業參訪",
      en: "School/Company Visit"
    },
    "02": {
      ch: "旅遊",
      en: "Travel"
    },
    "03": {
      ch: "戶外教學",
      en: "Outdoor Teaching"
    },
    "04": {
      ch: "企業教育訓練",
      en: "Corporate Education Training"
    },
    "05": {
      ch: "員工旅遊",
      en: "Employee Travel"
    },
    "06": {
      ch: "進香團",
      en: "Pilgrimage"
    },
    "07": {
      ch: "其他",
      en: "Others"
    }
  }
};

export const convertValueToText = (
  data: { [key: string]: any }[],
  lan: "ch" | "en" = "ch"
) => {
  for (const item of data) {
    for (const key in item) {
      if (key in convertMap && item[key].label in convertMap[key]) {
        item[key].label = convertMap[key][item[key].label][lan];
      }
    }
  }
  return data;
};

export const convertCountryNum = (countryCode: string) => {
  switch (countryCode) {
    case "TW":
      return "+886";
    case "JP":
      return "+81";
    case "US":
      return "+1";
  }
};

// type	01	沙灘車	ATV
// type	02	船	Boat
// type	03	巴士	Bus
// type	04	車	Car
// type	05	堆高機	Forklift
// type	06	發電機	Generator
// type	07	裝載機	Loader
// type	08	機車	Motorcycle
// type	09	割草機	Mower
// type	10	其他	Other
// type	11	皮卡車	Pickup Truck
// type	12	半卡車	Semi Truck
// type	13	越野車	SUV
// type	14	聯結車	Trailer
// type	15	貨車	Van
// status	01	活躍中	Active
// status	02	閒置中	Inactive
// status	03	在商店	In Shop
// status	04	終止服務	Out of Service
// status	05	已賣出	Sold
// ownership	01	自有的	Owned
// ownership	02	長期租借	Leased
// ownership	03	短期租借	Rented
// ownership	04	企業客戶	Customer
// body_type	01	傳統的	Conventional
// body_type	02	中大型	Full-Size
// body_type	03	掀背	Hatchback
// body_type	04	皮卡	Pickup
// body_type	05	越野車	SUV
// body_subtype	01	貨物	Cargo
// body_subtype	02	雙排坐駕駛室	Crew Cab
// body_subtype	03	臥鋪行駕駛室	Sleeper Cab
// aspiration	01		Naturally Aspirated
// aspiration	02		Turbocharger
// aspiration	03		Twin Turbocharger
// block_type	01		 I
// block_type	02		V
// fuel_induction	01		Common Rail Direct Injection
// fuel_induction	02		Sequential Multiport Fuel Injection
// fuel_induction	03		Sequential Port Fuel Injection
// transmission_type	01		Automatic
// transmission_type	02		Continuously Variable
// drive_type	01		4X4
// drive_type	02		6X4
// drive_type	03		FWD
// drive_type	04		RWD
// brake_system	01		Air
// brake_system	02		Hydraulic
// fuel_type	01		BioDiesel
// fuel_type	02		Compressed Natural Gas (CNG)
// fuel_type	03		DEF (Diesel Exhaust Fluid)
// fuel_type	04		Diesel
// fuel_type	05		Diesel/Electric Hybrid
// fuel_type	06		Electric
// fuel_type	07		Flex Fuel
// fuel_type	08		Gas/Electric Hybrid
// fuel_type	09		Gasoline
// fuel_type	10		Plug-in Hybrid
// fuel_type	11		Propane
// expense_typ	01	年檢費
// expense_typ	02	折舊
// expense_typ	03	首付
// expense_typ	04	設備
// expense_typ	05	罰款
// expense_typ	06	保險
// expense_typ	07	租
// expense_typ	08	法律/法庭費用
// expense_typ	09	貸款
// expense_typ	10	貸款支付
// expense_typ	11	雜項
// expense_typ	12	移動違規
// expense_typ	13	安全技術
// expense_typ	14	遠程信息處理設備
// expense_typ	15	通行費
// expense_typ	16	車輛處置費用
// expense_typ	17	車輛登記和稅收
