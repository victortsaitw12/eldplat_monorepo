import { FilterIcon, SearchIcon, Select, Button } from "evergreen-ui";
import React, { useState } from "react";
import { countActiveFilter } from "@utils/countActiveFilter";
import { BodySTY } from "./style";
import SubFilter from "./SubFilter";
import LoadingSpinner from "@components/LoadingSpinner";
// import { useFilterStore } from "@stores/busFilterStore";
// TODO: 測試用，之後可以拿掉
interface I_MainBookmark {
  children?: React.ReactNode;
  updateFilter: (key: string, value: string) => void;
  resetFilter?: () => void;
  filter: any;
  btns?: React.ReactNode;
}

function FilterWrapper({
  children,
  resetFilter,
  updateFilter,
  filter,
  btns
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
        updateFilter(field, searchText);
      }
    }, 500);
  };
  //
  if (!filter) {
    return <LoadingSpinner />;
  }

  return (
    <BodySTY>
      <div className="actionRow">
        <div className="filter-wrapper">
          {Object.entries(filter).reduce((buttonList: any[], [key, _]) => {
            if (filter[key].displayType === "search") {
              buttonList.push(
                <label key={key} className="search-tool">
                  <SearchIcon size={12} />
                  <input
                    placeholder={filter[key].label || "搜尋"}
                    onChange={(e) => {
                      delayHandleSearch(key, e.target.value);
                    }}
                  />
                </label>
              );
            } else if (filter[key].displayType === "fix") {
              buttonList.push(
                <SubFilter
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
          <Button
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
              <FilterIcon />
            )}
            <span>篩選器</span>
          </Button>
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
        {btns && <div className="btns">{btns}</div>}
      </div>
      {children && <div className="children-container">{children}</div>}
    </BodySTY>
  );
}

export default FilterWrapper;
