import React, { useEffect, useState, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, Spinner } from "evergreen-ui";
//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";

//@services

//@content
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { useEmployeeFilterStore } from "@contexts/filter/employeeFilterStore";
import { getEmployeeById } from "@services/employee/getEmployeeById";
import RegionProvider from "@contexts/regionContext/regionProvider";
import EmployeeDetail from "@contents/Employee/EmployeeDetail";
import HealthInfo from "@contents/Employee/HealthInfo";

const mainFilterArray = [
  { id: 1, label: "員工資料", value: "1" },
  { id: 2, label: "健康記錄", value: "2" }
];
//
const Page: NextPageWithLayout<never> = ({ userId }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);

  const { mainFilter, updateMainFilter } = useEmployeeFilterStore();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const [nowTab, setNowTab] = useState("1");

  useEffect(() => {
    updateMainFilter("1");
  }, []);
  //TableWrapper
  const changeMainFilterHandler = (value: string) => {
    console.log("changeMainFilterHandler", value);
    //TableWrapper
    setNowTab(value);
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

  useEffect(() => {
    setLoading(true);
    getEmployeeById(userId).then((data) => {
      const newData = { ...data.data };
      const result = {
        user_name: newData.basicInfo["user_name"],
        user_first_name: newData.basicInfo["user_first_name"],
        user_english_name: newData.basicInfo["user_english_name"],
        user_identity: newData.basicInfo["user_identity"],
        user_country: newData.basicInfo["user_country"],
        user_birthday:
          newData.basicInfo["user_birthday"]?.substring(0, 10) || null,
        user_sex: newData.basicInfo["user_sex"],
        user_photo_link: newData.basicInfo["user_photo_link"],
        user_email: newData.basicInfo["user_email"],
        user_phone_code: newData.basicInfo["user_phone_code"],
        user_phone: newData.basicInfo["user_phone"],
        dt_country: newData.basicInfo["dt_country"],
        city: newData.basicInfo["city"],
        district: newData.basicInfo["district"],
        zip_code: newData.basicInfo["zip_code"],
        user_address1: newData.basicInfo["user_address1"],
        user_address2: newData.basicInfo["user_address2"],
        emgc_contact: newData.basicInfo["emgc_contact"],
        emgc_phone_code: newData.basicInfo["emgc_phone_code"],
        emgc_phone: newData.basicInfo["emgc_phone"],
        staff_no: newData.basicInfo["staff_no"],
        job_title: newData.basicInfo["job_title"],
        working_hours_code: newData.basicInfo["working_hours_code"],
        working_hours_name: newData.basicInfo["working_hours_name"],
        company_name: newData.basicInfo["company_name"],
        department: newData.basicInfo["department"],
        group: newData.basicInfo["group"],
        arrive_date: newData.basicInfo["arrive_date"]?.substring(0, 10) || null,
        leave_date: newData.basicInfo["leave_date"]?.substring(0, 10),
        leave_check: newData.basicInfo["leave_check"],
        license_name: newData["licenses"].map(
          (item: { license_name: any }) => item.license_name
        ),
        groups: newData["groups"],
        group_no: newData.groups.map((item: any) => {
          return item["group_no"];
        }),
        languages: newData["languages"],
        healths: newData["healths"],
        invts: newData["invts"]
      };
      console.log("👽👽👽👽👽👽result", result);
      setData(result);
      setLoading(false);
    });
  }, [userId]);

  const r_content = () => {
    switch (nowTab) {
      case "1":
        return (
          <EmployeeDetail
            submitForm={() => {
              console.log("submit");
            }}
            submitRef={submitRef}
            data={data}
            isEdit={false}
          />
        );
      case "2":
        return <HealthInfo userId={userId} isEdit={false} insertData={data} />;
      default:
        break;
    }
  };
  return (
    <RegionProvider>
      <BodySTY>
        <TableWrapper
          isEdit={false}
          // viewOnly={true}
          onChangeTab={changeMainFilterHandler}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
          onSave={() => {
            submitRef.current?.click();
          }}
          onEdit={() => {
            router.push("/employee/edit/" + userId);
          }}
          onClose={onCancelHandler}
        >
          {(!loading && data && r_content()) || (
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
        </TableWrapper>
      </BodySTY>
    </RegionProvider>
  );
};
interface Props {
  userId: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      userId: params ? params.id : ""
    }
  };
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
