import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner, Select, Group } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_DriverInfo } from "@contents/Driver/driver.type";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import { updateDriver } from "@services/driver/updateDriver";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import InfoCard from "@components/InfoCard";
import CustomDatePicker from "@components/CustomDatePicker";
import FileCard from "@components/FileCard";
import NewUploader from "@components/NewUploader";
import CustomTextArea from "@components/CustomTextArea";
import CustomTextInputField from "@components/CustomTextInputField";

const Page: NextPageWithLayout<InferGetServerSidePropsType<never>> = ({
  driverNo
}) => {
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

  const TeamInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: true,
      label: "",
      bold: true,
      value: "新人訓練",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const AreaInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: true,
      label: "",
      bold: true,
      value: "新人訓練",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const LevelInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: true,
      label: "",
      bold: true,
      value: "新人訓練",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const TrainingInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: true,
      label: "",
      bold: true,
      value: "新人訓練",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const handleEdit = () => {
    router.push(`/driver/training/${driverNo}?editPage=edit`);
  };

  const handleView = () => {
    router.push(`/driver/training/${driverNo}?editPage=view`);
  };

  const handleReturn = () => {
    router.push(`/driver/detail/${driverNo}?editPage=view`);
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
      <Group className="wrapper">
        <Pane className={"main-column"}>
          <InfoCard isEdit={isEdit} infoData={TeamInFo} infoTitle={"車隊"} />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={AreaInFo}
            infoTitle={"派駐區域"}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={LevelInFo}
            infoTitle={"駕駛分級"}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={TrainingInFo}
            infoTitle={"教育訓練項目"}
          />
        </Pane>
      </Group>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
