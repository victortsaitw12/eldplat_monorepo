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
          { id: "0-0010101", label: "A組" },
          { id: "0-0010102", label: "B組" },
          { id: "0-0010103", label: "C組" },
          { id: "0-0010104", label: "D組" }
        ]
      },
      {
        id: "0-00102",
        label: "企劃處",
        children: [
          { id: "0-0010201", label: "a組" },
          { id: "0-0010202", label: "b組" },
          { id: "0-0010203", label: "c組" },
          { id: "0-0010204", label: "d組" }
        ]
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

  return (
    <BodySTY>
      <Accordion title={DUMMY_ARR[0].label} objectArr={DUMMY_ARR[0].children} />
    </BodySTY>
  );
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
