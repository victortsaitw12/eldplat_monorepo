import React from "react"
import Section from "@contents/Client/Quote/Section";
import { Button, Text } from "evergreen-ui";
import NoticeMessage from "@components/NoticeMessage";
import Table from "@components/Table/Table";
import { BodySTY } from "./style";
import Link from "next/link";

const DUMMY_QuoteHeader = [
  "訂單編號", "訂單狀態", "粗估金額", "服務項目", "用車日期", ""
]

const DUMMY_QuoteDataList = [
  {
    quote_no: "ORD202308100008",
    status: "詢價中",
    estimatePrice: "NTD $2,805",
    services: "客製包車",
    period: "2023-11-11 ～ 2023-11-13",
  },
  {
    quote_no: "ORD202309050003",
    status: "接受報價",
    estimatePrice: "NTD $2,8055",
    services: "客製包車",
    period: "2023-11-12 ～ 2023-11-15",
  },
  {
    quote_no: "ORD202308090012",
    status: "收到報價",
    estimatePrice: "NTD $1,8055",
    services: "客製包車",
    period: "2023-11-12 ～ 2023-11-15",
  },
  {
    quote_no: "ORD202308250001",
    status: "訂單成立",
    estimatePrice: "NTD $3,8055",
    services: "飛機",
    period: "2023-11-12 ～ 2023-11-15",
  },
  {
    quote_no: "ORD202307060002",
    status: "結案",
    estimatePrice: "NTD $4,8055",
    services: "飛機",
    period: "2023-11-12 ～ 2023-11-15",
  },
]

const ButtonGroup = () => {
  const btns = [
    {
      text: "取消",
      onClick: () => { console.log("取消") }
    },
    {
      text: "修改",
      onClick: () => { console.log("修改") }
    }
  ]

  return (  
    <div className="button-wrap">
      {btns.map((btn, index) => {
        return (
          <Button 
            key={index}
            onClick={btn.onClick}
            border="none"
            fontWeight="600"
            fontSize="16px"
          >
            {btn.text}
          </Button>
        )
      })}
    </div>
  )
}

const defaultQuoteData = {
  quote_no: "",
  status: "",
  estimatePrice: "",
  services: "",
  period: "",
  button: <ButtonGroup />
}

const QuoteTable = () => {

  const mappingQuoteData = (quoteDataList: any) => {
    return quoteDataList.map((quoteData: any) => {
      return {
        ...defaultQuoteData,
        ...quoteData,
        quote_no: (
          <Link href={`/client/orders/detail/${quoteData.quote_no}`}>
            {quoteData.quote_no}
          </Link>
        ),
        button: <ButtonGroup />,
      };
    });
  };
  return (
    <BodySTY>
      <Section title="查詢結果">
        <div className="revise-wrap">
            <Text fontSize="16px">若要查看訂單修改紀錄，請點選此快速前往。</Text>
            <Button
              appearance="primary"
              type="button"
              style={{
                color: "#fff",
                backgroundColor: "#5E6C84",
                fontWeight: "600",
                borderRadius: "4px",
                border: "none",
                padding: "8px 16px",
                fontSize: "16px",
              }}
              onClick={() => {console.log("查看修改紀錄")}}
            >
              查看修改紀錄
          </Button>
        </div>
        <NoticeMessage message="注意事項注意事項注意事項注意事項注意事項注意事項" />
        <Table 
          titles={DUMMY_QuoteHeader}
          data={mappingQuoteData(DUMMY_QuoteDataList)}
          onView={() => {console.log("onView")}}
        />
      </Section>
       <Link className="back-link" href="/client">返回首頁</Link>     
    </BodySTY>
  )
}

export default QuoteTable