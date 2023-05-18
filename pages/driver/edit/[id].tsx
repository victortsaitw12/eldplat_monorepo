import React, { useState, useEffect } from "react";
import { getAllDriver } from "@services/driver/getAllDrivers";
import { insertDriverInfo } from "@services/driver/createDriver";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import DriverEditForm from "@contents/Driver/DriverEditForm";
import { BodySTY } from "./style";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ driverID }) => {
  const router = useRouter();
  const [, setLoading] = useState<boolean>(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});
  useEffect(() => {
    const filter = {
      filter_Needed: true
    };
    getAllDriver(filter).then((res) => {
      console.log("getAllDriver", res);
      console.log("res.contentList", res.contentList);
      const updatedCurrentUserInfo = res.contentList.find(
        (item: any) => item.user_No === router.query.id
      );
      if (!updatedCurrentUserInfo) {
        console.log("查無此使用者");
        router.push("/driver");
      }
      console.log("updatedCurrentUserInfo:", updatedCurrentUserInfo);
      setCurrentUserInfo(updatedCurrentUserInfo);
    });
  }, [router]);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      await insertDriverInfo(data);
      console.log("新增駕駛成功");
      router.push("/driver");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <BodySTY>
      <DriverEditForm
        currentUserInfo={currentUserInfo}
        submitForm={asyncSubmitForm}
        driverID={driverID}
      />
    </BodySTY>
  );
};

interface Props {
  driverID: string;
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
      driverID: params!.id
    }
  };
};

Page.getLayout = getLayout;

export default Page;
