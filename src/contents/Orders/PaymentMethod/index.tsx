import React from "react";
import { Pane } from "evergreen-ui";
import dayjs from "dayjs";
import { DivSTY } from "./style";

import Collapse from "@components/Collapse";
import { I_OrderDetail } from "@services/client/getQuotation";
import DetailItem from "@components/DetailList/DetailItem";
import DetailList from "@components/DetailList";

const PaymentMethod = ({ data }: { data: I_OrderDetail }) => {
  return (
    <DivSTY>
      <Pane style={{ borderRadius: "10px", overflow: "hidden" }}>
        <Collapse title="付款方式" opened>
          {data.isfullpay ? (
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
                    value: `NT$${data.quote_total_amount || 0} ${
                      data.full_payment_tax ? "(含稅)" : "(未稅)"
                    }`
                  },
                  {
                    title: "付款方式",
                    value: data.full_payment_history
                  },
                  {
                    title: `${
                      data.actual_full_payment_date
                        ? "付款時間"
                        : dayjs(data.full_payment_period).format("YYYY-MM-DD") +
                          "前繳款"
                    }`,
                    value: data.actual_full_payment_date
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
                    value: `NT$${data.deposit_amount || 0}`
                  },
                  {
                    title: data.deposit_history && "付款方式",
                    value: data.deposit_history
                  },
                  {
                    title: `${
                      data.actual_deposit_date
                        ? "付款時間"
                        : dayjs(data.deposit_period).format("YYYY-MM-DD") +
                          "前繳款"
                    }`,
                    value: data.actual_deposit_date
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
                    value: `NT$${data.balance_amount || 0}  ${
                      data.full_payment_tax ? "(含稅)" : "(未稅)"
                    }`
                  },
                  {
                    title: data.balance_history && "付款方式",
                    value: data.balance_history
                  },
                  {
                    title: `${
                      data.actual_balance_date
                        ? "付款時間"
                        : dayjs(data.balance_period).format("YYYY-MM-DD") +
                          "前繳款"
                    }`,
                    value: data.actual_balance_date
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
