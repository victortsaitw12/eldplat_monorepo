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
    actual_full_payment_date, //實際付款記錄
    deposit_check, //勾選預付訂金
    deposit_tax, //預付訂金是否含稅
    deposit_percent, //預付訂金%數
    deposit_amount, //預付訂金金額
    deposit_period, //預付訂金付款期限
    deposit_history, //訂金付款紀錄
    actual_deposit_date, //實際付款日期
    balance_amount, //尾款支付金額
    balance_period, //尾款支付_付款期限
    balance_history //尾款付款紀錄
  } = useWatch({
    control
  });

  if (full_payment_check == "1" || deposit_check == "1") {
    return (
      <BodySTY>
        {full_payment_check == "1" && (
          <Pane style={{ padding: "1.25rem", display: "flex", gap: "191px" }}>
            <VerticalDetail
              title={"全額支付"}
              items={[
                {
                  label:
                    dayjs(full_payment_period).format("YYYY-MM-DD") + " 前繳款"
                }
              ]}
            />
            <VerticalDetail
              style={{
                textAlign: "right"
              }}
              title={
                quote_total_amount
                  ? "NT$" +
                    quote_total_amount.toLocaleString() +
                    (full_payment_tax ? " 含稅" : "")
                  : "--"
              }
              items={[{}]}
            />
          </Pane>
        )}
        {deposit_check == "1" && (
          <>
            <Pane style={{ padding: "1.25rem", display: "flex", gap: "191px" }}>
              <VerticalDetail
                title={"預付訂金"}
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
                  deposit_amount
                    ? "NT$" +
                      deposit_amount.toLocaleString() +
                      (deposit_tax ? " 含稅" : "")
                    : "--"
                }
                items={[
                  {
                    label: "--"
                  },
                  {
                    label: "--"
                  }
                ]}
              />
            </Pane>
            <Pane
              style={{
                padding: "1.25rem",
                paddingTop: "0rem",
                display: "flex",
                gap: "191px"
              }}
            >
              <VerticalDetail
                title={"尾款支付"}
                items={[
                  {
                    label:
                      dayjs(balance_period).format("YYYY-MM-DD") + " 前繳款"
                  }
                ]}
              />
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
