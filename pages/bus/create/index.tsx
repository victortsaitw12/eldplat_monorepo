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
import { useForm, FormProvider } from "react-hook-form";
import { BusDataTypes } from "@contents/Bus/BusEditForm/busDefaultData";
import { getBusDefaultData } from "@contents/Bus/BusEditForm/busDefaultData";
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formType, setFormType] = useState("Detail");
  const defaultValues = getBusDefaultData({
    type: "03",
    status: "01",
    ownership: "01",
    primary_meter: "1",
    fuel_unit: "1",
    measurement_units: "1",
    estimated_resale: "100"
  });
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<BusDataTypes>({
    defaultValues
  });
  /**
   * : {
      settings: {
        primary_meter: "1",
        fuel_unit: "1",
        measurement_units: "1"
      }
    }
   * 
   */
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
            errors={errors}
          />
          <BusEditForm
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
            formType={formType}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
