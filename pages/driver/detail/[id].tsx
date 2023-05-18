import React, { useState, useEffect } from "react";
import { insertDriverInfo } from "@services/driver/createDriver";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";

import { DriverInfoTypes } from "@contents/driver/driver.typing";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import DriverEditForm from "@contents/Driver/DriverEditForm";
import { BodySTY } from "./style";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  const router = useRouter();
  // const {
  //   register,
  //   formState: { errors },
  //   control,
  //   handleSubmit
  // } = useForm<DriverInfoTypes>({
  //   // defaultValues: async () => getDefaultValuesHandler()
  //   defaultValues: async () => void
  // });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mainFilter, updateMainFilter } = useDriverStore();
  const [currentUserInfo, setCurrentUserInfo] = useState<DriverInfoTypes>({});

  useEffect(() => {
    updateMainFilter("Detail");
  }, [updateMainFilter]);

  useEffect(() => {
    console.log("start getDriverById");
    getDriverById(userId).then((res) => {
      const updatedCurrentUserInfo = res.info;
      if (!updatedCurrentUserInfo) {
        console.log("查無此使用者");
        router.push("/driver");
      }
      console.log("updatedCurrentUserInfo:", updatedCurrentUserInfo);
      setCurrentUserInfo(updatedCurrentUserInfo);
    });
  }, [router]);
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
    <BodySTY>
      <DriverEditForm
        userId={userId}
        currentUserInfo={currentUserInfo}
        submitForm={asyncSubmitForm}
        // onCancel={cancelFormHandler}
        formType={mainFilter}
        // errors={errors}
        // handleSubmit={handleSubmit}
        // register={register}
        // control={control}
        isDisabled={true}
      />
    </BodySTY>
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
