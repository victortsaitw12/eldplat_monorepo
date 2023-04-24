import React, { useCallback, useEffect, useState } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import CustomerEditForm from "@contents/Customer/CustomerEditForm";
import { updateCustomer } from "@services/customer/updateCustomer";
import { getCustomerById } from "@services/customer/getCustomerById";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ customer_id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [oldCustomerData, setOldCustomerData] = useState<any>(null);
  //
  useEffect(() => {
    const getCustomerData = async () => {
      setLoading(true);
      try {
        const data = await getCustomerById(customer_id);
        console.log("data", data);
        setOldCustomerData(data);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    getCustomerData();
  }, [customer_id]);
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      await updateCustomer(customer_id, data);
      router.push("/customer");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  //
  const cancelFormHandler = useCallback(() => {
    router.push("/customer");
  }, [router]);
  return (
    <BodySTY>
      {
        <Pane
          width="100%"
          height="100%"
          background="#fff"
          borderRadius="10px"
          overflow="auto"
        >
          {/* Put your component here */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <CustomerEditForm
              submitForm={asyncSubmitForm}
              onCancel={cancelFormHandler}
              oldData={oldCustomerData}
            />
          )}
        </Pane>
      }
    </BodySTY>
  );
};

interface Props {
  customer_id: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  let custormerData;
  console.log(custormerData);
  return {
    props: {
      customer_id: params ? params.id : ""
    }
  };
};

Page.getLayout = getLayout;
export default Page;
