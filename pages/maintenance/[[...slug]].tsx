import React, { ReactNode, useEffect } from "react";
import { 
    NextPageWithLayout 
} from "next";
import TabsWrapper from "@layout/TabsWrapper";
import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import MaintenanceMissionList from "@contents/Maintenance/Mission";
import MaintenanceRecordList from "@contents/Maintenance/Record";
import MaintenanceNoticeList from "@contents/Maintenance/Notice";
import { useRouter } from "next/router";

const mainFilterArray = [
  { id: 1, label: "通知", value: "notice" },
  { id: 2, label: "任務", value: "mission" },
  { id: 3, label: "結案", value: "record" },
];

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const currentPath = router.query.slug;

  const { mainFilter, updateMainFilter } = useMaintenanceStore();

  const switchTabHandler = (value: string) => {
    updateMainFilter(value);
    // history.pushState({}, "", "/maintenance/" + value);
    router.push("/maintenance/" + value)
  };

  useEffect(() => {
  if (currentPath && currentPath.length > 0) {
    updateMainFilter(currentPath[0]);
  }
  }, [currentPath]);

  return (
    <BodySTY>
      <TabsWrapper
        onChangeTab={switchTabHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainFilterArray}
      >
        {mainFilter == "notice" && <div><MaintenanceNoticeList /></div>}
        {mainFilter == "mission" && <div><MaintenanceMissionList /></div>}
        {mainFilter == "record" && <div><MaintenanceRecordList /></div>}
      </TabsWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default Page;
