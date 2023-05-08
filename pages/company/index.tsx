import React, { useContext, useState } from "react";
import { BodySTY } from "./style";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import CompanyList from "@contents/Company/CompanyList";
import CompanyProvider, {
  CompanyContext,
  I_Company_Context
} from "@contexts/companyContext/companyProvider";

export const handleCountrySwitch = (country: string) => {
  if (country !== "")
    switch (country) {
      case "TW":
        return "台灣";
      case "US":
        return "美國";
    }
};

const Page: NextPageWithLayout<never> = () => {
  const C_data = useContext<I_Company_Context>(CompanyContext);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <CompanyProvider>
      <BodySTY>
        {/* Put your component here */}
        {loading ? <LoadingSpinner /> : <CompanyList />}
      </BodySTY>
    </CompanyProvider>
  );
};
Page.getLayout = getLayout;
export default Page;
