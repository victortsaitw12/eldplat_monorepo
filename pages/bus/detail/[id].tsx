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
import TabsWrapper from "@layout/TabsWrapper";
import { useBusStore } from "@contexts/filter/busStore";
import LoadingSpinner from "@components/LoadingSpinner";
import BusDetail from "@contents/Bus/BusDetail";
import { getBusById } from "@services/bus/getBusById";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import { DotIcon, toaster } from "evergreen-ui";
import SecondaryBtn from "@components/Button/Secondary/Label";
import LightBox from "@components/Lightbox";

const mainTabsArray = [
  { id: 1, label: "車輛明細", value: "1" },
  { id: 2, label: "維保計劃", value: "2" },
  { id: 3, label: "車上設備", value: "3" },
  { id: 4, label: "油耗紀錄", value: "4" },
  { id: 5, label: "修改紀錄", value: "5" }
];

const dataOverviewArray = [
  "大巴",
  "43 客座",
  "車齡 1 年",
  "內湖停車場",
  "第一組"
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
  const [busDefaultData, setBusDefaultData] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);
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

  const fetchBusData = async (isCanceled: boolean, busId: string) => {
    try {
      const res = await getBusById(busId);
      setBusDefaultData(res);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchBusData(false, busId);
  }, [router]);

  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("asyncSubmitForm", data);
    try {
      await updateBus(data);
      setIsEdit(false);
    } catch (e: any) {
      alert(e.message);
      console.log(e);
    }
    router.push("/bus/detail/" + busId + "?editPage=view");
    setLoading(false);
  };

  const fetchDDL = async (dsph_group?: string) => {
    try {
      const res = await getCreateBusOptions(dsph_group);
      if (res.statusCode === "200") {
        setOptions(res.dataList[0]);
      } else {
        throw new Error(`${res.resultString}`);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handleEdit = () => {
    router.push(`/bus/detail/${busId}?editPage=edit`);
  };

  const handleReturn = () => {
    router.push("/bus");
  };

  const handleView = () => {
    router.push(`/bus/detail/${busId}?editPage=view`);
  };

  const handleSave = () => {
    router.push(`/bus/detail/${busId}?editPage=view`);
    toaster.success("儲存成功");
  };

  const handleCancel = () => {
    setLightOpen(true);
  };

  const handleLightBoxConfirm = () => {
    router.push(`/bus/detail/${busId}?editPage=view`);
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
      <ControlBar hasShadow>
        <DataOverview
          title="KAA-001 雄雄獅頭號"
          subtitle={
            <>
              <DotIcon size={12} color="success" /> 待機中
            </>
          }
          infoArray={dataOverviewArray}
          hasImage={false}
        />
        {mainFilter === "3" || mainFilter === "5" ? (
          <SecondaryBtn text="回列表" onClick={handleReturn}/>
        ) : (
          <ButtonSet
            isEdit={isEdit}
            primaryDisable={false}
            secondaryBtnText={isEdit ? "取消" : "回列表"}
            secondaryBtnOnClick={isEdit ? handleCancel : handleReturn}
            primaryBtnText={isEdit ? "儲存" : "編輯"}
            primaryBtnOnClick={isEdit ? handleSave : handleEdit}
          />
        )}
      </ControlBar>
      <TabsWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainTabsArray}
      >
        <BusDetail
          isEdit={isEdit}
          busId={busId}
          busDefaultData={busDefaultData}
          submitRef={submitRef}
          asyncSubmitForm={asyncSubmitForm}
          formType={mainFilter}
          busOptions={options}
          fetchDDL={fetchDDL}
        />
      </TabsWrapper>
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
