import React, { useCallback } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import CustomerEditForm from "@contents/Customer/CustomerEditForm";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };
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
          <CustomerEditForm
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
          />
        </Pane>
      }
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
