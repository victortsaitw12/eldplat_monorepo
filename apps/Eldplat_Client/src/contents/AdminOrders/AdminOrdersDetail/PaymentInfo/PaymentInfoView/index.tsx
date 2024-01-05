import React from "react";
import { Pane, Text } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import dayjs from "dayjs";
import { useFormContext, useWatch } from "react-hook-form";

import { BodySTY } from "./style";
const PaymentInfoView = () => {
  const { control } = useFormContext();
  const {
    quote_total_amount, //報價總金額
    deposit, //訂金金額
    final_payment, //尾款金額
    full_payment_amount, //全額付款金額
    full_payment_check, //是否為全額付款
    full_payment_tax, //全額支付是否含稅
    full_payment_period, //全額付款期限
    full_payment_history, //全額付款記錄
    actual_full_payment_date, //全額付款日期
    deposit_check, //勾選預付訂金
    deposit_tax, //預付訂金是否含稅
    deposit_percent, //預付訂金%數
    deposit_amount, //預付訂金金額
    deposit_period, //預付訂金付款期限
    deposit_history, //訂金付款紀錄
    actual_deposit_date, //訂金付款日期
    balance_amount, //尾款支付金額
    balance_period, //尾款支付_付款期限
    balance_tax,
    balance_history, //尾款付款紀錄
    actual_balance_date //尾款付款日期
  } = useWatch({
    control
  });

  const r_content = (
    title: string,
    actualPaidDate: string,
    payment_period: any,
    amount: any,
    withtax: boolean
  ) => {
    if (actualPaidDate == null) {
      return (
        <>
          <VerticalDetail
            title={title}
            items={[
              {
                label: dayjs(payment_period).format("YYYY-MM-DD") + " 前繳款"
              }
            ]}
          />
          <VerticalDetail
            style={{
              textAlign: "right"
            }}
            title={
              amount
                ? "NT$" + amount.toLocaleString() + (withtax ? " 含稅" : "")
                : "--"
            }
            items={[{}]}
          />
        </>
      );
    } else {
      return (
        <>
          <VerticalDetail
            title={title}
            items={[
              {
                label: "付款方式"
              },
              {
                label: "付款時間"
              }
            ]}
          />
          <VerticalDetail
            style={{
              textAlign: "right"
            }}
            title={
              amount
                ? "NT$" + amount.toLocaleString() + (withtax ? " 含稅" : "")
                : "--"
            }
            items={[
              {
                label: "--"
              },
              {
                label: dayjs(actualPaidDate).format("YYYY-MM-DD")
              }
            ]}
          />
        </>
      );
    }
  };

  if (full_payment_check == "1" || deposit_check == "1") {
    return (
      <BodySTY>
        {full_payment_check == "1" && (
          <Pane style={{ padding: "1.25rem", display: "flex", gap: "191px" }}>
            {r_content(
              "全額支付",
              actual_full_payment_date,
              full_payment_period,
              quote_total_amount,
              full_payment_tax
            )}
          </Pane>
        )}
        {deposit_check == "1" && (
          <>
            <Pane style={{ padding: "1.25rem", display: "flex", gap: "191px" }}>
              {r_content(
                "預付訂金",
                actual_deposit_date,
                deposit_period,
                deposit_amount,
                deposit_tax
              )}
            </Pane>
            <Pane
              style={{
                padding: "1.25rem",
                paddingTop: "0rem",
                display: "flex",
                gap: "191px"
              }}
            >
              {r_content(
                "尾款支付",
                actual_balance_date,
                balance_period,
                balance_amount,
                balance_tax
              )}
            </Pane>
          </>
        )}
      </BodySTY>
    );
  } else {
    return (
      <BodySTY>
        <Pane style={{ padding: "1.25rem", display: "flex", gap: "191px" }}>
          <Text className="error">尚未選擇支付方式</Text>
        </Pane>
      </BodySTY>
    );
  }
};
export default PaymentInfoView;
