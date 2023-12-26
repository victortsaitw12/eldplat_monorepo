import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";

import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { BodySTY } from "./style";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import { toaster, Pane, Spinner } from "evergreen-ui";
import MaitenanceDetail from "@contents/Maintenance/Detail";

import { getMaintenanceById } from "@services/maintenance/getMaintenanceById";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ maitenanceNo }) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [maintenanceData, setMaintenanceData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data: any = await getMaintenanceById(maitenanceNo);
        if (!data.info) {
          toaster.warning("查無此使用者，請重新選擇");
          router.push("/maintenance");
        }
        setMaintenanceData(data);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [maitenanceNo]);

  const renderContent = (
    <MaitenanceDetail isEdit={isEdit} maitenanceData={maintenanceData} />
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
    router.push(`/maintenance/detail/${maitenanceNo}?editPage=edit`);
  };

  const handleView = () => {
    router.push(`/maintenance/detail/${maitenanceNo}?editPage=view`);
  };

  const handleReturn = () => {
    router.push("/maintenance/mission");
  };

  useEffect(() => {
    setIsEdit(editPage === "edit" ? true : false);
  }, [editPage]);

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
      {!isLoading && maintenanceData ? renderContent : renderLoadingSpinner}
    </BodySTY>
  );
};

interface Props {
  maitenanceNo: string;
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
      maitenanceNo: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
