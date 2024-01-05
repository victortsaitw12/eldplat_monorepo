import React from "react";
import { Button, Pane } from "evergreen-ui";
import dayjs from "dayjs";
import { DivSTY, PaymentWrapSTY } from "./style";

import Collapse from "@components/Collapse";
import { I_OrderDetail } from "@services/client/getQuotation";
import DetailItem from "@components/DetailList/DetailItem";
import DetailList from "@components/DetailList";
import { PAYMENT_HISTORY } from "@services/getDDL";
import PaymentBtn from "@contents/Orders/PaymentBtn";
import Section from "@contents/Client/Quote/Section";
import DetailGrid from "@components/DetailGrid";

const PaymentMethod = ({ 
  data, 
  setData,
  setModifyLightboxOpen
}: { data: I_OrderDetail; setData?: any; setModifyLightboxOpen: any}) => {
  return (
    <DivSTY>
      <Pane style={{ borderRadius: "4px", overflow: "hidden" }}>
        <Section title="付款資訊">
          {/* {data.isfullpay || data.actual_full_payment_date ? (
            <>
              {" "}
              <DetailList
                listArray={[
                  {
                    title:
                      data.checktimeout === "11" ? (
                        <>
                          <div>
                            全額支付<span className="red">(已逾期)</span>
                          </div>
                        </>
                      ) : (
                        "全額支付"
                      ),
                    value: `NT$${
                      data.quote_total_amount?.toLocaleString("en-US") || 0
                    } ${data.full_payment_tax ? "(含稅)" : "(未稅)"}`
                  },
                  {
                    title: data.full_payment_history && "付款方式",
                    value:
                      data.full_payment_history &&
                      PAYMENT_HISTORY[data.full_payment_history]?.label
                  },
                  {
                    title: `${
                      data.actual_full_payment_date
                        ? "付款時間"
                        : data.full_payment_period
                        ? dayjs(data.full_payment_period).format("YYYY-MM-DD") +
                          "前繳款"
                        : ""
                    }`,
                    value:
                      data.actual_full_payment_date &&
                      dayjs(data.actual_full_payment_date).format(
                        "YYYY-MM-DD HH:mm"
                      )
                  }
                ]}
              />
            </>
          ) : (
            <>
              <DetailList
                listArray={[
                  {
                    title:
                      data.checktimeout === "9" ? (
                        <>
                          <div>
                            預付訂金<span className="red">(已逾期)</span>
                          </div>
                        </>
                      ) : (
                        "預付訂金"
                      ),
                    value: `NT$${
                      data.deposit_amount?.toLocaleString("en-US") || 0
                    }`
                  },
                  ...(data.deposit_history
                    ? [
                        {
                          title: data.deposit_history && "付款方式",
                          value: PAYMENT_HISTORY[data.deposit_history]?.label
                        }
                      ]
                    : []),
                  {
                    title: `${
                      data.actual_deposit_date
                        ? "付款時間"
                        : data.deposit_period
                        ? dayjs(data.deposit_period).format("YYYY-MM-DD") +
                          "前繳款"
                        : ""
                    }`,
                    value:
                      data.actual_deposit_date &&
                      dayjs(data.actual_deposit_date).format("YYYY-MM-DD HH:mm")
                  }
                ]}
              />
              <DetailList
                listArray={[
                  {
                    title:
                      data.checktimeout === "10" ? (
                        <>
                          <div>
                            尾款支付<span className="red">(已逾期)</span>
                          </div>
                        </>
                      ) : (
                        "尾款支付"
                      ),
                    value: `NT$${
                      data.balance_amount?.toLocaleString("en-US") || 0
                    }  ${data.full_payment_tax ? "(含稅)" : "(未稅)"}`
                  },
                  {
                    title: data.balance_history && "付款方式",
                    value:
                      data.balance_history &&
                      PAYMENT_HISTORY[data.balance_history]?.label
                  },
                  {
                    title: `${
                      data.actual_balance_date
                        ? "付款時間"
                        : data.balance_period
                        ? dayjs(data.balance_period).format("YYYY-MM-DD") +
                          "前繳款"
                        : ""
                    }`,
                    value:
                      data.actual_balance_date &&
                      dayjs(data.actual_balance_date).format("YYYY-MM-DD HH:mm")
                  }
                ]}
              />
            </>
          )} */}
          <PaymentWrapSTY >
            <div className="payment-item">
              <span>訂金</span>
              <span>NTD $1,000 </span>
            </div>
            <div className="payment-item">
              <span>付款期限</span>
              <span className="red">2023/05/11 23:59</span>
            </div>
          </PaymentWrapSTY>
          <PaymentWrapSTY >
            <div  className="payment-item">
              <span>尾款</span>
              <span>NTD $1,805</span>
            </div>
            <div  className="payment-item">
              <span>付款期限</span>
              <span className="red">2023/05/16 23:59</span>
            </div>
          </PaymentWrapSTY>
          <DetailGrid listArray={[
            {
              title: "匯款銀行",
              value: "xx銀行 板橋分行（代號013）",
            }, 
            {
              title: "匯款帳號",
              value: "012345-654321"
            },
            {
              title: "戶名",
              value: "雄獅"
            }
          ]} />
          <Pane
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap="12px"
          >
            <Button 
              className="amend-btn"
              onClick={() => { setModifyLightboxOpen(true) }}  
              >
              修改訂單
            </Button>
            <PaymentBtn data={data} setData={setData} />
          </Pane>
        </Section>
      </Pane>
    </DivSTY>
  );
};

export default PaymentMethod;
