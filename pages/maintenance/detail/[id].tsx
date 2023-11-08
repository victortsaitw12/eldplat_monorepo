import React, { useEffect, useState, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TabsWrapper from "@layout/TabsWrapper";
//@services
import { updateMaintenance } from "@services/maintenance/updateMaintenance";
import { getMaintenanceById } from "@services/maintenance/getMaintenanceById";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import MaintenanceDetail from "@contents/maintenance/MaintenanceDetail";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";

const mainFilterArray = [{ id: 1, label: "維保資料", value: "1" }];
//
const Page: NextPageWithLayout<never> = ({ maintenance_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useMaintenanceStore();
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [isFinished, setIsFinished] = useState<boolean>(false); // 維保任務是否結案的boolean
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);
  const [maintenanceData, setMaintenanceData] = useState<any>(null);

  useEffect(() => {
    updateMainFilter("1");
    setLoading(true);
    // 如果進到檢視頁會先判斷這筆維保單是否已經結案，已結案就不會有編輯按鈕出現
    getMaintenanceById(maintenance_id).then((data) => {
      setMaintenanceData(data);
      if (data.maintenance_status === "3") {
        setIsFinished(true);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!maintenanceData) return;
    !maintenanceData.am_driver_bus_group_no
      ? fetchDDL()
      : fetchDDL(undefined, maintenanceData.am_driver_bus_group_no);
  }, [maintenanceData]);

  //TabsWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //

  console.log("router", router);

  const asyncSubmitForm = async (data: any) => {
    console.log("⚽data", data);
    setLoading(true);

    const driver = mainCreateDdl?.operator_options?.filter((v: { no: any }) => {
      return v.no === data.driver_no;
    });

    const newData = {
      maintenance_no: data.maintenance_no,
      maintenance_type: data.maintenance_type,
      service_start_date: data.service_start_date,
      service_end_date: data.service_end_date,
      meter: Number(data["meter"]),
      driver_no: data.driver_no,
      driver_name: driver[0].name,
      vendor_no: data.vendor_no,
      package_code: data.package_code,
      maintenanceDts: data.maintenanceDts,
      files: data.files
    };
    data["maintenanceDts"]?.map((v: { price: string | number }) => {
      return (v.price = Number(v.price));
    });

    console.log("🉐edited data", newData);
    try {
      const res = await updateMaintenance(newData, data["files"]);
      console.log("儲存 res", res);
      if (isEdit) {
        setIsEdit(false);
        window.location.replace(
          `/maintenance/detail/${maintenance_id}?editPage=view`
        );
      } else {
        setIsEdit(false);
        router.reload();
      }
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
    return;
  };
  const fetchDDL = async (bus_group?: string, dsph_group?: string) => {
    try {
      const res = await getCreateDdl(bus_group, dsph_group);
      if (res.statusCode === "200") {
        setMainCreateDdl(res.dataList[0]);
      } else {
        throw new Error(`${res.resultString}`);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
  //
  const onCancelHandler = () => {
    router.push("/maintenance/mission");
  };

  return (
    <BodySTY>
      <TabsWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainFilterArray}
        onSave={() => {
          submitRef.current?.click();
        }}
        onEdit={() => {
          console.log("set is Edit to true");
          setIsEdit(true);
        }}
        onClose={onCancelHandler}
        isEdit={isEdit}
        viewOnly={isFinished}
      >
        {maintenanceData && (
          <MaintenanceDetail
            isEdit={isEdit}
            submitRef={submitRef}
            asyncSubmitForm={asyncSubmitForm}
            maintenance_id={maintenance_id}
            mainCreateDdl={mainCreateDdl}
            setMainCreateDdl={setMainCreateDdl}
            defaultData={maintenanceData}
            fetchDDL={fetchDDL}
          />
        )}
      </TabsWrapper>
    </BodySTY>
  );
};
interface Props {
  maintenance_id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      maintenance_id: params ? params.id : ""
    }
  };
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
