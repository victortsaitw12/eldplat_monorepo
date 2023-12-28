import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";

import { getLayout } from "@layout/MainLayout";
import BusList from "@contents/Bus/BusList";
import { getAllBuses, busPattern } from "@services/bus/getAllBuses";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRouter } from "next/router";
import { useBusStore } from "@contexts/filter/busStore";
import { BodySTY } from "./style";
import { mappingQueryData } from "@utils/mappingQueryData";
import { deleteBus } from "@services/bus/deleteBus";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import BusCreateForm from "@contents/Bus/BusCreateForm";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
import { I_PageInfo } from "@components/PaginationField";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import { PlusIcon } from "evergreen-ui";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  const [pageInfo, setPageInfo] = useState<I_PageInfo>({
    Arrangement: "desc",
    Orderby: null,
    Page_Index: 1,
    Page_Size: 10,
    Last_Page: 10
  });

  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const fetchBusData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: I_PageInfo
  ) => {
    getAllBuses(pageInfo, subFilter, mainFilter).then((res) => {
      const { resultList: busesData, pageInfo } = res;

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

      console.log("busData", busesData);

      setData(busesData);
      setPageInfo(pageInfo);
    });
  };

  useEffect(() => {
    let isCanceled = false;
    fetchBusData(isCanceled, "1", pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [pageInfo, subFilter]);

  if (!data) {
    return <LoadingSpinner />;
  }

  const createBusHandler = () => {
    router.push("/bus/detail/create");
  };

  const controlButton = (
    <PrimaryBtn text={"新增車輛明細"} onClick={createBusHandler}>
      <PlusIcon size={14} />
    </PrimaryBtn>
  );

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
        btns={controlButton}
      >
        <BusList busData={data} pageInfo={pageInfo} />
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
