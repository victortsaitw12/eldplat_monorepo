import React, { useState, useEffect, useCallback, ReactNode } from "react";
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
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import CustomerCreateForm from "@contents/Customer/CustomerCreateForm";
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
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    arrangement: "desc",
    orderby: null,
    page_Index: 1,
    page_Size: 10,
    last_Page: 10
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
    pageInfo: PageInfoType
  ) => {
    console.log("mainFilter", mainFilter);
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
    let isCanceled = false;
    fetchCustomerData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  //進入供應商編輯頁
  const upDatePageHandler = (newPageInfo: PageInfoType) => {
    fetchCustomerData(false, nowTab, newPageInfo);
  };
  //
  const goToEditPageHandler = (id: string) => {
    router.push("/customer/detail/" + id + "?editPage=edit");
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/customer/detail/${id}?editPage=view`);
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
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

  console.log("CUSTOMER data", data);
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
          <CustomerList
            listType={nowTab}
            clientData={data}
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
      </TableWrapper>
      {isDrawerOpen && (
        <Drawer
          tabName={["新增客戶"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <CustomerCreateForm
            reloadData={() => {
              fetchCustomerData(false, nowTab, pageInfo);
              setDrawerOpen(false);
            }}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
