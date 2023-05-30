import React from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { TickCircleIcon } from "evergreen-ui";
import { BodySTY } from "./style";

import { getLayout } from "@layout/QuoteLayout";
import StatusCard from "@components/StatusCard";

interface orderData {}

const resData = {
  all: [],
  query: [],
  quote: [],
  pending: [],
  finish: [],
  cancel: []
};

const Page: NextPageWithLayout<never> = () => {
  const layoutProps = {
    title: "訂單管理"
  };
  // ----- variables, states ----- //
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState<any>(null);
  const [nowTab, setNowTab] = React.useState("vendor");
  const [isLoading, setIsLoading] = React.useState(false);

  const tabArr = [
    { id: "0", clientLabel: "", companyLabel: "全部", length: 1 },
    { id: "1", clientLabel: "詢價中", companyLabel: "詢價", length: 1 },
    { id: "2", clientLabel: "已報價", companyLabel: "報價", length: 1 },
    { id: "3", clientLabel: "訂單成立", companyLabel: "訂單", length: 1 },
    { id: "4", clientLabel: "已完成", companyLabel: "訂單", length: 1 },
    { id: "5", clientLabel: "", companyLabel: "已取消", length: 1 }
  ];

  // ----- function ----- //

  const changeMainFilterHandler = (value: string) => setNowTab(value);

  // ----- useEffect ----- //
  // React.useEffect(() => {
  //   if (!id) return;
  //   const fetchData = async (id: string) => {
  //     setIsLoading(true);
  //     console.log("id:", id);
  //     try {
  //       const res = setData(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData(id);
  // }, [id]);

  //外框Layout 2
  //提示layout(只有外框) 1
  //使用條款扭 2
  //Tabs 2.5
  //Breadcrumb 2.5

  return (
    <BodySTY>
      <StatusCard>
        <TickCircleIcon
          color="success"
          style={{ height: "40px", width: "40px" }}
        />
        <div style={{ fontWeight: "600", color: "#567190" }}>
          已收到您的訂車詢價單，業務將盡快為您處理。
        </div>
      </StatusCard>
    </BodySTY>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
