import React, { useEffect, useState, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services

//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import MaintenanceDetail from "@contents/maintenance/MaintenanceDetail";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import { updateMaintenance } from "@services/maintenance/updateMaintenance";
import { getMaintenanceById } from "@services/maintenance/getMaintenanceById";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
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

  // 取得新增時的下拉式資料
  useEffect(() => {
    setLoading(true);
    try {
      getCreateDdl("").then((data) => {
        setMainCreateDdl(data.dataList[0]);
      });
    } catch (err) {
      console.error("getDDL error: ", err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    updateMainFilter("1");

    // 如果進到檢視頁會先判斷這筆維保單是否已經結案，已結案就不會有編輯按鈕出現
    getMaintenanceById(maintenance_id).then((data) => {
      if (data.maintenance_status === "3") {
        setIsFinished(true);
      }
    });
  }, []);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //

  console.log("router", router);
  const asyncSubmitForm = async (data: any) => {
    console.log("⚽data", data);
    setLoading(true);

    const driver = mainCreateDdl?.driver_options?.filter((v: { no: any }) => {
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
        // router.push(`/maintenance/detail/${maintenance_id}?editPage=view`);
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
  //
  const onCancelHandler = () => {
    router.push("/maintenance/mission");
  };

  return (
    <BodySTY>
      <TableWrapper
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
        <MaintenanceDetail
          isEdit={isEdit}
          submitRef={submitRef}
          asyncSubmitForm={asyncSubmitForm}
          maintenance_id={maintenance_id}
          mainCreateDdl={mainCreateDdl}
          setMainCreateDdl={setMainCreateDdl}
        />
      </TableWrapper>
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
