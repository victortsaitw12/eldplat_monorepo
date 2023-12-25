import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { defaultPageInfo } from "@services/driver/getAllDrivers";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import OrdersList from "@contents/Orders/NewOrdersList";
import { BodySTY } from "./style";
import FilterWrapper from "@layout/FilterWrapper";
import { I_PageInfo } from "@components/PaginationField";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import { PlusIcon } from "evergreen-ui";
import { getAllOrders } from "@services/driver/getAllOrders";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const DUMMY_subfilter = {
    User_Name: {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "訂單編號、負責業務...",
      value: ""
    },
    Dsph_team: {
      field_Name: "Dsph_team",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "分類",
      value: ""
    },
    Dsph_Area: {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "訂單狀態",
      value: ""
    }
  };
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
        const res = await getAllOrders(subFilter, pageQuery);
        const { ContentList: orderData, PageInfo } = res;

        const getPageInfo = { ...PageInfo };
        setPageInfo(getPageInfo);

        if (isCanceled) return;

        if (!subFilter) {
          const conditionList = res.ConditionList;
          localStorage.setItem(
            "ordersInitFilter",
            JSON.stringify(conditionList)
          );
          initializeSubFilter();
        }

        setData(orderData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    },
    []
  );

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={DUMMY_subfilter}
        btns={
          <PrimaryBtn
            text="新增報價單"
            onClick={() => router.push("/orders/detail/create")}
          >
            <PlusIcon />
          </PrimaryBtn>
        }
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <OrdersList orderData={data} pageInfo={pageInfo} />
        )}
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
