import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services
import CustomerDetail from "@contents/Customer/CustomerDetail";
import { updateCustomer } from "@services/customer/updateCustomer";
//
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCustomerStore } from "@contexts/filter/customerStore";
import MaintenanceDetail from "@contents/maintenance/MaintenanceDetail";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import { updateMaintenance } from "@services/maintenance/updateMaintenance";
const mainFilterArray = [{ id: 1, label: "維保資料", value: "1" }];
//
const Index: NextPageWithLayout<never> = ({ maintenance_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useMaintenanceStore();
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  useEffect(() => {
    updateMainFilter("1");
  }, []);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //
  const asyncSubmitForm = async (data: any) => {
    console.log("⚽data", data);
    setLoading(true);

    const newData = {
      maintenance_no: data.maintenance_no,
      maintenance_type: data.maintenance_type,
      service_start_date: data.service_start_date,
      service_end_date: data.service_end_date,
      meter: Number(data["meter"]),
      driver_no: data.driver_no,
      driver_name: data.driver_name,
      vendor_no: data.vendor_no,
      package_code: data.package_code,
      maintenanceDts: data.maintenanceDts
    };
    data["maintenanceDts"]?.map((v: { price: string | number }) => {
      return (v.price = Number(v.price));
    });

    console.log("🉐edited data", newData);

    try {
      const res = await updateMaintenance(newData);
      setIsEdit(false);
    } catch (e: any) {
      console.log(e);
    }
    router.push(`/maintenance/detail/${maintenance_id}?editPage=view`);
    router.reload();
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
      >
        <MaintenanceDetail
          isEdit={isEdit}
          submitRef={submitRef}
          asyncSubmitForm={asyncSubmitForm}
          maintenance_id={maintenance_id}
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
Index.getLayout = getLayout;
export default Index;
