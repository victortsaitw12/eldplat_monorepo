import React, { useEffect, useState, useRef } from "react";
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
import { useEmployeeFilterStore } from "@contexts/filter/employeeFilterStore";
const mainFilterArray = [{ id: 1, label: "維保資料", value: "1" }];
//
const Index: NextPageWithLayout<never> = ({ maintenance_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useEmployeeFilterStore();
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

    return;
  };
  //
  const onCancelHandler = () => {
    router.push("/employee");
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
