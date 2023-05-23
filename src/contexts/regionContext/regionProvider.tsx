import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { getAllRegions } from "@services/region/getRegion";
import React, { useState, createContext, useEffect, useContext } from "react";

export interface I_AllRegions_Type {
  regionName: string;
  areaNo: string;
}

// the provider of types
export interface I_Region_Context {
  allCountries: I_AllRegions_Type[];
  setAllCountries: (allCountries: I_AllRegions_Type[]) => void;
  // allStates: I_AllRegions_Type[];
  // setAllStates: (allCountries: I_AllRegions_Type[] | any) => void;
  // allCities: I_AllRegions_Type[];
  // setAllCities: (allCountries: I_AllRegions_Type[] | any) => void;
  handleCountrySwitch: (country: string) => void | any;
  handleStateSwitch: (state: string) => void | any;
  handleCitySwitch: (city: string) => void | any;
}

// make a context for those components
export const RegionContext = createContext<I_Region_Context>({
  allCountries: [],
  setAllCountries: function (): void {
    throw new Error("Function not implemented.");
  },
  // allStates: [],
  // setAllStates: function (): void {
  //   throw new Error("Function not implemented.");
  // },
  // allCities: [],
  // setAllCities: function (): void {
  //   throw new Error("Function not implemented.");
  // },
  handleCountrySwitch: function (): void {
    throw new Error("Function not implemented.");
  },
  handleStateSwitch: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCitySwitch: function (): void {
    throw new Error("Function not implemented.");
  }
});

// function component start
export const RegionProvider = ({ children }: any) => {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  const [allCountries, setAllCountries] = useState<I_AllRegions_Type[]>([
    { regionName: "請選擇", areaNo: "0" }
  ]); // 顯示所有國家
  const [getState, setGetState] = useState<any>(null);
  const [getCity, setGetCity] = useState<any>(null);
  // const [allStates, setAllStates] = useState<I_AllRegions_Type[]>([
  //   { regionName: "請選擇", areaNo: "0" }
  // ]);
  // const [allCities, setAllCities] = useState<I_AllRegions_Type[]>([
  //   { regionName: "請選擇", areaNo: "0" }
  // ]);

  // TODO: 取得國家及內容
  useEffect(() => {
    const area_no = "";
    const level_num = "2";
    getAllRegions(area_no, level_num)
      .then((data) => {
        console.log("region data from api : ", data);
        data.options.map((v: { area_Name_Tw: string; area_No: string }) => {
          if (v.area_Name_Tw !== "" && v.area_No[0] !== "6")
            // 空的國家或測試錯誤訊息的都篩掉
            return setAllCountries((prev) => [
              ...prev,
              { regionName: v.area_Name_Tw, areaNo: v.area_No }
            ]);
        });
      })
      .catch((err) => console.error("get regions error: ", err));
  }, []);

  // 將國家代號轉為文字形式
  const handleCountrySwitch = (country: string) => {
    const showCountry = allCountries?.filter((v) => {
      return country === v.areaNo;
    });
    return showCountry[0]?.regionName;
  };

  useEffect(() => {
    const state_area_no = companyData.company_country2.substring(0, 4);
    const city_area_no = companyData.company_area.substring(0, 7);
    const state_level_num = "3";
    const city_level_num = "4";
    getAllRegions(state_area_no, state_level_num).then((data) => {
      setGetState(data.options);
    });
    getAllRegions(city_area_no, city_level_num).then((data) => {
      setGetCity(data.options);
    });
  }, [companyData.company_area, companyData.company_country2]);

  // 將州省代號轉為文字形式
  const handleStateSwitch = (state: string) => {
    const showState = getState?.filter((v: { area_No: string }) => {
      return state === v.area_No;
    });
    if (showState) return showState[0]?.area_Name_Tw;
  };

  // 將城市代號轉為文字形式
  const handleCitySwitch = (city: string) => {
    const showCity = getCity?.filter((v: { area_No: string }) => {
      return city === v.area_No;
    });
    if (showCity) return showCity[0]?.area_Name_Tw;
  };

  const allContextValues = {
    allCountries,
    setAllCountries,
    // allStates,
    // setAllStates,
    // allCities,
    // setAllCities,
    handleCountrySwitch,
    handleStateSwitch,
    handleCitySwitch
  };

  return (
    <RegionContext.Provider value={allContextValues}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
