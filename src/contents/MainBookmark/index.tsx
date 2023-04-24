import { Pane, SettingsIcon, SearchIcon } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import { countActiveFilter } from "@utils/countActiveFilter";
import { BodySTY } from "./style";
import SubFilterButton from "./SubFilterButton";
import FilterPannel from "./FilterPannel";
// import { useFilterStore } from "@stores/busFilterStore";
// TODO: 測試用，之後可以拿掉
interface I_MainBookmark {
  children?: React.ReactNode;
  updateFilter: (key: string, value: string) => void;
  resetFilter?: () => void;
  filter: any;
}
// const mainFilterArray = [
//   { id: 1, label: "全部", value: "all" },
//   { id: 2, label: "封存", value: "seal" }
// ];

function MainBookmark({
  children,
  resetFilter,
  updateFilter,
  filter
}: I_MainBookmark) {
  // const [mainFilter, setMainFilter] = useState("all");
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
      <Pane height="100%">
        {/* 主頁籤 */}
        {/* <Tablist
          flexBasis={240}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="top-bookmark"
        >
          <Pane className="main-filter" display="flex">
            {mainFilterArray.map((mainFilter) => {
              return (
                <Tab
                  key={mainFilter.id!}
                  onSelect={() => setMainFilter(mainFilter.value)}
                >
                  <span>{mainFilter.label}</span>
                  <ChevronDownIcon />
                </Tab>
              );
            })}
          </Pane>
          <Pane cursor="pointer">
            <Icon
              icon={FullscreenIcon}
              size={16}
              marginY="auto"
              marginX="10px"
              color="#91A9C5"
            />
            <Icon
              icon={CrossIcon}
              size={18}
              marginY="auto"
              marginX="10px"
              color="#91A9C5"
            />
          </Pane>
        </Tablist> */}

        <Pane
          background="#FFFFFF"
          flex="1"
          borderRadius="10px"
          height="calc(100% - 40px)"
        >
          {/* 子頁籤 */}
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

          <Pane height="calc(100% - 50px)" overflowX="auto" position="relative">
            {/* TODO: Put Testing Component Here!!!!!!!! */}
            {children}
            {filterIsOpen && (
              <div className="filter-pannel-container">
                <FilterPannel
                  closePannel={() => {
                    setFilterIsOpen(false);
                  }}
                  filter={filter}
                  updateFilter={updateFilter}
                />
              </div>
            )}
          </Pane>
        </Pane>
      </Pane>
    </BodySTY>
  );
}

export default MainBookmark;
