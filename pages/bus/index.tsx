import React, { useState, useEffect, useMemo } from "react";
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
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useBusStore();
  useEffect(() => {
    updateMainFilter("all");
  }, []);
  useEffect(() => {
    let isCanceled = false;
    fetchBusData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, [mainFilter, subFilter, initializeSubFilter]);
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "全部", value: "all" },
      { id: 2, label: "停用", value: "seal" }
    ],
    []
  );
  const fetchBusData = async (isCanceled: boolean) => {
    getAllBuses(subFilter).then((res) => {
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
  };
  //
  if (!data) {
    return <LoadingSpinner />;
  }
  /**
   * CUD handler
   */
  const createBusHandler = async (busData: any) => {
    console.log(busData);
  };

  const deleteItemHandler = async (id: string) => {
    deleteBus(id).then((res) => {
      console.log("res", res);
      fetchBusData(false);
    });
  };

  const goToEditPageHandler = (id: string) => {
    router.push(`/bus/edit/${id}`);
  };

  const changeMainFilterHandler = (value: string) => {
    alert(value);
    updateMainFilter(value);
  };
  return (
    <BodySTY>
      <TableWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainFilterArray}
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
          <BusCreateForm createBus={createBusHandler} />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
