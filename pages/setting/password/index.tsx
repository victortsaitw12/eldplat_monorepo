import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { NextPageWithLayout } from "next";
import { InlineAlert, toaster } from "evergreen-ui";
import { BodySTY } from "./style";

import { getLayout } from "@layout/MainLayout";
import ChangeePasswordInfoBox from "@contents/setting/ChangePasswordInfoBox";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);

  //------ functions ------//
  const handleCancel = () => {
    toaster.notify("選擇取消修改，請繼續操作");
  };
  const handleConfirm = () => {
    submitRef.current && submitRef.current.click();
  };

  const asyncSubmitForm = async (data: any) => {
    // console.log("🔜 data:", data);
    toaster.success("修改密碼成功，系統將自動登出");
    setTimeout(() => {
      router.push("/login");
      signOut();
    }, 1000);
  };

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
        <ChangeePasswordInfoBox
          asyncSubmitForm={asyncSubmitForm}
          submitRef={submitRef}
        />
        <InlineAlert intent="none" marginBottom={16} className="inlineAlert">
          按下儲存按鈕後，系統將自動登出{" "}
        </InlineAlert>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
