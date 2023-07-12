import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import BusList from "@contents/Bus/BusList";
import { getAllBuses, busPattern, busParser } from "@services/bus/getAllBuses";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRouter } from "next/router";
import { useBusStore } from "@contexts/filter/busStore";
import { BodySTY } from "./style";
import { mappingQueryData } from "@utils/mappingQueryData";
import { deleteBus } from "@services/bus/deleteBus";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import BusCreateForm from "@contents/Bus/BusCreateForm";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [nowTab, setNowTab] = useState("1");
  const [options, setOptions] = useState<any>(null);
  const {
    initializeSubFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useBusStore();
  //
  const fetchBusData = useCallback(
    async (isCanceled: boolean, mainFilter = "1") => {
      getAllBuses(subFilter, mainFilter).then((res) => {
        console.log("res.contentList", res.contentList);
        const busesData = mappingQueryData(
          res.contentList,
          busPattern,
          busParser
        );
        if (isCanceled) {
          console.log("canceled");
          return;
        }
        if (!subFilter) {
          localStorage.setItem(
            "busInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
        setData(busesData);
      });
    },
    [initializeSubFilter, subFilter]
  );
  //
  useEffect(() => {
    console.log("update mainFilter to 1");
    updateMainFilter("1");
    getCreateBusOptions().then((res) => {
      setOptions(res.dataList[0]);
    });
  }, []);
  //
  useEffect(() => {
    let isCanceled = false;
    fetchBusData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  const goToEditPageHandler = (id: string) => {
    router.push("/bus/detail/" + id + "?editPage=edit");
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/bus/detail/${id}?editPage=view`);
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  //
  const deleteItemHandler = async (id: string) => {
    deleteBus(id).then((res) => {
      console.log("res", res);
      fetchBusData(false);
    });
  };
  if (!data) {
    return <LoadingSpinner />;
  }
  return (
    <BodySTY>
      <TableWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={nowTab}
        mainFilterArray={mainFilterArray}
        viewOnly={true}
      >
        <FilterWrapper
          updateFilter={updateSubFilter}
          resetFilter={() => {
            initializeSubFilter();
          }}
          filter={subFilter}
        >
          <BusList
            busData={data}
            goToCreatePage={() => {
              setDrawerOpen(true);
            }}
            deleteItemHandler={deleteItemHandler}
            goToEditPageHandler={goToEditPageHandler}
            goToDetailPage={goToDetailPageHandler}
          />
        </FilterWrapper>
      </TableWrapper>
      {isDrawerOpen && (
        <Drawer
          tabName={["新增車輛"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <BusCreateForm
            reloadData={() => {
              fetchBusData(false);
              setDrawerOpen(false);
            }}
            options={options}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
