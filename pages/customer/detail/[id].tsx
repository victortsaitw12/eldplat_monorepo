import React, { useEffect, useState, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import CustomerDetail from "@contents/Customer/CustomerDetail";
//@services
import { updateCustomer } from "@services/customer/updateCustomer";
//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCustomerStore } from "@contexts/filter/customerStore";
import { getCustomerById } from "@services/customer/getCustomerById";

import LoadingSpinner from "@components/LoadingSpinner";
import RegionProvider from "@contexts/regionContext/regionProvider";
import { getCreateCustomerOptions } from "@services/customer/getCreateCustomerOptions";
//
const mainFilterArray = [{ id: 1, label: "客戶資料", value: "1" }];
//
const Page: NextPageWithLayout<{ customerId: string; editPage: string }> = ({
  customerId,
  editPage
}) => {
  //
  console.log("editPage", editPage);
  //
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useCustomerStore();
  const router = useRouter();
  const [customerDefaultData, setCustomerDefaultData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<any>(null);
  //
  useEffect(() => {
    getCreateCustomerOptions().then((res) => {
      console.log("getCreateCustomerOptions", res);
      setOptions(res);
    });
  }, []);
  //
  useEffect(() => {
    updateMainFilter("1");
    setLoading(true);
    getCustomerById(customerId)
      .then((res) => {
        console.log("res", res);
        setCustomerDefaultData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      await updateCustomer(data);
      router.push({
        pathname: "/customer/detail/" + customerId,
        query: { editPage: "view" }
      });
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  //
  const onCancelHandler = () => {
    router.push("/customer");
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <RegionProvider>
      <BodySTY>
        <TableWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={mainFilter}
          mainFilterArray={mainFilterArray}
          onSave={() => {
            submitRef.current?.click();
          }}
          onEdit={() => {
            router.push({
              pathname: "/customer/detail/" + customerId,
              query: { editPage: "edit" }
            });
          }}
          onClose={onCancelHandler}
          isEdit={editPage === "edit"}
        >
          <CustomerDetail
            isEdit={editPage === "edit"}
            submitRef={submitRef}
            asyncSubmitForm={asyncSubmitForm}
            customerId={customerId}
            customerDefaultData={customerDefaultData}
            options={options}
          />
        </TableWrapper>
      </BodySTY>
    </RegionProvider>
  );
};
interface Props {
  customerId: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params, query } = context;
  return {
    props: {
      editPage: query.editPage || "view",
      customerId: params ? params.id : ""
    }
  };
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
