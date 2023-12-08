import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { mappingQueryData } from "@utils/mappingQueryData";
import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver, defaultPageInfo } from "@services/driver/getAllDrivers";
import { deleteDriver } from "@services/driver/deleteDriver";
import { updateDriverStatus } from "@services/driver/updateDriverStatus";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import { BodySTY, StyledDot, UserSTY } from "./style";
import FilterWrapper from "@layout/FilterWrapper";
import { I_PageInfo } from "@components/PaginationField";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    let isCanceled = false;
    fetchDriverData(isCanceled, pageInfo);
    setIsLoading(false);

    return () => {
      isCanceled = true;
    };
  }, []);

  const fetchDriverData = React.useCallback(
    async (isCanceled: boolean, pageQuery = defaultPageInfo) => {
      try {
        const res = await getAllDriver(subFilter, pageQuery);
        const { ContentList: driverData, PageInfo } = res;

        const getPageInfo = { ...PageInfo };
        setPageInfo(getPageInfo);

        if (isCanceled) return;

        if (!subFilter) {
          const conditionList = res.ConditionList;
          localStorage.setItem(
            "driverInitFilter",
            JSON.stringify(conditionList)
          );
          initializeSubFilter();
        }

        setData(driverData);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    },
    []
  );

  const handleDeleteDriver = (id: string) => {
    updateDriverStatus(id, "2").then(() => {
      fetchDriverData(false);
    });
  };
  const handleRecoverDriver = (id: string) => {
    updateDriverStatus(id, "1").then(() => {
      fetchDriverData(false);
    });
  };
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      fetchDriverData(false, pageQuery);
    },
    [fetchDriverData]
  );

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <DriverList
            driverData={data}
            pageInfo={pageInfo}
            handleDeleteDriver={handleDeleteDriver}
            handleRecoverDriver={handleRecoverDriver}
            handlePageChange={handlePageChange}
          />
        )}
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
