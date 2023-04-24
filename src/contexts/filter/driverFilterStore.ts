import { create } from "zustand";
import { deepClone } from "@utils/deepClone";

interface StateTypes {
  filter: any;
  initializeFilter: () => void;
  updateFilter: (key: string, value: string) => void;
}
export const useFilterStore = create<StateTypes>((set) => ({
  filter: null,
  initializeFilter: () => {
    const filter: any = {};
    const initFilter = localStorage.getItem("driverInitFilter");
    if (!initFilter) return;
    for (const item of JSON.parse(initFilter)) {
      filter[item.field_Name] = item;
      filter[item.field_Name].value = "";
    }
    return set((state) => {
      return {
        filter
      };
    });
  },
  updateFilter: (key: string, value: string) => {
    console.log("updateFilter", key, value);
    return set((state) => {
      const newFilter = deepClone(state.filter);
      newFilter[key].value = value;
      return {
        filter: newFilter
      };
    });
  }
}));
