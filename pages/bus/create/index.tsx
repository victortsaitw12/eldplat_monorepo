import React, { useCallback, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { createBus } from "@services/bus/createBus";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import BusOptions from "@contents/Bus/BusOptions";
import BusEditForm from "@contents/Bus/BusEditForm";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formType, setFormType] = useState("Detail");
  //
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      console.log("data of bus create: ", data);
      const res = await createBus(data);
      console.log("response of bus create: ", res);
      router.push("/bus");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/bus");
  }, [router]);
  return (
    <BodySTY>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <BusOptions
            formType={formType}
            updateFormType={(type: string) => {
              setFormType(type);
            }}
          />
          <BusEditForm
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
            formType={formType}
          />
        </>
      )}
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
