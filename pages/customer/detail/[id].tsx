import React, { useEffect, useState, useMemo, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services
import CustomerDetail from "@contents/Customer/CustomerDetail";
import { updateCustomer } from "@services/customer/updateCustomer";
//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCustomerStore } from "@contexts/filter/customerStore";
const mainFilterArray = [{ id: 1, label: "客戶資料", value: "1" }];
//
const Page: NextPageWithLayout<never> = ({ customerId, editPage }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useCustomerStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateMainFilter("1");
  }, []);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("edited data", data);
    try {
      await updateCustomer(data);
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
    router.push({
      pathname: "/customer/detail/" + customerId,
      query: { editPage: "view" }
    });
  };
  //
  const onCancelHandler = () => {
    router.push("/customer");
  };

  return (
    <BodySTY>
      <TableWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainFilterArray}
        onSave={() => {
          console.log("save");
          console.log("submitRef", submitRef.current);
          submitRef.current?.click();
        }}
        onEdit={() => {
          router.push({
            pathname: "/customer/detail/" + customerId,
            query: { editPage: "edit" }
          });
        }}
        onClose={onCancelHandler}
        isEdit={editPage}
      >
        <CustomerDetail
          isEdit={editPage}
          submitRef={submitRef}
          asyncSubmitForm={asyncSubmitForm}
          customerId={customerId}
        />
      </TableWrapper>
    </BodySTY>
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
      editPage: query.editPage == "edit",
      customerId: params ? params.id : ""
    }
  };
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
