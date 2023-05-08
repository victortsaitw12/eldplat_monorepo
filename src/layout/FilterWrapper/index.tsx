import { Pane, SettingsIcon, SearchIcon } from "evergreen-ui";
import React, { useState } from "react";
import { countActiveFilter } from "@utils/countActiveFilter";
import { BodySTY } from "./style";
import SubFilterButton from "./SubFilterButton";
// import { useFilterStore } from "@stores/busFilterStore";
// TODO: 測試用，之後可以拿掉
interface I_MainBookmark {
  children?: React.ReactNode;
  updateFilter: (key: string, value: string) => void;
  resetFilter?: () => void;
  filter: any;
}

function FilterWrapper({
  children,
  resetFilter,
  updateFilter,
  filter
}: I_MainBookmark) {
  const [activeSubFilter, setActiveSubFilter] = useState<string>("");
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const activeSubFilterCount = countActiveFilter(filter);
  let timer: NodeJS.Timeout;
  //
  const delayHandleSearch = (field: string, searchText: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (searchText.trim() === "") {
        updateFilter(field, "");
      } else {
        console.log("field", field);
        console.log("searchText", searchText);
        updateFilter(field, searchText);
      }
    }, 500);
  };
  //
  if (!filter) {
    return <div>loading...</div>;
  }

  return (
    <BodySTY>
      <div className="sub-filter">
        {Object.entries(filter).reduce((buttonList: any[], [key, _]) => {
          if (filter[key].displayType === "search") {
            buttonList.push(
              <label key={key} className="search-tool">
                <SearchIcon />
                <input
                  placeholder="搜尋"
                  onChange={(e) => {
                    delayHandleSearch(key, e.target.value);
                  }}
                />
              </label>
            );
          } else if (filter[key].displayType === "fix") {
            buttonList.push(
              <SubFilterButton
                key={key}
                filterTag={key}
                label={filter[key].label}
                value={filter[key].value}
                updateFilter={updateFilter.bind(null, key)}
                active={activeSubFilter === key}
                setActive={setActiveSubFilter}
              />
            );
          }
          return buttonList;
        }, [])}
        <button
          className="subFilter-item"
          onClick={() => {
            setActiveSubFilter("");
            setFilterIsOpen((prev) => !prev);
          }}
        >
          {activeSubFilterCount > 0 ? (
            <div className="item-number">
              <span>{activeSubFilterCount}</span>
            </div>
          ) : (
            <SettingsIcon />
          )}
          <span>過濾器</span>
        </button>
        {activeSubFilterCount > 0 && (
          <button
            className="subFilter-item clear"
            onClick={() => {
              resetFilter!();
            }}
          >
            清除所有篩選
          </button>
        )}
      </div>
      {children}
    </BodySTY>
  );
}

export default FilterWrapper;
