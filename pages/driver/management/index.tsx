import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import ControlBar from "@components/ControlBar";
import InfoCard from "@components/InfoCard";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import CustomTextArea from "@components/CustomTextArea";
import NewUploader from "@components/NewUploader";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomDatePicker from "@components/CustomDatePicker";
import TagGenerator from "@components/TagGenerator";
import Uploader from "@components/Uploader";
import StarRate from "@components/StarRate";

import {
  Select,
  TextInput,
  Textarea,
  FileUploader,
  FileCard,
  SmallPlusIcon,
  Pane,
  InlineAlert,
  TextInputField,
  toaster
} from "evergreen-ui";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  React.useEffect(() => {
    console.log("hello");
  }, []);

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  return (
    <>
      <ControlBar
        // isEdit={editPage === "edit"}
        isEdit={true}
        primaryDisable={true}
      />
      <BodySTY>
        <Pane className={"main-column"}></Pane>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
