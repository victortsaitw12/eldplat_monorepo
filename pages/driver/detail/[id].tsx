import React, { useState, useEffect } from "react";
import { insertDriverInfo } from "@services/driver/createDriver";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { BodySTY } from "./style";

import { I_driverInfo, DUMMY_DRIVERINFO } from "@contents/driver/driver.typing";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import DriverEditForm from "@contents/Driver/DriverEditForm";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import HealthFirst from "@contents/Driver/DriverEditForm/SubForm/HealthFirst";
// import HealthFirst from "@contents/Employee/HealthFirst";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  // ------- variables + useState ------- //
  const router = useRouter();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mainFilter, updateMainFilter, subFilter, updateSubFilter, initializeSubFilter } = useDriverStore();
  const [currentUserInfo, setCurrentUserInfo] = useState<I_driverInfo>({});
  const mainFilterArray = [
    { id: 1, label: "駕駛資訊", value: "info" },
    { id: 2, label: "健康紀錄", value: "health" }
  ];

  // ------- useEffect ------- //
  useEffect(() => {
    updateMainFilter("info");
  }, [updateMainFilter]);

  useEffect(() => {
    console.log("start getDriverById");
    // 暫代資料
    setCurrentUserInfo(DUMMY_DRIVERINFO);
    // TODO 接API
    // getDriverById(userId).then((res) => {
    //   const updatedCurrentUserInfo = res.info;
    //   if (!updatedCurrentUserInfo) {
    //     console.log("查無此使用者");
    //     router.push("/driver");
    //   }
    //   console.log("updatedCurrentUserInfo:", updatedCurrentUserInfo);
    //   setCurrentUserInfo(updatedCurrentUserInfo);
    // });
  }, [router]);

  // ------- function ------- //
  const fakeSubmit = (data: any) => console.log("data", data);

  const changeMainFilterHandler = (value: string) => updateMainFilter(value);

  const asyncSubmitForm = async (data: any) => {
    setIsLoading(true);
    try {
      await insertDriverInfo(data);
      console.log("新增駕駛成功");
      router.push("/driver");
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
          onSave={handleSubmit(fakeSubmit)}
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
              isDisabled={true}
            />
          )}
          {mainFilter === "health" && (
            // <FilterWrapper
            //   updateFilter={updateSubFilter}
            //   resetFilter={() => {
            //     initializeSubFilter();
            //   }}
            //   filter={subFilter}
            // >
            <HealthFirst
              setInsertData={(data) => {
                console.log(data);
              }}
              handleEmployeeChange={(e) => {
                console.log(e);
              }}
            />
            // </FilterWrapper>
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
