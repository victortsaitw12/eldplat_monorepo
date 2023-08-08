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
  console.log("currentCountry", currentCountry);
  console.log("currentState", currentState);
  console.log("currentCity", currentCity);
  // 取得國家選項內容
  useEffect(() => {
    console.log("update country");
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
        // clean current country
        // clean current state, state options, city, city options
        setCurrentCountry(null);
        setAllStates([]);
        setCurrentState(null);
        setAllCities([]);
        setCurrentCity(null);
      })
      .catch((err) => console.error("get regions error: ", err));
  }, []);
  // 取得州選項內容
  useEffect(() => {
    console.log("update states");
    console.log("currentCountry", currentCountry);
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
          if (statesData.length !== 0) {
            setCurrentCity(statesData[0]);
          }
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

  // 將國家代號轉為文字形式
  // const handleCountrySwitch = (country: string) => {
  //   const showCountry = allCountries?.filter((v) => {
  //     return country === v.areaNo;
  //   });
  //   return showCountry[0]?.regionName;
  // };

  // 將州省代號轉為文字形式
  // const handleStateSwitch = (state: string) => {
  //   const showState = getState?.filter((v: { area_No: string }) => {
  //     return state === v.area_No;
  //   });
  //   if (showState) return showState[0]?.area_Name_Tw;
  // };

  // 將城市代號轉為文字形式
  // const handleCitySwitch = (city: string) => {
  //   const showCity = getCity?.filter((v: { area_No: string }) => {
  //     return city === v.area_No;
  //   });
  //   if (showCity) return showCity[0]?.area_Name_Tw;
  // };

  // 判斷國別來決定要顯示的國碼
  // const handleCountryCode = (country: string) => {
  //   const showCountryCode = allCountries?.filter((v) => {
  //     return v.areaNo === country;
  //   });
  //   return showCountryCode[0]?.countryCode;
  // };

  // useEffect(() => {
  //   const state_area_no = companyData?.company_country2.substring(0, 4);
  //   const city_area_no = companyData?.company_area.substring(0, 7);
  //   const state_level_num = "3";
  //   const city_level_num = "4";
  //   getAllRegions(state_area_no, state_level_num).then((data) => {
  //     setGetState(data.options);
  //   });
  //   getAllRegions(city_area_no, city_level_num).then((data) => {
  //     setGetCity(data.options);
  //   });
  // }, [companyData?.company_area, companyData?.company_country2]);

  ///////////////////////////////////////////////////////
  // const allContextValues = {
  //   allCountries,
  //   // setAllCountries,
  //   allStates,
  //   // setAllStates,
  //   allCities,
  //   // setAllCities,
  //   handleCountryChange,
  //   handleStateChange,
  //   handleCityChange,
  //   // handleCountrySwitch
  //   // handleStateSwitch,
  //   // handleCitySwitch,
  //   // handleCountryCode
  // };

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
    getRegionsData
  };

  return (
    <RegionContext.Provider value={allContextValues}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
