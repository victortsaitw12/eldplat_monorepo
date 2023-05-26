import React, { useCallback, useEffect, useState } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import BusEditForm from "@contents/Bus/BusEditForm";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import AddEmployee from "@contents/Employee";
import { getEmployeeById } from "@services/employee/getEmployeeById";
import { I_Get_Employees_Type } from "@typings/employee_type";
import { updateEmployee } from "@services/employee/updateEmployee";
import LoadingSpinner from "@components/LoadingSpinner";
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [editData, setEditData] = useState<I_Get_Employees_Type | any>();

  const cancelFormHandler = useCallback(() => {
    router.push("/employee");
  }, [router]);

  useEffect(() => {
    setLoading(true);
    getEmployeeById(userId).then((data) => {
      console.log("single user data-----", data);
      const newData = { ...data.data };
      const result = {
        user_name: newData.basicInfo["user_name"],
        user_first_name: newData.basicInfo["user_first_name"],
        user_english_name: newData.basicInfo["user_english_name"],
        user_identity: newData.basicInfo["user_identity"],
        user_country: newData.basicInfo["user_country"],
        user_birthday: newData.basicInfo["user_birthday"],
        user_sex: newData.basicInfo["user_sex"],
        user_photo_link: newData.basicInfo["user_photo_link"],
        user_email: newData.basicInfo["user_email"],
        user_phone: newData.basicInfo["user_phone"],
        city: newData.basicInfo["city"],
        district: newData.basicInfo["district"],
        user_address1: newData.basicInfo["user_address1"],
        user_address2: newData.basicInfo["user_address2"],
        emgc_contact: newData.basicInfo["emgc_contact"],
        emgc_phone: newData.basicInfo["emgc_phone"],
        staff_no: newData.basicInfo["staff_no"],
        job_title: newData.basicInfo["job_title"],
        company_name: newData.basicInfo["company_name"],
        department: newData.basicInfo["department"],
        group: newData.basicInfo["group"],
        arrive_date: newData.basicInfo["arrive_date"],
        license_name: newData["licenses"].map(
          (item: { license_name: any }) => item.license_name
        ),
        groups: newData["groups"],
        // group_no: newData.groups.map((item: any) => {
        //   return {
        //     title: item["group_name"],
        //     description: item["description"],
        //     id: item["group_no"]
        //   };
        // }),
        languages: newData["languages"],
        healths: newData["healths"]
      };
      setEditData(result);
      setLoading(false);
    });
  }, [userId]);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await updateEmployee(userId, data);
      console.log("res in edit", res);
      router.push("/employee");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };

  console.log("1️⃣editData in edit page:", editData);
  return (
    <BodySTY>
      {
        <Pane width="100%" height="100%" borderRadius="10px" overflow="auto">
          {/* Put your component here */}
          {/* {loading ? (
            <LoadingSpinner />
          ) : (
            <AddEmployee
              submitForm={asyncSubmitForm}
              onCancel={cancelFormHandler}
              editData={editData}
            />
          )} */}
          <AddEmployee
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
            editData={editData}
          />
        </Pane>
      }
    </BodySTY>
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

Page.getLayout = getLayout;
export default Page;
