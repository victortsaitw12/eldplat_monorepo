import { IconLeft } from "@components/Button/Primary";
import { PlusIcon } from "evergreen-ui";
import React from "react";
//
import { BodySTY } from "./style";
import FilterItem from "./FilterItem";
//
interface Props {
  closePannel: () => void;
  filter: any;
  updateFilter: (key: string, value: string) => void;
}

function FilterPannel({ closePannel, filter, updateFilter }: Props) {
  // const filter = useFilterStore((state) => state.filter);
  // const updateFilter = useFilterStore((state) => state.updateFilter);
  // const activeSubFilterCount = countActiveFilter(filter);
  console.log("render filter pannel!");
  return (
    <BodySTY
      className="filter-pannel"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const submitData: { [key: string]: any } = {};
        for (const [key, value] of formData) {
          submitData[key] = value;
          if (value !== "") {
            console.log(key, value);
            updateFilter(key, value as string);
          }
        }
        closePannel();
      }}
    >
      {/* <div>新增一個過濾器</div> */}
      {Object.keys(filter).map((key) => {
        return <FilterItem key={key} field={key} filterData={filter[key]} />;
      })}
      <IconLeft text="套用" type="submit">
        <PlusIcon />
      </IconLeft>
    </BodySTY>
  );
}
export default FilterPannel;
