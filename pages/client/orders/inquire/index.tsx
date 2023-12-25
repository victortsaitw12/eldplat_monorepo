import React, { useState } from "react"
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/ClientLayout";
import Breadcrumbs from "@components/Breadcrumbs";
import { BodySTY } from "./style" 
import QuoteSearch from "@contents/Client/Orders/QuoteSearch";
import QuoteTable from "@contents/Client/Orders/QuoteTable";

const Page: NextPageWithLayout<never> = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <BodySTY>
      <Breadcrumbs
        routes={[
          { label: "首頁", url: "/client" },
          { label: "查詢訂單", url: "/client/orders/inquire" },
        ]}
      />
      <div className="page-title">查詢訂單</div>
      {!isSearch ? 
        <QuoteSearch updateSearchState={setIsSearch} /> :
        <QuoteTable />
      }
    </BodySTY>
  )
} 

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { 
    title: "訂單管理", 
    ...layoutProps 
  });
export default Page