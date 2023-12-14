import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { InlineAlert, toaster } from "evergreen-ui";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import ChangeePasswordInfoBox from "@contents/setting/ChangePasswordInfoBox";
import {
  getOneAccount,
  I_AccountDetailItem
} from "@services/account/getOneAccount";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import { passwordValidation } from "@utils/hookFormValidation";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);

  //------ functions ------//
  const handleSave = (path: string) => {
    console.log("handleSave");
  };
  const handleCancel = () => {
    console.log("handleCancel");
    toaster.notify("選擇取消修改，請繼續操作");
  };
  const handleConfirm = () => {
    submitRef.current && submitRef.current.click();
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🔜 data:", data);
    const checkCurreuntPassword = true;
    const checkNewPassword = passwordValidation(data.new);
    const checkConfirmPassword = data.new === data.confirm;

    // if (!checkCurreuntPassword) {
    //   toaster.danger("目前密碼輸入錯誤");
    //   return;
    // }
    // if (!checkNewPassword) {
    //   toaster.danger("新密碼格式錯誤");
    //   return;
    // }
    // if (!checkConfirmPassword) {
    //   toaster.danger("再次輸入密碼不一致");
    //   return;
    // }
    toaster.success("修改密碼成功，系統將自動登出");
    setTimeout(() => {
      router.push("/");
      signOut();
    }, 1000);
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
