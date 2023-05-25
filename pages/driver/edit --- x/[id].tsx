import React, { useState, useEffect } from "react";
import { insertDriverInfo } from "@services/driver/createDriver";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster } from "evergreen-ui";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { BodySTY } from "./style";

import { I_driverInfo, DUMMY_DRIVERINFO } from "@contents/driver/driver.typing";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import DriverEditForm from "@contents/Driver/DriverEditForm";
import TableWrapper from "@layout/TableWrapper";
import HealthFirst from "@contents/Driver/DriverEditForm/SubForm/HealthFirst";
import { updateDriver } from "@services/driver/updateDriver";
// import HealthFirst from "@contents/Employee/HealthFirst";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  // ------- variables + useState ------- //
  const router = useRouter();
  const [currentUserInfo, setCurrentUserInfo] = useState<I_driverInfo>({});

  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm({
    defaultValues: currentUserInfo
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mainFilter, updateMainFilter } = useDriverStore();
  const mainFilterArray = [
    { id: 1, label: "駕駛資訊", value: "info" },
    { id: 2, label: "健康紀錄", value: "health" }
  ];

  // ------- useEffect ------- //
  useEffect(() => {
    updateMainFilter("info");
  }, [updateMainFilter]);

  useEffect(() => {
    setIsLoading(true);
    getDriverById(userId).then((res) => {
      const updatedCurrentUserInfo = res.info;
      if (!updatedCurrentUserInfo) {
        console.log("查無此使用者");
        router.push("/driver");
      }
      setIsLoading(false);
      console.log("edit:", updatedCurrentUserInfo);
      setCurrentUserInfo(updatedCurrentUserInfo);
    });
  }, [userId, router]);

  // ------- function ------- //
  const getDefaultValuesHandler = () => currentUserInfo;
  const fakeSubmit = (data: any) => console.log("fakeSubmit", data);

  const changeMainFilterHandler = (value: string) => updateMainFilter(value);

  const asyncSubmitForm = async (data: any) => {
    console.log("asyncSubmitForm", data);
    setIsLoading(true);
    try {
      await updateDriver(userId, data);
      toaster.success("駕駛履歷更新成功");
      router.push(`/driver/detail/${userId}`);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <FormProvider {...{ register, errors, control, handleSubmit }}>
      <BodySTY>
        <TableWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={mainFilter}
          mainFilterArray={mainFilterArray}
          onSave={handleSubmit(asyncSubmitForm)}
        >
          {mainFilter === "info" && (
            <DriverEditForm
              userId={userId}
              currentUserInfo={currentUserInfo}
              submitForm={asyncSubmitForm}
              register={register}
              // onCancel={cancelFormHandler}
              formType={mainFilter}
              // errors={errors}
              // handleSubmit={handleSubmit}
              // register={register}
              // control={control}
              isDisabled={false}
              isLoading={isLoading}
            />
          )}
          {mainFilter === "health" && (
            <HealthFirst
              setInsertData={(data) => {
                console.log("HealthFirst");
              }}
              handleEmployeeChange={(e) => {
                console.log(e);
              }}
            />
          )}
        </TableWrapper>
      </BodySTY>
    </FormProvider>
  );
};

interface Props {
  userId: string;
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
      userId: params!.id
    }
  };
};

Page.getLayout = getLayout;

export default Page;
