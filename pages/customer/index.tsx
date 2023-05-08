import React, { useState, useEffect } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import MainBookmark from "@contents/MainBookmark";
import CustomerList from "@contents/Customer/CustomerList";
import {
  getAllCustomers,
  customerParser,
  customerPattern
} from "@services/customer/getAllCustomers";
import LoadingSpinner from "@components/LoadingSpinner";
import { useFilterStore } from "@contexts/filter/customerFilterStore";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { deleteCustomer } from "@services/customer/deleteCustomer";
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const initializeFilter = useFilterStore(
    (state: any) => state.initializeFilter
  );
  const updateFilter = useFilterStore((state: any) => state.updateFilter);
  const filter = useFilterStore((state: any) => state.filter);
  //
  useEffect(() => {
    let isCanceled = false;
    fetchCustomerData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, [filter, initializeFilter]);
  //
  const fetchCustomerData = async (isCanceled: boolean) => {
    getAllCustomers(filter).then((res) => {
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
      if (!filter) {
        localStorage.setItem(
          "customerInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeFilter();
      }
      setData(customerData);
    });
  };
  //
  const goToCreatePageHandler = () => {
    router.push("/customer/create");
  };

  const deleteItemHandler = async (id: string) => {
    deleteCustomer(id).then((res) => {
      console.log("res", res);
      fetchCustomerData(false);
    });
  };

  const goToEditPageHandler = (id: string) => {
    router.push(`/customer/edit/${id}`);
  };

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <BodySTY>
      <MainBookmark
        filter={filter}
        updateFilter={updateFilter}
        resetFilter={() => {
          initializeFilter();
        }}
      >
        <CustomerList
          clientData={data}
          goToCreatePage={goToCreatePageHandler}
          deleteItemHandler={deleteItemHandler}
          goToEditPageHandler={goToEditPageHandler}
        />
      </MainBookmark>
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
