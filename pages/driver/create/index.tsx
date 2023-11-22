import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import ControlBar from "@components/ControlBar";
import InfoBox from "@components/InfoBox";
import InfoCard from "@components/InfoCard";

import Image from "next/image";
import {
  Select,
  TextInput,
  Textarea,
  FileUploader,
  FileCard
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

  const DriverInFo = [
    // {
    //   readonly: false,
    //   req: false,
    //   label: "",
    //   editEle: (
    //     <div className="basic__photo">
    //       <FileUploader
    //         browseOrDragText={() => {
    //           return "Upload";
    //         }}
    //       />
    //     </div>
    //   ),
    //   value: (
    //     <div className="basic__photo">
    //       <FileCard name="upload" />
    //     </div>
    //   )
    // },
    {
      readonly: false,
      req: false,
      label: "使用者姓名",
      editEle: (
        <>
          <TextInput className="required basic__lastName" placeholder="姓氏" />
          <TextInput className="required basic__firstName" placeholder="名字" />
        </>
      ),
      value: "--"
    },
    {
      readonly: false,
      req: true,
      label: "手機",
      editEle: <TextInput className="required" placeholder="請輸入手機" />,
      value: "--"
    },
    {
      readonly: false,
      req: true,
      label: "信箱",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />,
      value: "--"
    }
  ];

  return (
    <>
      <ControlBar
        // isEdit={editPage === "edit"}
        isEdit={true}
        handleNavigation={handleNavigation}
        primaryDisable={true}
      />
      <BodySTY>
        <InfoCard isEdit={false} infoData={DriverInFo} infoTitle="基本資料" />
      </BodySTY>
    </>
  );
};
/*

      
*/
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
