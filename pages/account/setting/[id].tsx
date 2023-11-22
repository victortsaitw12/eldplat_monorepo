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
import { ModalContext } from "@contexts/ModalContext/ModalProvider";
import RoleInfoBox from "@contents/Account/RoleInfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();

  //------ functions ------//
  const handleSave = (path: string) => {
    console.log("handleSave");
  };
  const handleCancel = (path: string) => {
    console.log("handleCancel");
  };

  // ------- useEffect ------- //

  return (
    <>
      <ControlBar isEdit={true} handleNavigation={handleSave} />
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
