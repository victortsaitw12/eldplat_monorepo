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
import { I_Add_Employees_Type } from "@typings/employee_type";
import { updateEmployee } from "@services/employee/updateEmployee";
import LoadingSpinner from "@components/LoadingSpinner";
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [editData, setEditData] = useState<I_Add_Employees_Type | any>();

  const cancelFormHandler = useCallback(() => {
    router.push("/employee");
  }, [router]);

  useEffect(() => {
    setLoading(true);
    getEmployeeById(userId).then((data) => {
      console.log("single user data-----", data);
      const newData = { ...data.data };
      const result = {
        user_name: newData.basicInfo["user_Name"],
        user_first_name: newData.basicInfo["user_First_Name"],
        user_english_name: newData.basicInfo["user_English_Name"],
        user_identity: newData.basicInfo["user_Identity"],
        user_country: newData.basicInfo["user_Country"],
        user_birthday: newData.basicInfo["user_Birthday"],
        user_sex: newData.basicInfo["user_Sex"],
        user_photo_link: newData.basicInfo["user_Photo_Link"],
        group_no: newData.groups.map((item: any) => {
          return {
            title: item["grouP_NAME"],
            description: item["description"],
            id: item["grouP_NO"]
          };
        }),
        user_email: newData.basicInfo["user_Email"],
        user_phone: newData.basicInfo["user_Phone"],
        user_address: newData.basicInfo["user_Address"],
        city: newData.basicInfo["city"],
        district: newData.basicInfo["district"],
        // street: newData.basicInfo["street"],
        // lane: newData.basicInfo["lane"],
        emgc_phone: newData.basicInfo["emgc_Phone"],
        emgc_contact: newData.basicInfo["emgc_Contact"],
        staff_no: newData.basicInfo["staff_No"],
        job_title: newData.basicInfo["job_Title"],
        department: newData.basicInfo["department"],
        group: newData.basicInfo["group"],
        arrive_date: newData.basicInfo["arrive_Date"],
        license_name: newData.licenses.map((item: any) => {
          return item.license_name;
        }),
        languags: newData.languages.map((item: any) => {
          return {
            languag: item.languag,
            listen: item.listen,
            read: item.read,
            speak: item.speak,
            write: item.write
          };
        }),
        healths: newData.healths.map((item: any) => {
          return {
            heal_date: item.heal_date,
            heal_typ: item.heal_typ,
            heal_agency: item.heal_agency,
            heal_status: item.heal_status,
            heal_examine_date: item.heal_examine_date,
            heal_filename: item.heal_filename,
            invalid: item.invalid,
            invalid_remark: item.invalid_remark
          };
        })
      };
      setEditData(result);
      setLoading(false);
    });
  }, [userId]);

  const asyncSubmitForm = async (data: any) => {
    // setLoading(true);
    try {
      const res = await updateEmployee(userId, data);
      console.log("res in edit", res);
      router.push("/employee");
    } catch (e: any) {
      console.log(e);
    }
    // setLoading(false);
  };
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
