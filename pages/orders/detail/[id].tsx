import React, { useEffect, useRef, useState, ReactNode, use } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/MainLayout";
import { updateBus } from "@services/bus/updateBus";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import TabsWrapper from "@layout/TabsWrapper";
import { useOrderStore } from "@contexts/filter/orderStore";
import LoadingSpinner from "@components/LoadingSpinner";
import BusDetail from "@contents/Bus/BusDetail";
import { getBusById } from "@services/bus/getBusById";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import ProgressList from "@components/ProgressList";
import IconBtn from "@components/Button/IconBtn";
import OrderDetail from "@contents/Orders/OrderDetail";
import OrderContent from "@contents/Orders/OrderContent";
import LightBox from "@components/Lightbox";
import InfoItem from "@components/InfoCard/InfoItem";
import { Select } from "evergreen-ui";
import CustomTextInputField from "@components/CustomTextInputField";
import Table from "@components/Table/Table";

const mainTabsArray = [
  { id: 1, label: "訂單內容", value: "1" },
  { id: 2, label: "修改紀錄", value: "2" },
  { id: 3, label: "任務派遣", value: "3" },
  { id: 4, label: "相關文件", value: "4" }
];

interface Order {
  id: string;
  status: number;
}

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ orderId }) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const { mainFilter, updateMainFilter } = useOrderStore();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [showModal, setShowModal] = useState(false);

  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };

  const handleEdit = () => {
    router.push(`/orders/detail/${orderId}?editPage=edit`);
  };

  const handleView = () => {
    router.push(`/orders/detail/${orderId}?editPage=view`);
  };

  const handleReturn = () => {
    router.push("/orders");
  };

  const handleCopy = () => {
    console.log("click copy button");
  };

  const DUMMY_DATA: Order[] = [
    { id: "ORD202310310001", status: 0 },
    {
      id: "ORD202310310002",
      status: 2
    },
    {
      id: "ORD202310310003",
      status: 4
    }
  ];
  const currentOrderStatus = DUMMY_DATA.find(
    (obj: Order) => obj.id === orderId
  );

  function submitButton() {
    const buttonText = [
      { status: 0, text: "送出報價" },
      { status: 2, text: "收款回報" },
      { status: 4, text: "建立任務" }
    ];
    return buttonText.find((btn) => btn.status === currentOrderStatus?.status)
      ?.text;
  }

  function makeLightBoxContent() {
    const quotation = {
      title: "確定要送出報價？",
      content: "報價將傳送給客人。",
      btnText: "送出報價"
    };
    const payment = {
      title: "收款回報",
      content: (
        <>
          <InfoItem
            isEdit={true}
            direction="column"
            item={{
              listClassName: "fb-100",
              req: true,
              label: "訂金收款狀態",
              bold: true,
              value: (
                <Select className="select-full">
                  <option value="foo">請選擇</option>
                </Select>
              )
            }}
          ></InfoItem>
          <InfoItem
            isEdit={true}
            direction="column"
            item={{
              listClassName: "fb-100 mt-2",
              req: true,
              label: "帳戶末五碼",
              bold: true,
              value: (
                <CustomTextInputField
                  placeholder="請輸入帳戶末五碼"
                  width="100%"
                  className="input-full"
                />
              )
            }}
          ></InfoItem>
          <InfoItem
            isEdit={true}
            direction="column"
            item={{
              listClassName: "fb-100 mt-2",
              req: true,
              label: "統一編號（有需要再填寫）",
              bold: true,
              value: (
                <CustomTextInputField
                  placeholder="請輸入統一編號"
                  width="100%"
                  className="input-full"
                />
              )
            }}
          ></InfoItem>
        </>
      ),
      btnText: "確認"
    };
    const task = {
      title: "確定要建立任務？",
      content: (
        <Table
          titles={["訂單編號", "項目", "用車日期"]}
          data={[
            {
              "0": <a href="">{orderId}</a>,
              "1": "客製包車",
              "2": "2023-11-22（三） ~ 2023-11-24（五）"
            }
          ]}
          className="header-table"
        ></Table>
      ),
      btnText: "建立任務"
    };
    const statusContent = [
      { status: 0, content: quotation },
      { status: 2, content: payment },
      { status: 4, content: task }
    ];
    return statusContent.find(
      (content) => content.status === currentOrderStatus?.status
    )?.content;
  }

  useEffect(() => {
    setIsEdit(editPage === "edit" ? true : false);
  }, [editPage]);

  return (
    <BodySTY>
      {!isEdit ? (
        <>
          <ControlBar hasShadow>
            <div className="header">
              <div className="item">
                <DataOverview
                  title={orderId}
                  subtitle={
                    <IconBtn tip="複製" type="copy" onClick={handleCopy} />
                  }
                  infoArray={[
                    <p key={"head-info-1"} className="head-info-1">
                      客製包車
                    </p>,
                    <p key={"head-info-2"} className="head-info-2">
                      2023-11-22（三）~2023-11-24（五）
                    </p>
                  ]}
                  hasImage={false}
                />
              </div>

              <div className="item">
                <ProgressList
                  dataLists={[
                    { label: "詢價中", date: "11/01 10:00", status: "ok" },
                    {
                      label: "已報價",
                      date: "",
                      status:
                        orderId === "ORD202310310002" ||
                        orderId === "ORD202310310003"
                          ? "ok"
                          : "pending"
                    },
                    {
                      label: "接受報價",
                      date: "",
                      status:
                        orderId === "ORD202310310002" ||
                        orderId === "ORD202310310003"
                          ? "ok"
                          : "pending"
                    },
                    {
                      label: "已付訂金",
                      date: "",
                      status:
                        orderId === "ORD202310310002" ||
                        orderId === "ORD202310310003"
                          ? "ok"
                          : "pending"
                    },
                    {
                      label: "訂單成立",
                      date: "",
                      status: orderId === "ORD202310310003" ? "ok" : "pending"
                    },
                    {
                      label: "建立任務",
                      date: "",
                      status: orderId === "ORD202310310003" ? "ok" : "pending"
                    },
                    { label: "已付尾款", date: "", status: "pending" },
                    { label: "結案", date: "", status: "pending" }
                  ]}
                />
              </div>
              <div className="item">
                <ButtonSet
                  isEdit={isEdit}
                  primaryDisable={false}
                  secondaryBtnText={isEdit ? "取消" : "回列表"}
                  secondaryBtnOnClick={isEdit ? handleView : handleReturn}
                  primaryBtnText={isEdit ? "儲存" : "編輯"}
                  primaryBtnOnClick={isEdit ? handleView : handleEdit}
                  thirdBtnText={isEdit ? "" : submitButton()}
                  thirdBtnOnClick={
                    isEdit ? handleView : () => setShowModal(true)
                  }
                />
              </div>
            </div>
          </ControlBar>
          <TabsWrapper
            onChangeTab={changeMainFilterHandler}
            mainFilter={mainFilter}
            mainFilterArray={mainTabsArray}
          >
            <OrderContent
              isEdit={isEdit}
              orderId={orderId}
              formType={mainFilter}
            />
          </TabsWrapper>
          <LightBox
            title={makeLightBoxContent()?.title}
            onConfirm={() => {
              setShowModal(false);
            }}
            onCancel={() => {
              setShowModal(false);
            }}
            isOpen={showModal}
            confirmBtnText={makeLightBoxContent()?.btnText}
            fullWidth={true}
          >
            {makeLightBoxContent()?.content}
          </LightBox>
        </>
      ) : (
        <OrderContent isEdit={isEdit} orderId={orderId} formType={mainFilter} />
      )}
    </BodySTY>
  );
};

interface Props {
  orderId: string;
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
      orderId: params ? params.id : ""
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
