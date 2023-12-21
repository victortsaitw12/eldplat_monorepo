import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Group } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_DriverInfo } from "@contents/Driver/driver.type";
import { getLayout } from "@layout/MainLayout";

import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import InfoCard from "@components/InfoCard";
import NoData from "@components/NoData";
import InputGenerator from "@components/InputGenerator";
import SubTabsWrapper from "@layout/SubTabsWrapper";
import PureInfoCard from "@components/InfoCard/PureStyle";
import FormGenerator from "@components/FormGenerator";

const subTabsArray = [
  { id: 1, label: "車輛識別", value: "1" },
  { id: 2, label: "分類", value: "2" }
];

const Page: NextPageWithLayout<InferGetServerSidePropsType<never>> = ({
  driverNo
}) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [currentTab, setCurrentTab] = useState<string>("1");

  useEffect(() => {
    setIsEdit(editPage === "edit" || false);
    // setIsEdit(true);
  }, [editPage]);

  const BrandInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      // value: <NoData className={"no-data"} text="尚無建立項目" />,
      value: (
        <ul className={"list-wrapper"}>
          <li>Volove</li>
          <li>Hino</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const ModelInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>360</li>
          <li>486</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const TypeInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>大巴</li>
          <li>中巴</li>
          <li>小巴</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const AreaInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li className="list-item">
            <span className="list-title">內湖停車場</span>
            <span className="list-content">
              114 台灣 台北市 內湖區石潭路151號
            </span>
          </li>
          <li className="list-item">
            <span className="list-title">台中停車場</span>
            <span className="list-content">
              114 台灣 台中市 中區自由路100號
            </span>
          </li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const TeamInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>第一車隊</li>
          <li>第二車隊</li>
          <li>第三車隊</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const changeTabHandler = (value: string) => {
    setCurrentTab(value);
  };

  const handleEdit = () => {
    router.push("/bus_management?editPage=edit");
  };

  const handleView = () => {
    router.push("/bus_management?editPage=view");
  };

  const handleReturn = () => {
    router.push("/bus");
  };

  return (
    <BodySTY>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          isEdit={false}
          primaryDisable={false}
          secondaryBtnText={isEdit ? "取消" : "回列表"}
          secondaryBtnOnClick={isEdit ? handleView : handleReturn}
          primaryBtnText={isEdit ? "儲存" : "編輯"}
          primaryBtnOnClick={isEdit ? handleView : handleEdit}
        />
      </ControlBar>
      <Pane className={"wrapper"}>
        <SubTabsWrapper
          tabsArray={subTabsArray}
          currentTab={currentTab}
          onChangeTab={changeTabHandler}
        />
        {currentTab === "1" && (
          <Pane className="main-column">
            <InfoCard isEdit={isEdit} infoData={BrandInFo} infoTitle={"品牌"} />
            <InfoCard isEdit={isEdit} infoData={ModelInFo} infoTitle={"車型"} />
            <InfoCard isEdit={isEdit} infoData={TypeInFo} infoTitle={"車種"} />
          </Pane>
        )}
        {currentTab === "2" && (
          <Pane className="main-column">
            <Pane className="fb-66">
              {isEdit ? (
                <PureInfoCard infoTitle={"派駐地"} isEdit={true}>
                  <FormGenerator />
                </PureInfoCard>
              ) : (
                <InfoCard
                  isEdit={isEdit}
                  infoData={AreaInFo}
                  infoTitle={"派駐地"}
                />
              )}
            </Pane>
            <Pane className="fb-33">
              <InfoCard
                isEdit={isEdit}
                infoData={TeamInFo}
                infoTitle={"車隊"}
              />
            </Pane>
          </Pane>
        )}
      </Pane>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
