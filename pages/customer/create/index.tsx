import React, { useCallback, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import CustomerEditForm from "@contents/Customer/CustomerEditForm";
import { createCustomer } from "@services/customer/createCustomer";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<NavigationPreloadManager> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      await createCustomer(data);
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
            />
          )}
        </Pane>
      }
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
