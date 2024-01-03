import React, { useEffect, useRef, useState, ReactNode } from "react";
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
import { useBusStore } from "@contexts/filter/busStore";
import LoadingSpinner from "@components/LoadingSpinner";
import BusDetail from "@contents/Bus/BusDetail";
import { getBusById } from "@services/bus/getBusById";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import CreateDetail from "@contents/Bus/BusDetail/CreateDetail";
import SubTabsWrapper from "@layout/SubTabsWrapper";
import { Pane, toaster } from "evergreen-ui";
import LightBox from "@components/Lightbox";


const subTabsArray = [
  { id: 1, label: "明細", value: "1" },
  { id: 2, label: "維保", value: "2" },
  { id: 4, label: "財務", value: "3" },
  { id: 5, label: "規格", value: "4" }
];

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ busId }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useBusStore();
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [currentTab, setCurrentTab] = useState<string>("1");
  const [isLightOpen, setLightOpen] = useState(false);

  // useEffect(() => {
  //   updateMainFilter("1");
  //   setLoading(true);
  //   getCreateBusOptions()
  //     .then((res) => {
  //       setOptions(res.dataList[0]);
  //       return getBusById(busId);
  //     })
  //     .then((res) => {
  //       setBusDefaultData(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [router]);

  const changeTabHandler = (value: string) => {
    setCurrentTab(value);
  };

  const handleSave = () => {
    router.push("/bus/detail/1?editPage=view");
    toaster.success("儲存成功");
  };

  const handleCancel = () => {
    setLightOpen(true);
  };

  const handleLightBoxConfirm = () => {
    router.push("/bus");
    setLightOpen(false);
  };

  useEffect(() => {
    setIsEdit(editPage === "edit" ? true : false);
  }, [editPage]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BodySTY>
      <ControlBar hasShadow flexEnd>
        <ButtonSet
          isEdit={isEdit}
          primaryDisable={true}
          secondaryBtnText={"取消"}
          secondaryBtnOnClick={handleCancel}
          primaryBtnText={"儲存"}
          primaryBtnOnClick={handleSave}
        />
      </ControlBar>
      <Pane className={"main-column"}>
        <SubTabsWrapper
          tabsArray={subTabsArray}
          currentTab={currentTab}
          onChangeTab={changeTabHandler}
        />
        <CreateDetail
          currentTab={currentTab}
          isEdit={true}
          className="details"
        />
      </Pane>
      <LightBox
        title="確定要離開嗎?"
        isOpen={isLightOpen}
        handleCloseLightBox={() => setLightOpen(false)}
        onConfirm={handleLightBoxConfirm}
        onCancel={() => setLightOpen(false)}
      >
        如果你現在離開，將會遺失未儲存的資料。
      </LightBox>
    </BodySTY>
  );
};

interface Props {
  busId: string;
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
      busId: params ? params.id : ""
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
