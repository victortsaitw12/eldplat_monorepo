import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services
import { getCustomerById } from "@services/customer/getCustomerById";
import CustomerDetail from "@contents/Customer/CustomerDetail";
import { updateCustomer } from "@services/customer/updateCustomer";
//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { CustomerDataTypes } from "@contents/Customer/customer.type";
import { useCustomerStore } from "@contexts/filter/customerStore";
//
function fakeSubmit(data: any) {
  console.log("data", data);
}
//
const mainFilterArray = [{ id: 1, label: "客戶資料", value: "CustomerData" }];
//
const Index: NextPageWithLayout<never> = ({ customerId }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useCustomerStore();
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "1" || false);
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
    router.push("/customer");
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
          console.log("set is Edit to true");
          setIsEdit(true);
        }}
        onClose={onCancelHandler}
        isEdit={isEdit}
      >
        <CustomerDetail
          isEdit={isEdit}
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
  const { params } = context;
  return {
    props: {
      customerId: params ? params.id : ""
    }
  };
};
Index.getLayout = getLayout;
export default Index;
