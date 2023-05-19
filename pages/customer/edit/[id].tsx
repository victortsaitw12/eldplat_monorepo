import React, { useCallback, useEffect, useState } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import CustomerEditForm from "@contents/Customer/CustomerEditForm";
import { updateCustomer } from "@services/customer/updateCustomer";
import { getCustomerById } from "@services/customer/getCustomerById";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { useCustomerStore } from "@contexts/filter/customerStore";
import { ParsedUrlQuery } from "querystring";
import {
  CustomerDataTypes,
  getCustomerDefaultData
} from "@contents/Customer/CustomerEditForm/customerDefaultData";
import { useForm } from "react-hook-form";
import TableWrapper from "@layout/TableWrapper";
//
const mainFilterArray = [{ id: 1, label: "客戶資料", value: "CustomerData" }];
//
function fakeSubmit(data: any) {
  console.log("data", data);
}
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ customerId }) => {
  const router = useRouter();
  const { mainFilter, updateMainFilter } = useCustomerStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [oldCustomerData, setOldCustomerData] = useState<any>(null);
  async function getDefaultValuesHandler() {
    const lowerCaseFlatternData = await getCustomerById(customerId);
    console.log("lowerCaseFlatternData", lowerCaseFlatternData);
    // return getCustomerDefaultData(lowerCaseFlatternData);
    return lowerCaseFlatternData;
  }
  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };
  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<CustomerDataTypes>({
    defaultValues: async () => getDefaultValuesHandler()
  });
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("asyncSubmitForm", data);
    // try {
    //   const flatternObj: { [key: string]: any } = {};
    //   for (const key in data) {
    //     Object.assign(flatternObj, data[key]);
    //   }
    //   console.log("flatternObj", flatternObj);
    //   const res = await updateBus(busId, flatternObj);
    //   console.log("response of bus update: ", res);
    //   router.push("/bus");
    // } catch (e: any) {
    //   console.log(e);
    // }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/customer");
  }, [router]);
  return (
    <TableWrapper
      onChangeTab={changeMainFilterHandler}
      mainFilter={mainFilter}
      mainFilterArray={mainFilterArray}
      onSave={handleSubmit(fakeSubmit)}
    >
      <BodySTY>
        <CustomerEditForm
          submitForm={asyncSubmitForm}
          onCancel={cancelFormHandler}
          formType={mainFilter}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
        />
      </BodySTY>
    </TableWrapper>
  );
};

interface Props {
  customerId: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
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

Page.getLayout = getLayout;
export default Page;
