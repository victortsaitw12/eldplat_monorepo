import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { InlineAlert } from "evergreen-ui";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import ChangeePasswordInfoBox from "@contents/Account/ChangePasswordInfoBox";
import {
  getOneAccount,
  I_AccountDetailItem
} from "@services/account/getOneAccount";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();

  //------ functions ------//
  const handleSave = (path: string) => {
    console.log("handleSave");
  };
  const handleCancel = () => {
    console.log("handleCancel");
  };
  const handleConfirm = () => {
    console.log("handleConfirm");
  };
  const handleEdit = () => {
    console.log("handleEdit");
  };

  // ------- useEffect ------- //

  return (
    <>
      <ControlBar hasShadow={true} flexEnd={true}>
        <ButtonSet
          isEdit={true}
          secondaryBtnOnClick={handleCancel}
          primaryBtnOnClick={handleConfirm}
        />
      </ControlBar>
      <BodySTY>
        <ChangeePasswordInfoBox />
        <InlineAlert intent="none" marginBottom={16}>
          按下儲存按鈕後，系統將自動登出{" "}
        </InlineAlert>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
