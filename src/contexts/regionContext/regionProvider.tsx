// import { getAllRegions } from "@services/region/getRegion";
// import { filterStates } from "@utils/regionMethods";
import React, { useState, createContext, useEffect } from "react";
import {
  type I_RegionsData,
  getAllRegions,
  getRegion
} from "@services/region/getRegion";

// the provider of types
export interface I_Region_Context {
  countries: I_RegionsData[];
  currentCountry: I_RegionsData | null;
  states: I_RegionsData[];
  currentState: I_RegionsData | null;
  cities: I_RegionsData[];
  currentCity: I_RegionsData | null;
  handleCountryChange: (countryNo: string) => void;
  handleStateChange: (stateNo: string) => void;
  handleCityChange: (cityNo: string) => void;
  getRegionsData: (area_nos: string[]) => Promise<any>;
  initOptions: (regionAreaNo: {
    country?: string;
    state?: string;
    city?: string;
  }) => void;
}

// make a context for those components
export const RegionContext = createContext<I_Region_Context>({
  countries: [],
  states: [],
  cities: [],
  currentCity: null,
  currentState: null,
  currentCountry: null,
  handleCountryChange: function (): void {
    throw new Error("Function not implemented.");
  },
  handleStateChange: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCityChange: function (): void {
    throw new Error("Function not implemented.");
  },
  getRegionsData: function (area_nos: string[]): Promise<any> {
    throw new Error("Function not implemented.");
  },
  initOptions: function (regionAreaNo: {
    country?: string;
    state?: string;
    city?: string;
  }): void {
    console.log(regionAreaNo);
  }
});

// function component start
export const RegionProvider = ({ children }: { children: React.ReactNode }) => {
  const [allCountries, setAllCountries] = useState<I_RegionsData[]>([]); // 顯示所有國家
  const [allStates, setAllStates] = useState<I_RegionsData[]>([]);
  const [allCities, setAllCities] = useState<I_RegionsData[]>([]);
  const [currentCountry, setCurrentCountry] = useState<I_RegionsData | null>(
    null
  );
  const [currentState, setCurrentState] = useState<I_RegionsData | null>(null);
  const [currentCity, setCurrentCity] = useState<I_RegionsData | null>(null);
  // 取得國家選項內容
  useEffect(() => {
    getAllRegions(null, "2")
      .then((data) => {
        // 空的國家或測試錯誤訊息的都篩掉
        const countriesData = data.options.filter(
          (regionData) =>
            regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6"
        );
        return countriesData;
      })
      .then((countriesData) => {
        setAllCountries(countriesData);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, []);

  // 取得城市選項內容 (0906 Demo, PM: default cities in Taiwan)
  useEffect(() => {
    const area_No = "2039";
    getAllRegions(area_No, "3")
      .then((data) => {
        setAllCities(data.options);
        setCurrentCity(null);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, []);

  useEffect(() => {
    const area_No = currentCountry?.area_No || "2039";
    getAllRegions(area_No, "3")
      .then((data) => {
        setAllCities(data.options);
        setCurrentCity(null);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, [currentCountry]);

  // handleChange
  function handleChange(
    area_no: string,
    areas: I_RegionsData[],
    callback: (area: I_RegionsData) => void
  ) {
    const targetArea = areas.find((area) => area.area_No === area_no);
    if (!targetArea) return;
    callback(targetArea);
  }
  // 選取國家
  function handleCountryChange(area_no: string) {
    return handleChange(area_no, allCountries, setCurrentCountry);
  }

  function handleStateChange(area_no: string) {
    return handleChange(area_no, allStates, setCurrentState);
  }
  function handleCityChange(area_no: string) {
    return handleChange(area_no, allCities, setCurrentCity);
  }
  /**
   * Get data with area_no
   */
  async function getRegionsData(area_nos: string[]) {
    const areaMap: { [key: string]: any } = {};
    await Promise.all(area_nos.map((area_no) => getRegion(area_no))).then(
      (regionsRes) => {
        regionsRes.forEach((regionRes, idx) => {
          areaMap[area_nos[idx]] = regionRes.dataList[0];
        });
      }
    );
    return areaMap;
  }
  // initOptions
  async function updateStateOptions(areaNo?: string): Promise<void> {
    if (!areaNo || areaNo.trim().length === 0) return;
    const data = await getAllRegions(areaNo.slice(0, 4), "3");
    const statesData = data.options.filter((regionData) => {
      return regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6";
    });
    console.log("init state", statesData);
    setAllStates(statesData);
  }
  async function updateCityOptions(areaNo?: string): Promise<void> {
    if (!areaNo || areaNo.trim().length === 0) return;
    const data = await getAllRegions(areaNo.slice(0, 7), "4");
    const citiesData = data.options.filter((regionData) => {
      return regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6";
    });
    console.log("init City", citiesData);
    setAllCities(citiesData);
  }
  //
  async function initOptions(regionAreaNo: {
    country?: string;
    state?: string;
  }) {
    await Promise.all([
      updateStateOptions(regionAreaNo.country),
      updateCityOptions(regionAreaNo.state)
    ]);
  }

  const regionStore = {
    countries: allCountries,
    states: allStates,
    cities: allCities,
    currentCity,
    currentState,
    currentCountry,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    getRegionsData,
    initOptions
  };

  return (
    <RegionContext.Provider value={regionStore}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
