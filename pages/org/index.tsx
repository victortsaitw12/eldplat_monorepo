import { Pane, Text } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { getLayout } from "@layout/MainLayout";
import Accordion from "@components/Accordion";

const DUMMY_ARR = [
  {
    id: "0-001",
    label: "雄獅通運",
    children: [
      {
        id: "0-00101",
        label: "交通事業處",
        children: [
          { id: "0-0010101", label: "大中巴業務組" },
          { id: "0-0010102", label: "中車駕駛組" },
          { id: "0-0010103", label: "機動駕駛組" },
          { id: "0-0010104", label: "廠務組" }
        ]
      },
      {
        id: "0-00102",
        label: "企劃處",
        children: [{ id: "0-0010201", label: "大中巴業務組" }]
      },
      {
        id: "0-00102",
        label: "資訊處",
        children: []
      }
    ]
  }
];

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("admin_orders")) setPageType("admin_orders");
  }, [router, setPageType]);

  const getOrgTree = (data: any[]) => {
    return data.map((item: any, i: number) => (
      <Accordion
        key={`org-${i}`}
        title="組織樹狀圖"
        parent={item.label}
        orderNum={i}
        dataArr={item.children || []}
      />
    ));
  };
  const orgTree = getOrgTree(DUMMY_ARR);
  return <BodySTY>{orgTree}</BodySTY>;
};

export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query } = context;
  return {
    props: {}
  };
};
// Page.getLayout = getLayout;
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
