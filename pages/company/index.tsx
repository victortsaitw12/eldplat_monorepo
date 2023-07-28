import React, { useContext, useState, ReactNode } from "react";
import { BodySTY } from "./style";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import CompanyList from "@contents/Company/CompanyList";
import CompanyProvider from "@contexts/companyContext/companyProvider";
import RegionProvider from "@contexts/regionContext/regionProvider";

const Page: NextPageWithLayout<never> = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <CompanyProvider>
      <RegionProvider>
        <BodySTY>
          {/* Put your component here */}
          {loading ? <LoadingSpinner /> : <CompanyList />}
        </BodySTY>
      </RegionProvider>
    </CompanyProvider>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
