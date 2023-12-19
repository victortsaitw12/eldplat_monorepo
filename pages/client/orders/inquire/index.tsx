import React from "react"
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/ClientLayout";
import Breadcrumbs from "@components/Breadcrumbs";
import { BodySTY } from "./style" 
import Section from "@contents/Client/Quote/Section";

const Page: NextPageWithLayout<never> = () => {
  return (
    <BodySTY>
      <Breadcrumbs
        routes={[
          { label: "首頁", url: "/client" },
          { label: "查詢訂單", url: "/client/orders/inquire" },
        ]}
      />
      <div className="page-title">查詢訂單</div>
      <Section title="請輸入訂單聯絡人的手機與信箱">
        <div>CONTENT</div>
      </Section>
    </BodySTY>
  )
} 

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { 
    title: "訂單管理", 
    ...layoutProps 
  });
export default Page