import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import CustomerList from "@contents/Customer/CustomerList";
import {
  getAllCustomers,
  customerParser,
  customerPattern
} from "@services/customer/getAllCustomers";
import LoadingSpinner from "@components/LoadingSpinner";
import { useCustomerStore } from "@contexts/filter/customerStore";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { deleteCustomer } from "@services/customer/deleteCustomer";
import { getCreateCustomerOptions } from "@services/customer/getCreateCustomerOptions";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import CustomerCreateForm from "@contents/Customer/CustomerCreateForm";
import { I_PageInfo } from "@components/PaginationField";
import RegionProvider from "@contexts/regionContext/regionProvider";
//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const [options, setOptions] = useState<any>(null);
  const [isDrawerFullWidth, setIsDrawerFullWidth] = useState(false);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>({
    Arrangement: "desc",
    Orderby: null,
    Page_Index: 1,
    Page_Size: 10,
    Last_Page: 10
  });
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useCustomerStore();
  //
  const fetchCustomerData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: I_PageInfo
  ) => {
    getAllCustomers(pageInfo, subFilter, mainFilter).then((res) => {
      console.log("res", res);
      const customerData = mappingQueryData(
        res.contentList,
        customerPattern,
        customerParser
      );
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!subFilter) {
        localStorage.setItem(
          "customerInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeSubFilter();
      }
      setData(customerData);
      setPageInfo(res.pageInfo);
    });
  };
  //
  useEffect(() => {
    getCreateCustomerOptions().then((res) => {
      console.log("getCreateCustomerOptions", res);
      setOptions(res);
    });
  }, []);
  useEffect(() => {
    let isCanceled = false;
    fetchCustomerData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  //進入供應商編輯頁
  const upDatePageHandler = (newPageInfo: I_PageInfo) => {
    fetchCustomerData(false, nowTab, newPageInfo);
  };

  const goToEditPageHandler = (id: string) => {
    router.push("/customer/detail/" + id + "?editPage=edit");
  };

  const goToDetailPageHandler = (id: string) => {
    router.push(`/customer/detail/${id}?editPage=view`);
  };

  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    router.push({
      pathname: "/customer/",
      query: { ...router?.query, status: value }
    });
  };

  const deleteItemHandler = async (id: string) => {
    deleteCustomer(id).then((res) => {
      fetchCustomerData(false, nowTab, pageInfo);
    });
  };

  const recoverItemHandler = async (id: string) => {
    console.log("上一動");
  };
  //
  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <RegionProvider>
      <BodySTY>
        <TabsWrapper
          isHide={isDrawerFullWidth}
          onChangeTab={changeMainFilterHandler}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
        >
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={subFilter}
          >
            <CustomerList
              listType={nowTab}
              customerData={data}
              goToCreatePage={() => {
                setDrawerOpen(true);
              }}
              deleteItemHandler={deleteItemHandler}
              recoverItemHandler={recoverItemHandler}
              goToEditPageHandler={goToEditPageHandler}
              goToDetailPage={goToDetailPageHandler}
              upDatePageHandler={upDatePageHandler}
              pageInfo={pageInfo}
            />
          </FilterWrapper>
        </TabsWrapper>
      </BodySTY>
    </RegionProvider>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
