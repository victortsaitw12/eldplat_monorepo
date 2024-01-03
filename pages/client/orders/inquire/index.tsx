import React, { useState } from "react"
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/ClientLayout";
import { BodySTY } from "./style" 
import QuoteSearch from "@contents/Client/Orders/QuoteSearch";
import QuoteTable from "@contents/Client/Orders/QuoteTable";

const Page: NextPageWithLayout<never> = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <BodySTY>
      <div className="page_title">查詢訂單</div>
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