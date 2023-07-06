import React from "react";
import { Pane } from "evergreen-ui";
import dayjs from "dayjs";
import { DivSTY } from "./style";

import Collapse from "@components/Collapse";
import { I_OrderDetail } from "@services/client/getQuotation";
import DetailItem from "@components/DetailList/DetailItem";
import DetailList from "@components/DetailList";
import { PAYMENT_HISTORY } from "@services/getDDL";

const PaymentMethod = ({ data }: { data: I_OrderDetail }) => {
  return (
    <DivSTY>
      <Pane style={{ borderRadius: "10px", overflow: "hidden" }}>
        <Collapse title="付款方式" opened>
          {data.isfullpay || data.actual_full_payment_date ? (
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
          )}
        </Collapse>
      </Pane>
    </DivSTY>
  );
};

export default PaymentMethod;
