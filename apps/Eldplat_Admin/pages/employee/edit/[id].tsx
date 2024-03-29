import React, {
  useCallback,
  useEffect,
  useState,
  ReactNode,
  useMemo,
  useRef
} from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane, Spinner } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import AddEmployee from "@contents/Employee";
import { getEmployeeById } from "@services/employee/getEmployeeById";
import { I_Get_Employees_Type } from "@typings/employee_type";
import { updateEmployee } from "@services/employee/updateEmployee";
import RegionProvider from "@contexts/regionContext/regionProvider";
import TabsWrapper from "@layout/TabsWrapper";
import HealthInfo from "@contents/Employee/HealthInfo";
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  const [nowTab, setNowTab] = useState("1");
  const submitRef = useRef<HTMLButtonElement | null>(null);
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "員工資料", value: "1" },
      { id: 2, label: "健康紀錄", value: "2" }
    ],
    []
  );
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [editData, setEditData] = useState<I_Get_Employees_Type | any>();

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
        zip_code: newData.basicInfo["zip_code"],
        user_address1: newData.basicInfo["user_address1"],
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
        groups: newData["groups"], // insertDat不需要的資訊
        group_no: newData.groups.map((item: any) => {
          return item["group_no"];
        }),
        languages: newData["languages"],
        healths: newData["healths"],
        invts: newData["invts"], // insertDat不需要的資訊
        workinghours: newData["workinghours"] // insertDat不需要的資訊
      };
      setEditData(result);
      setLoading(false);
    });
  }, [userId]);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      console.log("updateData:", data);
      const res = await updateEmployee(userId, data);
      console.log("res in edit", res);
      router.push("/employee/detail/" + userId);
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };

  //TabsWrapper
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };

  const handleSaveAll = () => {
    asyncSubmitForm(editData);
  };

  return (
    <RegionProvider>
      <BodySTY>
        {
          <Pane width="100%" height="100%" borderRadius="10px" overflow="auto">
            {(!loading && editData && (
              <TabsWrapper
                onChangeTab={(value) => changeMainFilterHandler(value)}
                mainFilter={nowTab}
                mainFilterArray={mainFilterArray}
              >
                {nowTab === "1" && (
                  <AddEmployee
                    editData={editData}
                    insertData={editData}
                    setInsertData={setEditData}
                  />
                )}
                {nowTab === "2" && (
                  <HealthInfo
                    userName={editData?.user_name || null}
                    userId={userId}
                    isEdit={true}
                    insertData={editData}
                    setInsertData={setEditData}
                  />
                )}
              </TabsWrapper>
            )) || (
              <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={"calc(100vh - 56px)"}
                style={{ padding: 5 }}
              >
                <Spinner />
              </Pane>
            )}
          </Pane>
        }
      </BodySTY>
    </RegionProvider>
  );
};

interface Props {
  userId: string;
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
      userId: params ? params.id : ""
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
