import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner } from "evergreen-ui";
import { BodySTY } from "./style";

import LightBox from "@components/Lightbox";
import LabelSecondaryButton from "@components/Button/Secondary/Label";
import LabelButton from "@components/Button/Primary/Label";

import { I_DriverInfo } from "@contents/Driver/driver.type";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import { updateDriver } from "@services/driver/updateDriver";
import DriverDetail from "@contents/Driver/Detail";
import TabsWrapper from "@layout/TabsWrapper";
import DataOverview from "@components/DataOverview";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";

const mainFilterArray = [
  { id: 1, label: "基本資料", value: "1" },
  { id: 2, label: "教育訓練", value: "2" },
  { id: 3, label: "健康紀錄", value: "3" },
  { id: 4, label: "修改紀錄", value: "4" }
];

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ driverNo }) => {
  // ------- variables + useState ------- //
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [driverData, setDriverData] = useState<I_DriverInfo>();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const { mainFilter, updateMainFilter } = useDriverStore();
  const [isLightOpen, setLightOpen] = useState(false);
  const [switchTabValue, setSwitchTabValue] = useState<string | null>(null);

  // ------- useEffect ------- //
  useEffect(() => {
    updateMainFilter("1");
  }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data: I_DriverInfo = await getDriverById(driverNo);
        if (!data.info) {
          toaster.warning("查無此使用者，請重新選擇");
          router.push("/driver");
        }
        setDriverData(data);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [driverNo]);

  // ------- function ------- //
  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getDriverById(driverNo);
      setDriverData(data);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  }, [driverNo]);

  const switchTabHandler = (value: string) => {
    if (mainFilter === "1" && isEdit) {
      setLightOpen(true);
      setSwitchTabValue(value);
    } else {
      changeMainFilterHandler(value);
    }
  };

  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };

  const asyncSubmitForm = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await updateDriver(driverNo, data);
      if (res.statusCode === "200") {
        await refetch();
        toaster.success("成功更新駕駛履歷", {
          duration: 1.5
        });
        setIsEdit(false);
      }
      //router.push("/driver");
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
    setIsLoading(false);
  };

  const onCancelHandler = () => {
    router.push("/driver");
  };

  const renderContent = (
    <TabsWrapper
      onChangeTab={switchTabHandler}
      mainFilter={mainFilter}
      mainFilterArray={mainFilterArray}
      isEdit={isEdit}
      onSave={() => submitRef.current?.click()}
      onEdit={() => setIsEdit(true)}
      onClose={onCancelHandler}
    >
      <DriverDetail
        isEdit={isEdit}
        submitRef={submitRef}
        asyncSubmitForm={asyncSubmitForm}
        driverData={driverData}
        formType={mainFilter}
        refetch={refetch}
        driverNo={driverNo}
      />
    </TabsWrapper>
  );

  const renderLoadingSpinner = (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
      style={{ padding: 5 }}
    >
      <Spinner />
    </Pane>
  );

  const handleEdit = () => {
    router.push(`/driver/detail/${driverNo}?editPage=edit`);
  };

  const handleView = () => {
    router.push(`/driver/detail/${driverNo}?editPage=view`);
  };

  const handleReturn = () => {
    router.push("/driver");
  };

  useEffect(() => {
    setIsEdit(editPage === "edit" ? true : false);
  }, [editPage]);

  return (
    <BodySTY>
      <ControlBar>
        <DataOverview data={driverData?.info} />
        <ButtonSet
          isEdit={isEdit}
          primaryDisable={false}
          secondaryBtnText={isEdit ? "取消" : "回列表"}
          secondaryBtnOnClick={isEdit ? handleView : handleReturn}
          primaryBtnText={isEdit ? "儲存" : "編輯"}
          primaryBtnOnClick={isEdit ? handleView : handleEdit}
        />
      </ControlBar>
      {!isLoading && driverData ? renderContent : renderLoadingSpinner}
      <LightBox
        title="確定要離開嗎?"
        isOpen={isLightOpen}
        handleCloseLightBox={() => setLightOpen((prev) => false)}
      >
        如果你現在離開，將會遺失未儲存的資料。
        <Pane style={{ display: "flex", justifyContent: "flex-end" }}>
          <LabelSecondaryButton
            style={{
              width: "unset",
              fontSize: "12px",
              fontWeight: "600"
            }}
            onClick={(e) => {
              e.preventDefault();
              setLightOpen((prev) => false);
            }}
            text="取消"
          />
          <LabelButton
            style={{
              width: "unset",
              fontSize: "12px"
            }}
            onClick={(e) => {
              e.preventDefault();
              switchTabValue && updateMainFilter(switchTabValue);
              setTimeout(() => setLightOpen(false), 500);
            }}
            text="確定離開"
          />
        </Pane>
      </LightBox>
    </BodySTY>
  );
};

interface Props {
  driverNo: string;
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
      driverNo: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
