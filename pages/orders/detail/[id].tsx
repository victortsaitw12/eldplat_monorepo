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

const mainTabsArray = [
  { id: 1, label: "訂單內容", value: "1" },
  { id: 2, label: "修改紀錄", value: "2" },
  { id: 3, label: "任務派遣", value: "3" },
  { id: 4, label: "相關文件", value: "4" }
];

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ orderId }) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const { mainFilter, updateMainFilter } = useOrderStore();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);

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

  const DUMMY_DATA = [
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
                    { label: "已報價", date: "", status: "pending" },
                    { label: "接受報價", date: "", status: "pending" },
                    { label: "訂單成立", date: "", status: "pending" },
                    { label: "建立任務", date: "", status: "pending" },
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
                  thirdBtnText={isEdit ? "" : "送出報價"}
                  thirdBtnOnClick={isEdit ? handleView : handleEdit}
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
