import { create } from "zustand";
import { deepClone } from "@utils/deepClone";

interface StateTypes {
  subFilter: any;
  mainFilter: string;
  selectedForm: string;
  initializeSubFilter: () => void;
  updateSubFilter: (key: string, value: string) => void;
  updateMainFilter: (value: string) => void;
  updateSelectedForm: (value: string) => void;
}
export const useOrderStore = create<StateTypes>((set) => ({
  subFilter: null,
  mainFilter: "1",
  selectedForm: "",
  initializeSubFilter: () => {
    const filter: any = {};
    const initFilter = localStorage.getItem("orderInitFilter");
    if (!initFilter) return;
    for (const item of JSON.parse(initFilter)) {
      filter[item.field_Name] = item;
      filter[item.field_Name].value = "";
    }
    return set(() => {
      return {
        subFilter: filter
      };
    });
  },
  updateMainFilter: (value: string) => {
    return set(() => {
      return {
        mainFilter: value
      };
    });
  },
  updateSubFilter: (key: string, value: string) => {
    console.log("updateFilter", key, value);
    return set((state) => {
      const newFilter = deepClone(state.subFilter);
      newFilter[key].value = value;
      return {
        subFilter: newFilter
      };
    });
  },
  updateSelectedForm: (value: string) => {
    return set(() => {
      return {
        selectedForm: value
      };
    });
  }
}));
