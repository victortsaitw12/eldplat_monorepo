import React, { useCallback, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { createEmployee } from "@services/employee/createEmployee";
import AddEmployee from "@contents/Employee";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<any> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createEmployee(data);
      router.push("/employee");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/employee");
  }, [router]);

  return (
    <BodySTY>
      {/* Put your component here */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <AddEmployee
          submitForm={asyncSubmitForm}
          onCancel={cancelFormHandler}
        />
      )}
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
