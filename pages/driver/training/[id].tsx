import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner, Select } from "evergreen-ui";
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
import InfoCard from "@components/InfoCard";
import CustomDatePicker from "@components/CustomDatePicker";
import FileCard from "@components/FileCard";
import NewUploader from "@components/NewUploader";
import CustomTextArea from "@components/CustomTextArea";
import CustomTextInputField from "@components/CustomTextInputField";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ driverNo }) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [driverData, setDriverData] = useState<I_DriverInfo>();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);

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

  useEffect(() => {
    setIsEdit(editPage === "edit" || false);
  }, [editPage]);

  const TrainingInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "項目名稱",
      bold: true,
      value: "新人訓練",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "培訓人",
      bold: true,
      value: "李禹晨",
      editEle: <CustomTextInputField placeholder="請輸入培訓人姓名" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "訓練期間",
      bold: true,
      value: "2023-01-01~ 2023-01-09",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "訓練通過日期",
      bold: true,
      value: "2023-01-10",
      editEle: <CustomDatePicker placeholder="請輸入訓練通過日期" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "說明",
      bold: true,
      value: "由公司內部舉辦之新人訓練，凡加入本公司必須參加。",
      editEle: (
        <CustomTextArea
          placeholder={"請輸入備註"}
          data={"由公司內部舉辦之新人訓練，凡加入本公司必須參加。"}
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "附件/相關檔案",
      bold: true,
      value: <FileCard />,
      editEle: <NewUploader isMultiple={true} isEditable={true} />
    }
  ];

  const handleEdit = () => {
    router.push(`/driver/training/${driverNo}?editPage=edit`);
  };

  const handleView = () => {
    router.push(`/driver/training/${driverNo}?editPage=view`);
  };

  return (
    <BodySTY>
      <ControlBar>
        <DataOverview data={driverData} />
        <ButtonSet
          isEdit={false}
          primaryDisable={false}
          secondaryBtnText={"回列表"}
          secondaryBtnOnClick={handleView}
          primaryBtnOnClick={handleEdit}
          primaryBtnText={"編輯"}
        />
      </ControlBar>
      {!isLoading && driverData ? (
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={TrainingInFo}
            infoTitle={"教育訓練"}
          />
        </Pane>
      ) : (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={400}
          style={{ padding: 5 }}
        >
          <Spinner />
        </Pane>
      )}
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
