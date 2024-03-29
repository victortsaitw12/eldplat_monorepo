import React, { useCallback, useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import { BodySTY } from "./style";
import CompanyUpdate from "@contents/Company/CompanyUpdate";
import CompanyProvider from "@contexts/companyContext/companyProvider";
import { updateCompany } from "@services/company/getAllCompany";
import RegionProvider from "@contexts/regionContext/regionProvider";
import { keysToDelete } from "@mock-data/company/mock_data";
import { replaceKeysInArray } from "@utils/replaceKeyinObject";
//

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const asyncSubmitForm = async (data: any) => {
    console.log("要送出公司修改的data", data);

    keysToDelete.forEach((key) => {
      delete data[key];
    });

    const keyReplacements = [
      { oldKey: "option_code", newKey: "working_hours_code" },
      { oldKey: "option_name", newKey: "working_hours_name" }
    ];

    const updatedArray = replaceKeysInArray(
      data["company_working_hours"],
      keyReplacements
    );
    data["company_working_hours"] = updatedArray;

    setLoading(true);
    try {
      const res = await updateCompany(data);
      console.log("按下更新公司的res", res);
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
      <RegionProvider>
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
      </RegionProvider>
    </CompanyProvider>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
