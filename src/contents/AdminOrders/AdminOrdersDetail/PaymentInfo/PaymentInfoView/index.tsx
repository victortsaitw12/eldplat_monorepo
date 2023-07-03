import React from "react";
import { Pane, Text } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import dayjs from "dayjs";
import { useFormContext, useWatch } from "react-hook-form";
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

  const payment_status_text = (paymentType: any) => {
    switch (paymentType) {
      case "1":
        return "全額支付";
      default:
        return "預付訂金";
    }
  };
  const payment_period_date = (paymentType: any) => {
    switch (paymentType) {
      case "1":
        return full_payment_period
          ? dayjs(full_payment_period).format("YYYY-MM-DD") + " 前繳款"
          : "--";
      default:
        return deposit_period
          ? dayjs(deposit_period).format("YYYY-MM-DD") + " 前繳款"
          : "--";
    }
  };
  const payment_price_text = (paymentType: any) => {
    switch (paymentType) {
      case "1":
        return quote_total_amount
          ? "NT$" +
              quote_total_amount.toLocaleString() +
              (full_payment_tax ? " 含稅" : "")
          : "--";
      default:
        return quote_total_amount
          ? "NT$" +
              quote_total_amount.toLocaleString() +
              (full_payment_tax ? " 含稅" : "")
          : "--";
    }
  };

  if (full_payment_check == "1" || deposit_check == "1") {
    return (
      <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
        <VerticalDetail
          title={payment_status_text(full_payment_check)}
          items={[
            {
              label: payment_period_date(full_payment_check)
            }
          ]}
        />
        <VerticalDetail
          title={payment_price_text(full_payment_check)}
          items={[{}]}
        />
      </Pane>
    );
  } else {
    return (
      <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
        <Text>尚未選擇支付方式</Text>
      </Pane>
    );
  }
};
export default PaymentInfoView;
