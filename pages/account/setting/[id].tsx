import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import ChangeePasswordInfoBox from "@contents/Account/ChangePasswordInfoBox";
import {
  getOneAccount,
  I_AccountDetailItem
} from "@services/account/getOneAccount";
import ControlBar from "@contents/Account/ControlBar";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();

  //------ functions ------//
  const handleSave = (path: string) => {
    console.log("handleSave");
  };
  const handleCancel = (path: string) => {
    console.log("handleCancel");
  };
  const handleEdit = () => {
    console.log("handleEdit");
  };

  // ------- useEffect ------- //

  return (
    <>
      <ControlBar
        isEdit={true}
        handleNavigation={handleSave}
        handleEdit={handleEdit}
      />
      <BodySTY>
        <ChangeePasswordInfoBox />
      </BodySTY>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      driverNo: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

interface Props {
  driverNo: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
