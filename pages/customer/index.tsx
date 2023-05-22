import React, { useState, useEffect, useCallback } from "react";
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
//
const mainFilterArray = [
  { id: 1, label: "全部", value: "all" },
  { id: 2, label: "停用", value: "seal" }
];
//
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
  } = useCustomerStore();
  //
  const fetchCustomerData = useCallback(
    async (isCanceled: boolean) => {
      getAllCustomers(subFilter).then((res) => {
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
      });
    },
    [initializeSubFilter, subFilter]
  );
  //
  const deleteItemHandler = async (id: string) => {
    deleteCustomer(id).then((res) => {
      console.log("res", res);
      fetchCustomerData(false);
    });
  };
  //進入供應商編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/customer/detail/" + id + "?editPage=1");
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/customer/detail/${id}`);
  };
  const changeMainFilterHandler = (value: string) => {
    alert(value);
    updateMainFilter(value);
  };
  //
  useEffect(() => {
    updateMainFilter("all");
  }, [updateMainFilter]);
  //
  useEffect(() => {
    let isCanceled = false;
    fetchCustomerData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, []);
  if (!data) {
    return <LoadingSpinner />;
  }
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
          <CustomerList
            clientData={data}
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
          tabName={["新增供應商"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <CustomerCreateForm
            reloadData={() => {
              setData([]);
              fetchCustomerData(false);
            }}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
