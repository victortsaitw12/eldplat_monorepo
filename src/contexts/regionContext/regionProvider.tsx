import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
// import { getAllRegions } from "@services/region/getRegion";
import { filterStates } from "@utils/regionMethods";
import React, { useState, createContext, useEffect, useContext } from "react";
import {
  type I_RegionsPayload,
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
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const [allCountries, setAllCountries] = useState<I_RegionsData[]>([]); // 顯示所有國家
  const [allStates, setAllStates] = useState<I_RegionsData[]>([]);
  const [allCities, setAllCities] = useState<I_RegionsData[]>([]);
  const [currentCountry, setCurrentCountry] = useState<I_RegionsData | null>(
    null
  );
  const [currentState, setCurrentState] = useState<I_RegionsData | null>(null);
  const [currentCity, setCurrentCity] = useState<I_RegionsData | null>(null);
  //
  console.log("all countries", allCountries);
  console.log("all allStates", allStates);
  console.log("all allCities", allCities);
  // 取得國家選項內容
  useEffect(() => {
    console.log("update country", allCountries);
    getAllRegions("", "2")
      .then((data) => {
        const countriesData = data.options.filter((regionData) => {
          // 空的國家或測試錯誤訊息的都篩掉
          return (
            regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6"
          );
        });
        return countriesData;
      })
      .then((countriesData) => {
        console.log("new countries", countriesData);
        setAllCountries(countriesData);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, []);
  // 取得州選項內容
  useEffect(() => {
    if (!currentCountry) return;
    getAllRegions(currentCountry.area_No.slice(0, 4), "3")
      .then((data) => {
        const statesData = data.options.filter((regionData) => {
          return (
            regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6"
          );
        });
        return statesData;
      })
      .then((statesData) => {
        if (statesData.length === 0) {
          setAllStates([]);
          setAllCities([]);
          setCurrentState(null);
          setCurrentCity(null);
          return;
        }
        // some country has no state, the api will return city as state data...
        if (filterStates(currentCountry.area_No)) {
          setAllStates([]);
          setAllCities(statesData);
          setCurrentState(null);
          // if (statesData.length !== 0) {
          //   setCurrentCity(statesData[0]);
          // }
        } else {
          setAllStates(statesData);
          // clean current state,city, city options
          setCurrentState(null);
          setAllCities([]);
          setCurrentCity(null);
        }
      })
      .catch((err) => console.error("get regions error: ", err));
  }, [currentCountry]);
  // 取得城市選項內容
  useEffect(() => {
    console.log("update cities!");
    console.log("currentState", currentState);
    if (!currentState) return;
    getAllRegions(currentState.area_No.slice(0, 7), "4")
      .then((data) => {
        const citiesData = data.options.filter((regionData) => {
          return (
            regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6"
          );
        });
        return citiesData;
      })
      .then((citiesData) => {
        if (citiesData.length === 0) {
          setAllCities([]);
          setCurrentCity(null);
          return;
        }
        setAllCities(citiesData);
        // clean current city
        setCurrentCity(null);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, [currentState]);
  // 選取國家
  function handleCountryChange(area_no: string) {
    const selectedCountry = allCountries.find((country) => {
      return country.area_No === area_no;
    });
    if (!selectedCountry) return;
    console.log("selectedCountry: ", selectedCountry);
    setCurrentCountry(selectedCountry);
  }

  function handleStateChange(area_no: string) {
    const selectedState = allStates.find((state) => {
      return state.area_No === area_no;
    });
    if (!selectedState) return;
    console.log("selectedState: ", selectedState);
    setCurrentState(selectedState);
  }
  function handleCityChange(area_no: string) {
    const selectedCity = allCities.find((city) => {
      return city.area_No === area_no;
    });
    if (!selectedCity) return;
    console.log("selectedCity: ", selectedCity);
    setCurrentCity(selectedCity);
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
    console.log("regionDatas", areaMap);
  }
  // initOptions
  async function updateStateOptions(areaNo?: string): Promise<void> {
    if (!areaNo) return;
    const data = await getAllRegions(areaNo.slice(0, 4), "3");
    const statesData = data.options.filter((regionData) => {
      return regionData.area_Name_Tw !== "" && regionData.area_No[0] !== "6";
    });
    console.log("init state", statesData);
    setAllStates(statesData);
    // if (filterStates(areaNo)) {
    //   setAllStates([]);
    //   setAllCities(statesData);
    // } else {
    //   setAllStates(statesData);
    // }
  }
  async function updateCityOptions(areaNo?: string): Promise<void> {
    if (!areaNo) return;
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
    console.log("regionAreaNo", regionAreaNo);
    await Promise.all([
      updateStateOptions(regionAreaNo.country),
      updateCityOptions(regionAreaNo.state)
    ]);
  }

  const allContextValues = {
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
    <RegionContext.Provider value={allContextValues}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
