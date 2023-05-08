import React, { createContext, useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { BodySTY } from "./style";
import CompanyUpdate from "@contents/Company/CompanyUpdate";
import CompanyProvider from "@contexts/companyContext/companyProvider";
import { updateCompany } from "@services/company/getAllCompany";
//

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await updateCompany(data);
      router.push("/company");
    } catch (e: any) {
      console.error("update company error: ", e);
    }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/company");
  }, [router]);

  return (
    <CompanyProvider>
      <BodySTY>
        {/* Put your component here */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <CompanyUpdate
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
          />
        )}
      </BodySTY>
    </CompanyProvider>
  );
};
Page.getLayout = getLayout;
export default Page;
