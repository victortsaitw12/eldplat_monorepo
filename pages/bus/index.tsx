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
import { PageInfoType } from "@services/type";
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
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    arrangement: "desc",
    orderby: null,
    page_Index: 1,
    page_Size: 10,
    last_Page: 10
  });

  const {
    initializeSubFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useBusStore();
  //
  const fetchBusData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: PageInfoType
  ) => {
    getAllBuses(pageInfo, subFilter, mainFilter).then((res) => {
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
      setPageInfo(res.pageInfo);
    });
  };
  //
  useEffect(() => {
    updateMainFilter("1");
    getCreateBusOptions().then((res) => {
      setOptions(res.dataList[0]);
    });
  }, []);
  //
  useEffect(() => {
    let isCanceled = false;
    fetchBusData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  //
  const upDatePageHandler = (newPageInfo: PageInfoType) => {
    fetchBusData(false, nowTab, newPageInfo);
  };
  // const changePageSizeHandler = (size: number) => {};
  //
  const goToEditPageHandler = (id: string, item: any) => {
    const license_plate = item?.license_plate?.value;
    router.push(
      "/bus/detail/" + id + "?editPage=edit&license_plate=" + license_plate
    );
  };
  const goToDetailPageHandler = (id: string, item: any) => {
    const license_plate = item?.license_plate?.value;
    router.push(
      `/bus/detail/${id}?editPage=view&license_plate=${license_plate}`
    );
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  //
  const deleteItemHandler = async (id: string) => {
    deleteBus(id).then((res) => {
      fetchBusData(false, nowTab, pageInfo);
    });
  };
  const recoverItemHandler = async (id: string) => {
    console.log("上一動");
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
            listType={nowTab}
            busData={data}
            goToCreatePage={() => {
              setDrawerOpen(true);
            }}
            recoverItemHandler={recoverItemHandler}
            deleteItemHandler={deleteItemHandler}
            goToEditPageHandler={goToEditPageHandler}
            goToDetailPage={goToDetailPageHandler}
            upDatePageHandler={upDatePageHandler}
            pageInfo={pageInfo}
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
              fetchBusData(false, nowTab, pageInfo);
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
